import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import calculateMattressScores from '@/data/algorithm';
import mattressesByType from '@/data/mattresses';
import AlgorithmExplanation from '@/components/AlgorithmExplanation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import { AllAnswers, MattressModel, MattressScores, MattressType, ResultsData } from '@/types';
import { ArrowLeft, ArrowRight, ExternalLink, Info, Star, ThumbsDown, ThumbsUp } from 'lucide-react';

export default function Results() {
  const router = useRouter();
  const { answers } = router.query;
  
  const [results, setResults] = useState<ResultsData | null>(null);
  const [recommendations, setRecommendations] = useState<(MattressModel & {score: number, type: string})[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showAlgorithm, setShowAlgorithm] = useState<boolean>(false);

  useEffect(() => {
    if (!router.isReady || !answers) return;
    
    try {
      // Parse the JSON data from query parameter
      const parsedData = JSON.parse(answers as string) as AllAnswers;
      
      // Calculate scores for each participant
      const participant1Scores = calculateMattressScores(parsedData.participant1);
      
      let participant2Scores: MattressScores | null = null;
      let combinedScores: MattressScores = { ...participant1Scores };
      
      // If we have data for participant 2
      if (Object.keys(parsedData.participant2).length) {
        participant2Scores = calculateMattressScores(parsedData.participant2);
        
        // Combine the scores - average them out
        for (const type in combinedScores) {
          combinedScores[type as MattressType] = (participant1Scores[type as MattressType] + participant2Scores[type as MattressType]) / 2;
        }
      }
      
      // Set all of the calculated scores as results
      setResults({
        participant1: participant1Scores,
        participant2: participant2Scores,
        combined: combinedScores
      });
      
      // Determine top mattress type
      const topTypes = Object.entries(combinedScores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 2)
        .map(entry => entry[0] as MattressType);
      
      // Get recommended mattress models for top types
      const recommendedModels = topTypes.flatMap(type => {
        return mattressesByType[type].map(model => ({
          ...model,
          score: combinedScores[type],
          type
        }));
      }).sort((a, b) => b.score - a.score);
      
      setRecommendations(recommendedModels);
      setLoading(false);
    } catch (error) {
      console.error('Error processing results:', error);
      setLoading(false);
    }
  }, [router.isReady, answers]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 flex items-center justify-center h-[50vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg">Analyzing your responses...</p>
        </div>
      </div>
    );
  }

  if (!results) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center h-[400px] text-center">
          <h1 className="text-2xl font-bold mb-4">No Results Available</h1>
          <p className="mb-6">We couldn't process your questionnaire data. Please try again.</p>
          <Link href="/" passHref>
            <Button>Return to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Format score to percentage with a hard cap at 100%
  const formatScore = (score: number): number => {
    // Scale the raw scores to a reasonable percentage
    // Original scores can be quite high (like 16), so we scale down
    const scaledScore = Math.round((score / 16) * 100);
    // Ensure a minimum of 20% for visual purposes and maximum of 100%
    return Math.min(100, Math.max(20, scaledScore));
  };

  // Get text color based on score percentage
  const getScoreColor = (percent: number): string => {
    if (percent >= 80) return 'text-green-600 dark:text-green-500';
    if (percent >= 60) return 'text-yellow-600 dark:text-yellow-500';
    return 'text-red-600 dark:text-red-500';
  };

  // Get progress bar color based on score percentage
  const getProgressColor = (percent: number): string => {
    if (percent >= 80) return 'bg-green-600 dark:bg-green-500';
    if (percent >= 60) return 'bg-yellow-600 dark:bg-yellow-500';
    return 'bg-red-600 dark:bg-red-500';
  };

  // Format the mattress type name for display
  const formatMattressType = (type: string): string => {
    switch(type) {
      case 'memoryFoam': return 'Memory Foam';
      case 'latexEcoFriendly': return 'Latex/Eco-Friendly';
      case 'innerspring': return 'Innerspring';
      case 'hybrid': return 'Hybrid';
      default: return type.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      <Head>
        <title>Your Mattress Recommendations - Mattress Selector Canada</title>
        <meta name="description" content="View your personalized mattress recommendations" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold mb-4">Your Mattress Recommendations</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Based on your responses, we've identified the best mattress types and specific models for your needs.
          </p>
        </div>

        {/* Mattress Type Scores */}
        <Card className="mb-10 border shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl">Mattress Type Compatibility</CardTitle>
            <CardDescription>
              How well each mattress type matches your preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {Object.entries(results.combined).sort((a, b) => b[1] - a[1]).map(([type, score]) => {
                const percent = formatScore(score);
                return (
                  <div key={type} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-base">{formatMattressType(type)}</span>
                      <span className={`font-bold ${getScoreColor(percent)}`}>{percent}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-3 rounded-full ${getProgressColor(percent)} transition-all duration-500 ease-in-out`}
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowAlgorithm(!showAlgorithm)}
                className="gap-2"
              >
                <Info className="h-4 w-4" />
                {showAlgorithm ? 'Hide Algorithm Details' : 'How We Calculated This'}
              </Button>
            </div>
            
            {showAlgorithm && (
              <div className="mt-6 p-4 bg-muted/50 rounded-lg animate-in fade-in slide-in-from-top-2">
                <AlgorithmExplanation 
                  results={results?.combined} 
                  answers={router.isReady && answers ? JSON.parse(answers as string).participant1 : undefined} 
                />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recommended Mattresses */}
        <h2 className="text-2xl font-bold mb-6">Recommended Mattresses</h2>
        
        <div className="space-y-8 mb-10">
          {recommendations.map((mattress, index) => (
            <Card key={mattress.name} className="border shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-muted/30 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{mattress.name}</h3>
                    <p className="text-muted-foreground mb-2">{formatMattressType(mattress.type)} Mattress</p>
                    
                    <div className="flex items-center mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < mattress.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`} 
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm">{mattress.rating}/5</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="font-medium">Price Range:</p>
                    <p className="text-lg">
                      {typeof mattress.priceRange === 'string' 
                        ? mattress.priceRange 
                        : `$${mattress.priceRange?.min} - $${mattress.priceRange?.max}`
                      }
                    </p>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-6">
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Description</h4>
                    <p>{mattress.description || `A ${mattress.firmness.toLowerCase()} ${formatMattressType(mattress.type).toLowerCase()} mattress with ${mattress.cooling.toLowerCase()} cooling features and ${mattress.motionIsolation.toLowerCase()} motion isolation.`}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium flex items-center gap-2 mb-2">
                        <ThumbsUp className="h-4 w-4 text-green-500" />
                        Pros
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {mattress.pros.map((pro, i) => (
                          <li key={i} className="text-sm">{pro}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium flex items-center gap-2 mb-2">
                        <ThumbsDown className="h-4 w-4 text-red-500" />
                        Cons
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {mattress.cons.map((con, i) => (
                          <li key={i} className="text-sm">{con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {mattress.url && (
                    <div className="mt-6">
                      <Button asChild variant="outline" className="text-sm">
                        <a href={mattress.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          View Details
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10 mb-6">
          <Button 
            variant="outline" 
            onClick={() => router.push('/')}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          
          <Button 
            onClick={() => router.push('/questionnaire')}
            className="gap-2"
          >
            Start New Search
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
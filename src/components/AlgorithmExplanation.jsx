import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export const MATTRESS_CRITERIA = [
  {
    id: 'sleepPosition',
    title: 'Sleep Position',
    description: 'Different mattress types are better for different sleep positions',
    mattressImpacts: {
      memoryFoam: { side: 2, back: 0, stomach: 0, combination: 1 },
      latexEcoFriendly: { side: 0, back: 1, stomach: 2, combination: 1 },
      innerspring: { side: 0, back: 1, stomach: 2, combination: 1 },
      hybrid: { side: 1, back: 2, stomach: 0, combination: 2 }
    }
  },
  {
    id: 'bodySupport',
    title: 'Body Support Needs',
    description: 'Your weight and support needs affect which mattress works best',
    mattressImpacts: {
      memoryFoam: { light: 2, medium: 0, heavy: 0, mixed: 1 },
      latexEcoFriendly: { light: 0, medium: 1, heavy: 2, mixed: 0 },
      innerspring: { light: 0, medium: 0, heavy: 2, mixed: 0 },
      hybrid: { light: 1, medium: 2, heavy: 1, mixed: 2 }
    }
  },
  {
    id: 'firmness',
    title: 'Firmness Preference',
    description: 'Your preferred firmness level',
    mattressImpacts: {
      memoryFoam: { soft: 3, medium: 1, mediumFirm: 0, firm: 0 },
      latexEcoFriendly: { soft: 0, medium: 1, mediumFirm: 2, firm: 2 },
      innerspring: { soft: 0, medium: 0, mediumFirm: 0, firm: 3 },
      hybrid: { soft: 0, medium: 2, mediumFirm: 2, firm: 0 }
    }
  },
  {
    id: 'temperature',
    title: 'Temperature Sensitivity',
    description: 'How cool or warm you like to sleep',
    mattressImpacts: {
      memoryFoam: { hot: -1, cool: 1, neutral: 0, moderate: 0 },
      latexEcoFriendly: { hot: 1, cool: 0, neutral: 0, moderate: 1 },
      innerspring: { hot: 0, cool: 0, neutral: 0, moderate: 0 },
      hybrid: { hot: 1, cool: 0, neutral: 0, moderate: 1 }
    }
  },
  {
    id: 'motionIsolation',
    title: 'Motion Isolation',
    description: 'How important it is that movement on one side doesn\'t disturb the other side',
    mattressImpacts: {
      memoryFoam: { extreme: 2, moderate: 1, minimal: 0, balanced: 0 },
      latexEcoFriendly: { extreme: 0, moderate: 0, minimal: 0, balanced: 1 },
      innerspring: { extreme: 0, moderate: 0, minimal: 1, balanced: 1 },
      hybrid: { extreme: 1, moderate: 1, minimal: 0, balanced: 0 }
    }
  },
  {
    id: 'edgeSupport',
    title: 'Edge Support',
    description: 'How important is the stability of the mattress edges',
    mattressImpacts: {
      memoryFoam: { important: 0, somewhat: 0, notImportant: 0, durability: 0 },
      latexEcoFriendly: { important: 1, somewhat: 0, notImportant: 0, durability: 0 },
      innerspring: { important: 1, somewhat: 0, notImportant: 0, durability: 0 },
      hybrid: { important: 1, somewhat: 0, notImportant: 0, durability: 0 }
    }
  },
  {
    id: 'budget',
    title: 'Budget Range',
    description: 'Your price range affects which mattress types are recommended',
    mattressImpacts: {
      memoryFoam: { budget: 2, midRange: 1, highEnd: 0, luxury: 0 },
      latexEcoFriendly: { budget: -2, midRange: 0, highEnd: 1, luxury: 2 },
      innerspring: { budget: 1, midRange: 0, highEnd: 0, luxury: 0 },
      hybrid: { budget: 0, midRange: 1, highEnd: 2, luxury: 2 }
    }
  },
  {
    id: 'painAreas',
    title: 'Pain Points',
    description: 'Different mattress types address specific pain areas',
    mattressImpacts: {
      memoryFoam: { neck: 2, back: 0, hips: 2, none: 0 },
      latexEcoFriendly: { neck: 0, back: 1, hips: 0, none: 0 },
      innerspring: { neck: 0, back: 1, hips: 0, none: 0 },
      hybrid: { neck: 1, back: 1, hips: 2, none: 0 }
    }
  }
];

const AlgorithmExplanation = ({ answers, participantScores }) => {
  // Map answer codes to more readable formats
  const answerMapping = {
    1: { A: 'side', B: 'back', C: 'stomach', D: 'combination' },
    2: { A: 'light', B: 'medium', C: 'heavy', D: 'mixed' },
    3: { A: 'soft', B: 'medium', C: 'mediumFirm', D: 'firm' },
    5: { A: 'hot', B: 'cool', C: 'neutral', D: 'moderate' },
    6: { A: 'extreme', B: 'moderate', C: 'minimal', D: 'balanced' },
    8: { A: 'important', B: 'somewhat', C: 'notImportant', D: 'durability' },
    9: { A: 'budget', B: 'midRange', C: 'highEnd', D: 'luxury' },
    11: { A: 'neck', B: 'back', C: 'hips', D: 'none' }
  };

  // Gather participant's answers for the criteria we're explaining
  const participant = 'participant1'; // Use first participant for simplicity
  const relevantAnswers = {};
  
  Object.keys(answerMapping).forEach(questionId => {
    if (answers[participant] && answers[participant][questionId]) {
      const answerCode = answers[participant][questionId];
      relevantAnswers[questionId] = answerMapping[questionId][answerCode];
    }
  });

  // Calculate scores for each criterion to show breakdown
  const criteriaScores = {};
  
  MATTRESS_CRITERIA.forEach(criterion => {
    const questionId = parseInt(Object.keys(answerMapping).find(
      id => answerMapping[id] === criterion.mattressImpacts
    ) || Object.keys(answerMapping).find(
      id => Object.keys(criterion.mattressImpacts).some(
        mattressType => Object.keys(answerMapping[id]).some(
          answerCode => answerMapping[id][answerCode] in criterion.mattressImpacts[mattressType]
        )
      )
    ));
    
    if (questionId && relevantAnswers[questionId]) {
      const answer = relevantAnswers[questionId];
      criteriaScores[criterion.id] = {
        memoryFoam: criterion.mattressImpacts.memoryFoam[answer] || 0,
        latexEcoFriendly: criterion.mattressImpacts.latexEcoFriendly[answer] || 0,
        innerspring: criterion.mattressImpacts.innerspring[answer] || 0,
        hybrid: criterion.mattressImpacts.hybrid[answer] || 0
      };
    }
  });

  const typeNames = {
    memoryFoam: 'Memory Foam',
    latexEcoFriendly: 'Latex/Eco-Friendly',
    innerspring: 'Innerspring',
    hybrid: 'Hybrid'
  };

  return (
    <Card className="mb-10">
      <CardHeader>
        <CardTitle>How Your Recommendation Was Generated</CardTitle>
        <CardDescription>
          Our algorithm analyzes your answers to determine the best mattress type for your needs.
          Here's how your answers influenced the recommendation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {MATTRESS_CRITERIA.map((criterion) => {
            const questionId = parseInt(Object.keys(answerMapping).find(
              id => Object.keys(answerMapping[id]).some(
                answerCode => answerMapping[id][answerCode] in criterion.mattressImpacts.memoryFoam
              )
            ));
            
            const answer = relevantAnswers[questionId];
            const hasRelevantAnswer = !!answer;
            
            if (!hasRelevantAnswer) return null;
            
            return (
              <AccordionItem key={criterion.id} value={criterion.id}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="text-left">
                    <span className="font-medium">{criterion.title}</span>
                    <p className="text-sm text-muted-foreground">
                      Your choice: <span className="font-medium text-primary">
                        {answer ? answer.charAt(0).toUpperCase() + answer.slice(1) : 'Not specified'}
                      </span>
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-3 text-muted-foreground">{criterion.description}</p>
                  
                  {hasRelevantAnswer && (
                    <div className="space-y-3">
                      {Object.entries(typeNames).map(([typeKey, typeName]) => {
                        const score = criteriaScores[criterion.id]?.[typeKey] || 0;
                        const scoreText = score > 0 ? `+${score}` : score;
                        const scoreClass = score > 0 ? 'text-green-600' :
                                          score < 0 ? 'text-red-600' : 'text-gray-500';
                        
                        return (
                          <div key={typeKey} className="flex items-center justify-between">
                            <span>{typeName}</span>
                            <span className={`font-medium ${scoreClass}`}>{scoreText} points</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            );
          })}
          
          <AccordionItem value="finalScores">
            <AccordionTrigger className="hover:no-underline">
              <div className="text-left">
                <span className="font-medium">Final Scores</span>
                <p className="text-sm text-muted-foreground">
                  Combined results of all criteria
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-3 text-muted-foreground">
                These final scores determine which mattress types are recommended to you
              </p>
              
              {participantScores && (
                <div className="space-y-3">
                  {Object.entries(participantScores).map(([type, score]) => {
                    // Format score as percentage
                    const maxScore = 35; // Approximate max possible score
                    const scorePercent = Math.min(Math.round((score / maxScore) * 100), 100);
                    const scoreClass = scorePercent >= 80 ? 'text-green-600' :
                                      scorePercent >= 60 ? 'text-amber-600' : 'text-red-600';
                    
                    return (
                      <div key={type} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{typeNames[type]}</span>
                          <span className={`font-medium ${scoreClass}`}>
                            {score.toFixed(1)} points ({scorePercent}%)
                          </span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className={`${
                              scorePercent >= 80 ? 'bg-green-500' :
                              scorePercent >= 60 ? 'bg-amber-500' : 'bg-red-500'
                            } h-2 rounded-full`}
                            style={{ width: `${scorePercent}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default AlgorithmExplanation;
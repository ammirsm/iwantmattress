import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card';
import { Brain, ThumbsUp, MapPin, ArrowRight, Bed, Users, User } from 'lucide-react';
import { captureEvent } from '@/lib/posthog';

export default function Home() {
  const [participants, setParticipants] = useState<number>(1);
  const router = useRouter();

  const startQuestionnaire = () => {
    captureEvent('questionnaire_started', { participants });
    router.push(`/questionnaire?participants=${participants}`);
  };

  return (
    <div className="container px-4 py-8 md:py-12">
      <Head>
        <title>iwantmattress.ca - Find Your Perfect Mattress</title>
        <meta name="description" content="Find the perfect mattress for your needs in Canada with our personalized recommendation tool" />
        
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="flex flex-col items-center fade-in">
        <div className="text-center space-y-4 max-w-3xl mb-12">
          <h1 className="text-4xl font-bold md:text-5xl mb-4">
            Find Your Perfect Mattress ✨
          </h1>
          <p className="text-xl text-muted-foreground">
            Get personalized mattress recommendations based on your sleep preferences and pain concerns.
            We'll help you identify the best mattress options available in 🇨🇦 Canada.
          </p>
        </div>

        <Card className="w-full max-w-md border shadow-lg">
          <CardHeader className="text-center pb-0">
            <CardTitle className="text-2xl">
              How many people will use this mattress? 🛏️
            </CardTitle>
            <CardDescription>
              Select the number of sleepers to customize your experience
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex justify-center gap-4 mb-6">
              <Button
                onClick={() => setParticipants(1)}
                variant={participants === 1 ? "default" : "outline"}
                className="w-32 h-16 flex flex-col items-center justify-center gap-1"
              >
                <User className="h-5 w-5" />
                Just Me
              </Button>
              <Button
                onClick={() => setParticipants(2)}
                variant={participants === 2 ? "default" : "outline"}
                className="w-32 h-16 flex flex-col items-center justify-center gap-1"
              >
                <Users className="h-5 w-5" />
                Me & Partner
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground mb-4">
              {participants === 2 ? 
                "You and your partner will both complete the questionnaire to find a mattress that suits both of your needs." :
                "You'll complete the questionnaire to find a mattress that suits your individual needs."}
            </p>
          </CardContent>
          
          <CardFooter className="flex justify-center pb-6">
            <Button 
              onClick={startQuestionnaire} 
              size="lg"
              className="w-full max-w-xs gap-2"
            >
              Start Questionnaire 🚀
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <div className="mt-20 md:mt-24 text-center max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Why use this selector?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-2">
                  <Brain className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl text-center">Scientific Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our algorithm is based on scientific research about sleep positions, back pain, and mattress firmness.</p>
              </CardContent>
            </Card>
            
            <Card className="border shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-2">
                  <ThumbsUp className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl text-center">Partner Compatibility ❤️</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Find a mattress that works for both you and your partner, even if you have different preferences.</p>
              </CardContent>
            </Card>
            
            <Card className="border shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-2">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl text-center">Canadian Availability 🇨🇦</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">All recommendations are available in Canada with detailed pricing and shipping information.</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-20 md:mt-24 max-w-4xl px-4 mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">
            How Our Mattress Selection Algorithm Works
          </h2>
          
          <div className="space-y-10">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold text-primary">
                1
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">
                  Analyze Your Sleep Preferences
                </h3>
                <p className="text-muted-foreground">
                  We collect information about your sleeping position, firmness preferences, temperature sensitivity, and other key factors that affect mattress comfort.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold text-primary">
                2
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">
                  Score Each Mattress Type 🏆
                </h3>
                <p className="text-muted-foreground">
                  Our algorithm assigns points to four main mattress types (Memory Foam, Latex/Eco-Friendly, Innerspring, and Hybrid) based on how well they match your needs.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold text-primary">
                3
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">
                  Compare Partner Preferences
                </h3>
                <p className="text-muted-foreground">
                  If selecting for a couple, we analyze compatibility between your preferences and find mattresses that will work for both sleepers.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold text-primary">
                4
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">
                  Recommend Specific Models
                </h3>
                <p className="text-muted-foreground">
                  Based on your top scoring mattress types, we recommend specific Canadian mattress models with detailed information about their features, pros, and cons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Disclaimer Section */}
      <div className="container max-w-4xl mt-16 mb-8 text-sm text-muted-foreground">
        <div className="border-t pt-8">
          <h3 className="font-semibold mb-2">Disclaimer</h3>
          <p className="text-xs leading-relaxed">
            The knowledge and recommendations provided by iwantmattress.ca are compiled from extensive 
            research of sleep science literature, mattress industry data, and consumer reviews. We 
            leverage OpenAI's advanced language models (including GPT-4 and O1-Pro) to process and 
            analyze this information, combined with deep research and data aggregation from reputable 
            mattress review websites. While we strive for accuracy through AI-assisted analysis and 
            comprehensive research, we encourage users to conduct their own research and consult 
            healthcare professionals when necessary. Our recommendations serve as a starting point in 
            your mattress selection journey.
          </p>
        </div>
      </div>

      <footer className="mt-20 mb-4 text-center text-sm text-muted-foreground">
        <p>Mattress Selector Canada - Find your perfect night's sleep 💤</p>
      </footer>
    </div>
  );
}
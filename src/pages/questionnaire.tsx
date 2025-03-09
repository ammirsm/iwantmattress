import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import questionnaire from '@/data/questionnaire';
import { AllAnswers, FollowUpAnswer, ParticipantAnswers } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowLeft, ArrowRight, CheckCircle2, User, Users } from 'lucide-react';

export default function Questionnaire() {
  const router = useRouter();
  const { participants } = router.query;
  
  const [currentParticipant, setCurrentParticipant] = useState<number>(1);
  const [answers, setAnswers] = useState<AllAnswers>({
    participant1: {},
    participant2: {}
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  // If questionnaire not loaded yet or router not ready
  if (!questionnaire.length || !router.isReady) {
    return (
      <div className="container mx-auto px-4 flex items-center justify-center h-[50vh]">
        <Head>
          <title>Mattress Questionnaire | iwantmattress.ca</title>
          <meta name="description" content="Complete our questionnaire to find your perfect mattress match in Canada" />
        </Head>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg">Loading questionnaire...</p>
        </div>
      </div>
    );
  }

  // Log questionnaire data for debugging
  console.log('Questionnaire data:', questionnaire);

  const participantKey = `participant${currentParticipant}` as keyof AllAnswers;

  // Handle selection of main question option
  const handleOptionSelect = (questionId: number, optionId: string) => {
    const newAnswers = { ...answers };
    (newAnswers[participantKey] as ParticipantAnswers)[questionId] = optionId;
    setAnswers(newAnswers);
  };

  // Handle selection of follow-up question options
  const handleFollowUpSelect = (questionId: number, optionId: number, isMultiSelect: boolean) => {
    const followUpKey = `${questionId}_followUp`;
    const newAnswers = { ...answers };
    
    if (isMultiSelect) {
      // For multi-select, we store an array of selected options
      if (!newAnswers[participantKey][followUpKey]) {
        newAnswers[participantKey][followUpKey] = { selectedOptions: [] } as FollowUpAnswer;
      }
      
      const currentSelections = (newAnswers[participantKey][followUpKey] as FollowUpAnswer).selectedOptions || [];
      
      if (currentSelections.includes(optionId)) {
        // Remove if already selected
        (newAnswers[participantKey][followUpKey] as FollowUpAnswer).selectedOptions = currentSelections.filter(id => id !== optionId);
      } else {
        // Add if not selected
        (newAnswers[participantKey][followUpKey] as FollowUpAnswer).selectedOptions = [...currentSelections, optionId];
      }
    } else {
      // For single select, we store a single value
      newAnswers[participantKey][followUpKey] = { selectedOptions: [optionId] } as FollowUpAnswer;
    }
    
    setAnswers(newAnswers);
  };

  // Check if an option is selected
  const isOptionSelected = (questionId: number, optionId: string): boolean => {
    return answers[participantKey][questionId] === optionId;
  };

  // Check if a follow-up option is selected
  const isFollowUpSelected = (questionId: number, optionId: number): boolean => {
    const followUpKey = `${questionId}_followUp`;
    if (!answers[participantKey][followUpKey]) return false;
    
    const selectedOptions = (answers[participantKey][followUpKey] as FollowUpAnswer).selectedOptions || [];
    return selectedOptions.includes(optionId);
  };

  // Handle form submission
  const handleSubmit = () => {
    setIsSubmitting(true);
    
    if (Number(participants) === 2 && currentParticipant === 1) {
      // If there's a second participant, move to their questions
      setCurrentParticipant(2);
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Otherwise, submit the form and go to results
      const queryParams = new URLSearchParams();
      
      // Serialize answers for URL
      queryParams.append('answers', JSON.stringify(answers));
      
      // Navigate to results page
      router.push(`/results?${queryParams.toString()}`);
    }
  };

  // Check if the form is complete for the current participant
  const isFormComplete = (): boolean => {
    const requiredQuestions = questionnaire.filter(q => !q.optional);
    const participantAnswers = answers[participantKey];
    
    return requiredQuestions.every(question => {
      return participantAnswers[question.id] !== undefined;
    });
  };

  // Calculate progress percentage
  const calculateProgress = (): number => {
    const totalQuestions = questionnaire.filter(q => !q.optional).length;
    const answeredQuestions = questionnaire.filter(q => !q.optional && answers[participantKey][q.id] !== undefined).length;
    
    return Math.round((answeredQuestions / totalQuestions) * 100);
  };

  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      <Head>
        <title>Mattress Questionnaire | iwantmattress.ca</title>
        <meta name="description" content="Complete our questionnaire to find your perfect mattress match in Canada" />
      </Head>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Find Your Perfect Mattress</h1>
        
        {/* Sticky progress section */}
        <div className="sticky top-16 z-10 py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b mb-8">
          {Number(participants) === 2 && (
            <div className="flex items-center justify-center gap-2 mb-6">
              <Button 
                variant={currentParticipant === 1 ? "default" : "outline"}
                size="sm"
                className="gap-2"
                onClick={() => setCurrentParticipant(1)}
                disabled={currentParticipant === 1}
              >
                <User className="h-4 w-4" />
                Person 1
              </Button>
              <Button 
                variant={currentParticipant === 2 ? "default" : "outline"}
                size="sm"
                className="gap-2"
                onClick={() => setCurrentParticipant(2)}
                disabled={currentParticipant === 2 || !isFormComplete()}
              >
                <User className="h-4 w-4" />
                Person 2
              </Button>
            </div>
          )}
          
          <div className="mb-2 flex items-center gap-2 justify-center">
            <span className="text-sm font-medium">Progress:</span>
            <span className="text-sm font-medium">{calculateProgress()}%</span>
          </div>
          <Progress value={calculateProgress()} className="h-2 w-full max-w-md mx-auto" />
        </div>

        <div className="space-y-8">
          {questionnaire.map((question) => (
            <Card key={question.id} className="border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-foreground">{question.question}</CardTitle>
                {question.description && (
                  <CardDescription className="text-muted-foreground mt-2">{question.description}</CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <RadioGroup 
                  value={answers[participantKey][question.id] as string || ""}
                  onValueChange={(value) => handleOptionSelect(question.id, value)}
                  className="space-y-3"
                >
                  {question.options.map((option) => (
                    <div key={option.id} className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value={option.id.toString()} id={`q${question.id}-${option.id}`} />
                        <label 
                          htmlFor={`q${question.id}-${option.id}`}
                          className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {option.text}
                        </label>
                      </div>

                      {/* Follow-up questions */}
                      {option.followUp && isOptionSelected(question.id, option.id.toString()) && (
                        <div className="ml-6 mt-3 p-4 border-l-2 border-primary/20 pl-4 bg-muted/20 rounded-sm animate-in fade-in slide-in-from-left-1">
                          <p className="text-sm font-medium mb-3">{option.followUp.question}</p>
                          
                          <div className="space-y-2">
                            {option.followUp.options.map((followUpOption) => (
                              <div key={followUpOption.id} className="flex items-center space-x-2">
                                {option.followUp?.multiSelect ? (
                                  <Checkbox 
                                    id={`q${question.id}-followup-${followUpOption.id}`}
                                    checked={isFollowUpSelected(question.id, Number(followUpOption.id))}
                                    onCheckedChange={() => handleFollowUpSelect(question.id, Number(followUpOption.id), true)}
                                  />
                                ) : (
                                  <RadioGroupItem 
                                    value={followUpOption.id.toString()} 
                                    id={`q${question.id}-followup-${followUpOption.id}`}
                                    checked={isFollowUpSelected(question.id, Number(followUpOption.id))}
                                    onClick={() => handleFollowUpSelect(question.id, Number(followUpOption.id), false)}
                                  />
                                )}
                                <label 
                                  htmlFor={`q${question.id}-followup-${followUpOption.id}`}
                                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {followUpOption.text}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex justify-between">
          <Button 
            variant="outline"
            onClick={() => router.push('/')}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          
          <Button 
            onClick={handleSubmit}
            disabled={!isFormComplete() || isSubmitting}
            className="gap-2"
          >
            {isSubmitting ? (
              'Processing...'
            ) : Number(participants) === 2 && currentParticipant === 1 ? (
              <>
                Next Person
                <ArrowRight className="h-4 w-4" />
              </>
            ) : (
              <>
                Get Results
                <CheckCircle2 className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
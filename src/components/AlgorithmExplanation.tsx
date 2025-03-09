"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MattressScores, ParticipantAnswers } from '@/types';

interface AlgorithmExplanationProps {
  results?: MattressScores;
  answers?: ParticipantAnswers;
}

export default function AlgorithmExplanation({ results, answers }: AlgorithmExplanationProps) {
  // Function to get top contributing factors for a mattress type
  const getTopContributingFactors = (mattressType: string): React.ReactNode => {
    if (!answers) return null;
    
    const factors = [];

    // Position
    if (answers[1] === 'A' && mattressType === 'memoryFoam') {
      factors.push(<li key="side">Side sleeping position (+2 points): Memory foam provides better pressure relief for shoulders and hips</li>);
    }
    if (answers[1] === 'B' && mattressType === 'hybrid') {
      factors.push(<li key="back">Back sleeping position (+2 points): Hybrid mattresses offer ideal support for spinal alignment</li>);
    }
    if (answers[1] === 'C' && (mattressType === 'latexEcoFriendly' || mattressType === 'innerspring')) {
      factors.push(<li key="stomach">Stomach sleeping position (+2 points): Firmer support prevents sinking of hips and maintains alignment</li>);
    }
    if (answers[1] === 'D' && mattressType === 'hybrid') {
      factors.push(<li key="combo">Combination sleeping position (+2 points): Hybrid mattresses adapt well to position changes</li>);
    }

    // Firmness preference
    if (answers[3] === 'A' && mattressType === 'memoryFoam') {
      factors.push(<li key="soft">Preference for soft mattress (+3 points): Memory foam offers plush, contouring comfort</li>);
    }
    if (answers[3] === 'C' && mattressType === 'latexEcoFriendly') {
      factors.push(<li key="mediumFirm">Preference for medium-firm mattress (+2 points): Latex provides resilient support with moderate contouring</li>);
    }
    if (answers[3] === 'D' && mattressType === 'innerspring') {
      factors.push(<li key="firm">Preference for firm mattress (+3 points): Innerspring offers sturdy, consistent support</li>);
    }

    // Material preference
    if (answers[4]) {
      const materialMap: {[key: string]: string} = {
        'A': 'memoryFoam',
        'B': 'latexEcoFriendly',
        'C': 'innerspring',
        'D': 'hybrid'
      };
      if (mattressType === materialMap[answers[4] as string]) {
        factors.push(<li key="material">Direct preference for this material (+3 points): You specifically indicated a preference for this type</li>);
      }
    }

    // Temperature sensitivity
    if (answers[5] === 'A' && (mattressType === 'latexEcoFriendly' || mattressType === 'hybrid')) {
      factors.push(<li key="hot">Heat sensitivity (+1 point): This mattress type offers better cooling properties</li>);
    }
    if (answers[5] === 'A' && mattressType === 'memoryFoam') {
      factors.push(<li key="hotNeg">Heat sensitivity (-1 point): Memory foam can retain more heat</li>);
    }

    // Motion isolation
    if (answers[6] === 'A' && mattressType === 'memoryFoam') {
      factors.push(<li key="motion">High motion isolation importance (+2 points): Memory foam excels at absorbing movement</li>);
    }

    // Budget
    if (answers[9] === 'A' && mattressType === 'memoryFoam') {
      factors.push(<li key="budget">Budget range $400-$800 (+2 points): Memory foam options are available in more affordable price ranges</li>);
    }
    if (answers[9] === 'D' && (mattressType === 'latexEcoFriendly' || mattressType === 'hybrid')) {
      factors.push(<li key="premium">Premium budget $2000+ (+2 points): Higher budget allows for premium materials and construction</li>);
    }

    // Pain areas
    if (answers[11] === 'A' && mattressType === 'memoryFoam') {
      factors.push(<li key="neckPain">Neck/shoulder pain (+2 points): Memory foam provides targeted pressure relief for these areas</li>);
    }
    if (answers[11] === 'B' && mattressType === 'hybrid') {
      factors.push(<li key="backPain">Back pain (+1 point): Hybrid mattresses balance support and comfort for back pain relief</li>);
    }
    if (answers[11] === 'C' && mattressType === 'memoryFoam') {
      factors.push(<li key="hipPain">Hip/knee pain (+2 points): Memory foam reduces pressure on these sensitive joints</li>);
    }

    return factors.length > 0 ? (
      <ul className="list-disc pl-5 space-y-1">
        {factors}
      </ul>
    ) : (
      <p>Multiple factors contributed to this score based on your preferences.</p>
    );
  };

  // Get the top scoring mattress type
  const getTopMattressType = (): string => {
    if (!results) return 'Memory Foam';
    
    let topType = 'memoryFoam';
    let topScore = results.memoryFoam;
    
    if (results.latexEcoFriendly > topScore) {
      topType = 'latexEcoFriendly';
      topScore = results.latexEcoFriendly;
    }
    if (results.innerspring > topScore) {
      topType = 'innerspring';
      topScore = results.innerspring;
    }
    if (results.hybrid > topScore) {
      topType = 'hybrid';
      topScore = results.hybrid;
    }
    
    return topType;
  };

  // Format mattress type name for display
  const formatMattressType = (type: string): string => {
    switch(type) {
      case 'memoryFoam': return 'Memory Foam';
      case 'latexEcoFriendly': return 'Latex/Eco-Friendly';
      case 'innerspring': return 'Innerspring';
      case 'hybrid': return 'Hybrid';
      default: return type.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    }
  };

  const topType = getTopMattressType();

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>How Our Recommendation Algorithm Works</CardTitle>
        <CardDescription>
          Understanding how we match you with the perfect mattress
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="scoring">
            <AccordionTrigger>Personalized Scoring System</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                Our algorithm assigns weighted points to four mattress categories (Memory Foam, Latex/Eco-Friendly, 
                Innerspring, and Hybrid) based on your answers.
              </p>
              <p className="mb-4">
                For your specific preferences, {formatMattressType(topType)} received the highest score 
                because it aligns best with your sleep needs.
              </p>
              
              {results && (
                <div className="space-y-4 pt-2">
                  <h4 className="font-medium">Your Scores:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Memory Foam: <span className="font-semibold">{results.memoryFoam.toFixed(1)} points</span></div>
                    <div>Latex/Eco-Friendly: <span className="font-semibold">{results.latexEcoFriendly.toFixed(1)} points</span></div>
                    <div>Innerspring: <span className="font-semibold">{results.innerspring.toFixed(1)} points</span></div>
                    <div>Hybrid: <span className="font-semibold">{results.hybrid.toFixed(1)} points</span></div>
                  </div>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="topFactors">
            <AccordionTrigger>Why {formatMattressType(topType)} Scored Highest</AccordionTrigger>
            <AccordionContent>
              <p className="mb-3">
                Based on your questionnaire responses, here's why {formatMattressType(topType)} is your best match:
              </p>
              {getTopContributingFactors(topType)}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="factors">
            <AccordionTrigger>Key Factors Considered</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">The most influential factors in your results were:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Sleeping position (Question 1)</li>
                <li>Firmness preference (Question 3)</li>
                <li>Material preference (Question 4)</li>
                {answers && answers[5] === 'A' && <li>Temperature sensitivity (Question 5)</li>}
                {answers && answers[6] === 'A' && <li>Motion isolation needs (Question 6)</li>}
                {answers && answers[11] !== 'D' && <li>Pain points (Question 11)</li>}
                <li>Budget considerations (Question 9)</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="recommendations">
            <AccordionTrigger>From Scores to Recommendations</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                After identifying {formatMattressType(topType)} as your primary match, we selected specific 
                mattress models available in Canada that:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Match your top mattress type</li>
                <li>Align with your firmness preferences</li>
                <li>Fall within your indicated budget range</li>
                <li>Address any specific concerns you mentioned (pain relief, temperature, etc.)</li>
              </ul>
              <p className="mt-3">
                Each recommendation is then ranked based on its compatibility score with your specific needs.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
} 
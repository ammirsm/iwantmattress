"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function AlgorithmExplanation() {
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
              <p>
                For example, if you're a side sleeper, Memory Foam gets +2 points because it provides 
                better pressure relief for shoulders and hips.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="factors">
            <AccordionTrigger>Key Factors Considered</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>Sleeping position preferences</li>
                <li>Body type and weight</li>
                <li>Firmness preferences</li>
                <li>Temperature sensitivity</li>
                <li>Motion isolation needs</li>
                <li>Pain points and pressure relief</li>
                <li>Budget considerations</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="couple">
            <AccordionTrigger>Couples Compatibility</AccordionTrigger>
            <AccordionContent>
              <p>
                For couples, we analyze both sets of preferences and calculate a combined score 
                that represents the best compromise. This might lead to recommendations for split comfort
                mattresses or models that balance both partners' needs.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="recommendations">
            <AccordionTrigger>Final Recommendations</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                The mattress type with the highest score becomes your primary recommendation.
                We then match this with specific models available in Canada that meet your criteria.
              </p>
              <p>
                Each recommendation includes detailed specs, pros and cons, and a compatibility score 
                to help you make the best decision.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
} 
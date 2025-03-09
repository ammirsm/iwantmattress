// Question and Questionnaire types
export type QuestionOption = {
  id: string | number;
  text: string;
};

export type FollowUpQuestion = {
  question: string;
  options: QuestionOption[];
  multiSelect: boolean;
};

export type Question = {
  id: number;
  question: string;
  options: QuestionOption[];
  followUp?: FollowUpQuestion;
};

export type Questionnaire = Question[];

// Answer types
export type FollowUpAnswer = number | number[];

export type ParticipantAnswers = {
  [questionId: string]: string | FollowUpAnswer;
};

export type AllAnswers = {
  participant1: ParticipantAnswers;
  participant2: ParticipantAnswers;
};

// Mattress types
export type MattressType = 'memoryFoam' | 'latexEcoFriendly' | 'innerspring' | 'hybrid';

export type MattressScores = {
  [key in MattressType]: number;
};

// Results types
export type ResultsData = {
  participant1: MattressScores;
  participant2: MattressScores | null;
  combined: MattressScores;
};

// Mattress model types
export type MattressModel = {
  name: string;
  firmness: string;
  type: string;
  cooling: string;
  motionIsolation: string;
  edgeSupport: string;
  priceRange: string;
  pros: string[];
  cons: string[];
  link: string;
  score?: number;
};

export type MattressesByType = {
  [key in MattressType]: MattressModel[];
};

// Algorithm explanation types
export type CriterionImpact = {
  [answer: string]: number;
};

export type MattressImpacts = {
  [key in MattressType]: CriterionImpact;
};

export type Criterion = {
  id: string;
  title: string;
  description: string;
  mattressImpacts: MattressImpacts;
};
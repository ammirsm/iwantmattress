import React from 'react';
import { AllAnswers, MattressScores, Criterion } from '@/types';

export const MATTRESS_CRITERIA: Criterion[] = [
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

// Styles
const styles = {
  card: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '2.5rem',
    overflow: 'hidden'
  },
  cardHeader: {
    padding: '1.5rem'
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  },
  cardDescription: {
    fontSize: '0.875rem',
    color: '#666'
  },
  cardContent: {
    padding: '0 1.5rem 1.5rem'
  },
  accordionList: {
    width: '100%'
  },
  accordionItem: {
    borderBottom: '1px solid #eee'
  },
  accordionButton: {
    width: '100%',
    textAlign: 'left',
    background: 'none',
    border: 'none',
    padding: '1rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#333'
  },
  accordionContent: {
    padding: '0 0 1rem',
    overflow: 'hidden'
  },
  scoringContent: {
    marginTop: '0.75rem'
  },
  criterionTitleGroup: {
    textAlign: 'left' as const
  },
  criterionTitle: {
    fontWeight: '500',
    fontSize: '1rem'
  },
  criterionAnswer: {
    fontSize: '0.875rem',
    color: '#666',
    marginTop: '0.25rem'
  },
  answerHighlight: {
    fontWeight: '500',
    color: '#4a90e2'
  },
  criterionDescription: {
    fontSize: '0.875rem',
    color: '#666',
    marginBottom: '0.75rem'
  },
  scoreLine: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.75rem'
  },
  scorePositive: {
    fontWeight: '500',
    color: '#4caf50'
  },
  scoreNeutral: {
    fontWeight: '500',
    color: '#666'
  },
  scoreNegative: {
    fontWeight: '500',
    color: '#f44336'
  },
  progressBar: {
    width: '100%',
    height: '0.5rem',
    backgroundColor: '#eee',
    borderRadius: '0.25rem',
    marginTop: '0.25rem'
  },
  progressFill: {
    height: '100%',
    borderRadius: '0.25rem'
  }
};

interface AlgorithmExplanationProps {
  answers: AllAnswers;
  participantScores: MattressScores;
}

interface AnswerMapping {
  [questionId: string]: {
    [answerCode: string]: string;
  };
}

interface CriteriaScores {
  [criterionId: string]: MattressScores;
}

const AlgorithmExplanation: React.FC<AlgorithmExplanationProps> = ({ answers, participantScores }) => {
  const [openAccordion, setOpenAccordion] = React.useState<string | null>('finalScores');

  // Map answer codes to more readable formats
  const answerMapping: AnswerMapping = {
    '1': { A: 'side', B: 'back', C: 'stomach', D: 'combination' },
    '2': { A: 'light', B: 'medium', C: 'heavy', D: 'mixed' },
    '3': { A: 'soft', B: 'medium', C: 'mediumFirm', D: 'firm' },
    '5': { A: 'hot', B: 'cool', C: 'neutral', D: 'moderate' },
    '6': { A: 'extreme', B: 'moderate', C: 'minimal', D: 'balanced' },
    '8': { A: 'important', B: 'somewhat', C: 'notImportant', D: 'durability' },
    '9': { A: 'budget', B: 'midRange', C: 'highEnd', D: 'luxury' },
    '11': { A: 'neck', B: 'back', C: 'hips', D: 'none' }
  };

  // Gather participant's answers for the criteria we're explaining
  const participant = 'participant1'; // Use first participant for simplicity
  const relevantAnswers: { [key: string]: string } = {};
  
  Object.keys(answerMapping).forEach(questionId => {
    if (answers[participant] && answers[participant][questionId]) {
      const answerCode = answers[participant][questionId] as string;
      relevantAnswers[questionId] = answerMapping[questionId][answerCode];
    }
  });

  // Calculate scores for each criterion to show breakdown
  const criteriaScores: CriteriaScores = {};
  
  MATTRESS_CRITERIA.forEach(criterion => {
    const questionId = parseInt(Object.keys(answerMapping).find(
      id => answerMapping[id] === criterion.mattressImpacts
    ) || Object.keys(answerMapping).find(
      id => Object.keys(criterion.mattressImpacts).some(
        mattressType => Object.keys(answerMapping[id]).some(
          answerCode => answerMapping[id][answerCode] in criterion.mattressImpacts[mattressType as keyof typeof criterion.mattressImpacts]
        )
      )
    ) || '0');
    
    if (questionId && relevantAnswers[questionId]) {
      const answer = relevantAnswers[questionId];
      criteriaScores[criterion.id] = {
        memoryFoam: criterion.mattressImpacts.memoryFoam[answer as keyof typeof criterion.mattressImpacts.memoryFoam] || 0,
        latexEcoFriendly: criterion.mattressImpacts.latexEcoFriendly[answer as keyof typeof criterion.mattressImpacts.latexEcoFriendly] || 0,
        innerspring: criterion.mattressImpacts.innerspring[answer as keyof typeof criterion.mattressImpacts.innerspring] || 0,
        hybrid: criterion.mattressImpacts.hybrid[answer as keyof typeof criterion.mattressImpacts.hybrid] || 0
      };
    }
  });

  const typeNames = {
    memoryFoam: 'Memory Foam',
    latexEcoFriendly: 'Latex/Eco-Friendly',
    innerspring: 'Innerspring',
    hybrid: 'Hybrid'
  };

  const toggleAccordion = (accordionId: string) => {
    if (openAccordion === accordionId) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(accordionId);
    }
  };

  // Format score as percentage
  const formatScore = (score: number): number => {
    const maxScore = 35; // Approximate max possible score
    return Math.min(Math.round((score / maxScore) * 100), 100);
  };

  // Get color for score
  const getScoreColor = (score: number): string => {
    if (score > 0) return '#4caf50';
    if (score < 0) return '#f44336';
    return '#666';
  };

  const getProgressColor = (percent: number): string => {
    if (percent >= 80) return '#4caf50';
    if (percent >= 60) return '#ff9800';
    return '#f44336';
  };

  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <h2 style={styles.cardTitle}>How Your Recommendation Was Generated</h2>
        <p style={styles.cardDescription}>
          Our algorithm analyzes your answers to determine the best mattress type for your needs.
          Here's how your answers influenced the recommendation.
        </p>
      </div>
      <div style={styles.cardContent}>
        <div style={styles.accordionList}>
          {MATTRESS_CRITERIA.map((criterion) => {
            const questionId = parseInt(Object.keys(answerMapping).find(
              id => Object.keys(answerMapping[id]).some(
                answerCode => answerMapping[id][answerCode] in criterion.mattressImpacts.memoryFoam
              )
            ) || '0');
            
            const answer = relevantAnswers[questionId.toString()];
            const hasRelevantAnswer = !!answer;
            
            if (!hasRelevantAnswer) return null;
            
            return (
              <div key={criterion.id} style={styles.accordionItem}>
                <button 
                  style={styles.accordionButton}
                  onClick={() => toggleAccordion(criterion.id)}
                >
                  <div style={styles.criterionTitleGroup}>
                    <div style={styles.criterionTitle}>{criterion.title}</div>
                    <div style={styles.criterionAnswer}>
                      Your choice: <span style={styles.answerHighlight}>
                        {answer ? answer.charAt(0).toUpperCase() + answer.slice(1) : 'Not specified'}
                      </span>
                    </div>
                  </div>
                  <span>{openAccordion === criterion.id ? '▲' : '▼'}</span>
                </button>
                
                {openAccordion === criterion.id && (
                  <div style={styles.accordionContent}>
                    <p style={styles.criterionDescription}>{criterion.description}</p>
                    
                    {hasRelevantAnswer && (
                      <div style={styles.scoringContent}>
                        {Object.entries(typeNames).map(([typeKey, typeName]) => {
                          const score = criteriaScores[criterion.id]?.[typeKey as keyof MattressScores] || 0;
                          const scoreText = score > 0 ? `+${score}` : score.toString();
                          const scoreStyle = score > 0 ? styles.scorePositive :
                                           score < 0 ? styles.scoreNegative : styles.scoreNeutral;
                          
                          return (
                            <div key={typeKey} style={styles.scoreLine}>
                              <span>{typeName}</span>
                              <span style={scoreStyle}>{scoreText} points</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
          
          <div style={styles.accordionItem}>
            <button 
              style={styles.accordionButton}
              onClick={() => toggleAccordion('finalScores')}
            >
              <div style={styles.criterionTitleGroup}>
                <div style={styles.criterionTitle}>Final Scores</div>
                <div style={styles.criterionAnswer}>
                  Combined results of all criteria
                </div>
              </div>
              <span>{openAccordion === 'finalScores' ? '▲' : '▼'}</span>
            </button>
            
            {openAccordion === 'finalScores' && (
              <div style={styles.accordionContent}>
                <p style={styles.criterionDescription}>
                  These final scores determine which mattress types are recommended to you
                </p>
                
                {participantScores && (
                  <div style={styles.scoringContent}>
                    {Object.entries(participantScores).map(([type, score]) => {
                      // Format score as percentage
                      const scorePercent = formatScore(score);
                      const progressColor = getProgressColor(scorePercent);
                      
                      return (
                        <div key={type} style={{ marginBottom: '1rem' }}>
                          <div style={styles.scoreLine}>
                            <span style={{ fontWeight: '500' }}>{typeNames[type as keyof typeof typeNames]}</span>
                            <span style={{ fontWeight: '500', color: progressColor }}>
                              {score.toFixed(1)} points ({scorePercent}%)
                            </span>
                          </div>
                          <div style={styles.progressBar}>
                            <div 
                              style={{
                                ...styles.progressFill,
                                width: `${scorePercent}%`,
                                backgroundColor: progressColor
                              }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmExplanation;
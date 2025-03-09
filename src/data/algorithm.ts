import { ParticipantAnswers, MattressScores } from '../types';

const calculateMattressScores = (answers: ParticipantAnswers): MattressScores => {
  // Initialize scores for each mattress type
  let scores: MattressScores = {
    memoryFoam: 0,
    latexEcoFriendly: 0,
    innerspring: 0, 
    hybrid: 0
  };

  // Q1: Primary Sleeping Position
  if (answers[1] === 'A') { // Side
    scores.memoryFoam += 2;
    scores.hybrid += 1;
  } else if (answers[1] === 'B') { // Back
    scores.hybrid += 2;
    scores.latexEcoFriendly += 1;
    scores.innerspring += 1;
  } else if (answers[1] === 'C') { // Stomach
    scores.latexEcoFriendly += 2;
    scores.innerspring += 2;
  } else if (answers[1] === 'D') { // Combination
    scores.hybrid += 2;
    scores.memoryFoam += 1;
    scores.latexEcoFriendly += 1;
    scores.innerspring += 1;
  }

  // Q2: Body Support Needs
  if (answers[2] === 'A') { // Under 150 lbs
    scores.memoryFoam += 2;
    scores.hybrid += 1;
  } else if (answers[2] === 'B') { // 150-200 lbs
    scores.hybrid += 2;
    scores.latexEcoFriendly += 1;
  } else if (answers[2] === 'C') { // 200+ lbs or joint issues
    scores.latexEcoFriendly += 2;
    scores.innerspring += 2;
    scores.hybrid += 1;
  } else if (answers[2] === 'D') { // Mix of firmness/cushion
    scores.hybrid += 2;
    scores.memoryFoam += 1;
  }

  // Q3: Preferred Firmness Level
  if (answers[3] === 'A') { // Soft
    scores.memoryFoam += 3;
  } else if (answers[3] === 'B') { // Medium
    scores.hybrid += 2;
    scores.latexEcoFriendly += 1;
    scores.memoryFoam += 1;
  } else if (answers[3] === 'C') { // Medium-Firm
    scores.hybrid += 2;
    scores.latexEcoFriendly += 2;
  } else if (answers[3] === 'D') { // Firm
    scores.innerspring += 3;
    scores.latexEcoFriendly += 2;
  }

  // Q4: Material Preference
  if (answers[4] === 'A') { // Memory Foam
    scores.memoryFoam += 3;
  } else if (answers[4] === 'B') { // Natural/Eco
    scores.latexEcoFriendly += 3;
  } else if (answers[4] === 'C') { // Innerspring
    scores.innerspring += 3;
  } else if (answers[4] === 'D') { // Hybrid
    scores.hybrid += 3;
  }

  // Q5: Temperature Sensitivity
  if (answers[5] === 'A') { // Very sensitive to heat
    scores.memoryFoam -= 1;
    scores.latexEcoFriendly += 1;
    scores.hybrid += 1;
  } else if (answers[5] === 'B') { // Sleep cool
    scores.memoryFoam += 1;
  } else if (answers[5] === 'C') { // Neutral
    // No change
  } else if (answers[5] === 'D') { // Cooling nice but not critical
    scores.hybrid += 1;
    scores.latexEcoFriendly += 1;
  }

  // Q6: Motion Isolation
  if (answers[6] === 'A') { // Extremely important
    scores.memoryFoam += 2;
    scores.hybrid += 1;
  } else if (answers[6] === 'B') { // Somewhat important
    scores.hybrid += 1;
    scores.memoryFoam += 1;
  } else if (answers[6] === 'C') { // Not a big deal
    scores.innerspring += 1;
  } else if (answers[6] === 'D') { // Little bounce desired
    scores.latexEcoFriendly += 1;
    scores.innerspring += 1;
  }

  // Q7: Allergies/Chemical Sensitivities
  if (answers[7] === 'A') { // Significant
    scores.latexEcoFriendly += 2;
  } else if (answers[7] === 'D') { // Avoid strong odors
    scores.memoryFoam -= 1;
  }

  // Q8: Edge Support
  if (answers[8] === 'A') { // Crucial
    scores.innerspring += 1;
    scores.hybrid += 1;
    scores.latexEcoFriendly += 1;
  }

  // Q9: Budget
  if (answers[9] === 'A') { // $400-$800
    scores.memoryFoam += 2;
    scores.innerspring += 1;
    scores.latexEcoFriendly -= 2;
  } else if (answers[9] === 'B') { // $800-$1200
    scores.hybrid += 1;
    scores.memoryFoam += 1;
  } else if (answers[9] === 'C') { // $1200-$2000
    scores.hybrid += 2;
    scores.latexEcoFriendly += 1;
  } else if (answers[9] === 'D') { // $2000+
    scores.latexEcoFriendly += 2;
    scores.hybrid += 2;
  }

  // Q10: Mattress Lifespan
  if (answers[10] === 'C') { // 10+ years
    scores.latexEcoFriendly += 1;
    scores.hybrid += 1;
  } else if (answers[10] === 'D') { // Pay more for longevity
    scores.latexEcoFriendly += 2;
    scores.hybrid += 2;
  }

  // Q11: Specific Pain Areas
  if (answers[11] === 'A') { // Neck/shoulder
    scores.memoryFoam += 2;
    scores.hybrid += 1;
  } else if (answers[11] === 'B') { // Mid/lower back
    scores.latexEcoFriendly += 1;
    scores.innerspring += 1;
    scores.hybrid += 1;
  } else if (answers[11] === 'C') { // Hip/knee
    scores.memoryFoam += 2;
    scores.hybrid += 2;
  }

  // Q12: Professional Guidance
  if (answers[12] === 'A') { // Advised firmer
    scores.memoryFoam -= 1;
    scores.innerspring += 1;
    scores.latexEcoFriendly += 1;
  } else if (answers[12] === 'B') { // Advised softer
    scores.innerspring -= 1;
    scores.memoryFoam += 1;
  }

  // Q13: Best Previous Mattress Experience
  if (answers[13] === 'A') { // Plush memory foam
    scores.memoryFoam += 2;
  } else if (answers[13] === 'B') { // Balanced hybrid
    scores.hybrid += 2;
  } else if (answers[13] === 'C') { // Firmer innerspring
    scores.innerspring += 2;
  }

  // Q14: Current Sleep Accessories
  if (answers[14] === 'B') { // Adjustable base
    scores.memoryFoam += 1;
    scores.latexEcoFriendly += 1;
    scores.hybrid += 1;
  }

  // Q15: Split/Dual-Firmness
  if (answers[15] === 'A') { // Very interested
    scores.hybrid += 1;
    scores.latexEcoFriendly += 1;
  }

  return scores;
};

export default calculateMattressScores;
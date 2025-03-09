const questionnaire = [
  {
    id: 1,
    question: "Primary Sleeping Position",
    options: [
      { id: "A", text: "Side (mostly on your shoulder/hip)" },
      { id: "B", text: "Back" },
      { id: "C", text: "Stomach" },
      { id: "D", text: "Combination (toss between side/back or side/stomach)" }
    ],
    followUp: {
      question: "Do you experience pain or stiffness after sleeping in this position?",
      options: [
        { id: 1, text: "Yes, shoulders" },
        { id: 2, text: "Yes, hips" },
        { id: 3, text: "Yes, lower back" },
        { id: 4, text: "No significant pain/stiffness" }
      ],
      multiSelect: true
    }
  },
  {
    id: 2,
    question: "Body Support Needs",
    options: [
      { id: "A", text: "Under 150 lbs, prefer plush comfort" },
      { id: "B", text: "150–200 lbs, prefer balanced support" },
      { id: "C", text: "200+ lbs or have back/joint issues, need substantial support" },
      { id: "D", text: "Unsure, but I like a mix of firmness and cushion" }
    ],
    followUp: {
      question: "If you have chronic pain, how does your current mattress feel?",
      options: [
        { id: 1, text: "Too soft" },
        { id: 2, text: "Too firm" },
        { id: 3, text: "Just right" },
        { id: 4, text: "Not sure / No chronic pain" }
      ],
      multiSelect: false
    }
  },
  {
    id: 3,
    question: "Preferred Firmness Level",
    options: [
      { id: "A", text: "Soft (plush, lots of sink-in)" },
      { id: "B", text: "Medium (balanced)" },
      { id: "C", text: "Medium-Firm (slightly firmer side)" },
      { id: "D", text: "Firm (very supportive, minimal sink)" }
    ],
    followUp: {
      question: "Have you noticed a difference in pain based on softness or firmness?",
      options: [
        { id: 1, text: "Softer tends to relieve my pain" },
        { id: 2, text: "Firmer tends to relieve my pain" },
        { id: 3, text: "No difference" },
        { id: 4, text: "Not sure" }
      ],
      multiSelect: false
    }
  },
  {
    id: 4,
    question: "Preferred Mattress Materials",
    options: [
      { id: "A", text: "Memory foam for pressure relief and deep contour" },
      { id: "B", text: "Natural/eco-friendly (latex or organic hybrids)" },
      { id: "C", text: "Traditional innerspring (bouncy, responsive)" },
      { id: "D", text: "Hybrid (combination of foam and coils)" }
    ],
    followUp: {
      question: "Have you tried any of these materials before and found pain relief?",
      options: [
        { id: 1, text: "Yes, memory foam helped" },
        { id: 2, text: "Yes, latex/natural materials helped" },
        { id: 3, text: "Yes, innerspring felt best" },
        { id: 4, text: "Yes, hybrid worked well" },
        { id: 5, text: "Tried but didn't help" },
        { id: 6, text: "Never tried or not sure" }
      ],
      multiSelect: true
    }
  },
  {
    id: 5,
    question: "Temperature Sensitivity",
    options: [
      { id: "A", text: "Very sensitive to heat (I need strong cooling features)" },
      { id: "B", text: "Tend to sleep cool, enjoy a cozy feel" },
      { id: "C", text: "Neutral (rarely notice temperature issues)" },
      { id: "D", text: "Cooling would be nice but not essential" }
    ],
    followUp: {
      question: "Does overheating or feeling chilled affect your sleep quality or pain?",
      options: [
        { id: 1, text: "Yes, heat worsens my rest or pain" },
        { id: 2, text: "Yes, cold makes me stiff/sore" },
        { id: 3, text: "No, temperature doesn't affect me" },
        { id: 4, text: "Not sure" }
      ],
      multiSelect: false
    }
  },
  {
    id: 6,
    question: "Motion Isolation Importance",
    options: [
      { id: "A", text: "Extremely important—I wake easily from movement" },
      { id: "B", text: "Somewhat important—only large movements bother me" },
      { id: "C", text: "Not a big deal—I can sleep through most disturbances" },
      { id: "D", text: "I like a little bounce but still want decent motion control" }
    ],
    followUp: {
      question: "Do partner movements ever cause or worsen your pain?",
      options: [
        { id: 1, text: "Yes, often" },
        { id: 2, text: "Yes, sometimes" },
        { id: 3, text: "No" },
        { id: 4, text: "Not sure" }
      ],
      multiSelect: false
    }
  },
  {
    id: 7,
    question: "Allergies or Chemical Sensitivities",
    options: [
      { id: "A", text: "Significant—need hypoallergenic/natural materials" },
      { id: "B", text: "Mild allergies—prefer washable covers or dust-mite resistance" },
      { id: "C", text: "No particular concerns" },
      { id: "D", text: "Unsure, but I want to avoid strong off-gassing or odors" }
    ],
    followUp: {
      question: "Have you had allergic or irritation issues with past mattresses?",
      options: [
        { id: 1, text: "Yes, respiratory issues" },
        { id: 2, text: "Yes, skin irritation/rashes" },
        { id: 3, text: "Yes, headaches" },
        { id: 4, text: "No, never" },
        { id: 5, text: "Not sure" }
      ],
      multiSelect: true
    }
  },
  {
    id: 8,
    question: "Edge Support Needs",
    options: [
      { id: "A", text: "Crucial—I sit or sleep near the edge frequently" },
      { id: "B", text: "Somewhat important—I use the edge occasionally" },
      { id: "C", text: "Not very important—rarely near the edge" },
      { id: "D", text: "Only care if it affects overall durability" }
    ],
    followUp: {
      question: "Does poor edge support make it harder to get in/out of bed or worsen pain?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
        { id: 3, text: "Not sure" }
      ],
      multiSelect: false
    }
  },
  {
    id: 9,
    question: "Budget Range (Queen or King)",
    options: [
      { id: "A", text: "$400–$800 (budget-friendly)" },
      { id: "B", text: "$800–$1,200 (mid-range)" },
      { id: "C", text: "$1,200–$2,000 (higher-end)" },
      { id: "D", text: "$2,000+ (luxury range)" }
    ],
    followUp: {
      question: "Would you pay more if it significantly improves pain relief/sleep?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
        { id: 3, text: "Maybe" }
      ],
      multiSelect: false
    }
  },
  {
    id: 10,
    question: "Expected Mattress Lifespan",
    options: [
      { id: "A", text: "~5 years or less (short-term)" },
      { id: "B", text: "7–8 years (standard lifespan)" },
      { id: "C", text: "10+ years (long-term, durable)" },
      { id: "D", text: "As long as it's comfortable—I'm open to paying more" }
    ],
    followUp: {
      question: "If it starts to aggravate your pain, would you replace sooner?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
        { id: 3, text: "Not sure" }
      ],
      multiSelect: false
    }
  },
  {
    id: 11,
    question: "Specific Areas of Morning Pain",
    options: [
      { id: "A", text: "Neck/shoulder pain" },
      { id: "B", text: "Mid/lower back pain" },
      { id: "C", text: "Hip/knee pain" },
      { id: "D", text: "None or general stiffness only" }
    ],
    followUp: {
      question: "How would you rate your typical morning pain/stiffness?",
      options: [
        { id: 1, text: "No pain (0)" },
        { id: 2, text: "Mild (1–3)" },
        { id: 3, text: "Moderate (4–6)" },
        { id: 4, text: "Severe (7–10)" }
      ],
      multiSelect: false
    }
  },
  {
    id: 12,
    question: "Professional Guidance",
    options: [
      { id: "A", text: "Yes, was advised to use a firmer mattress" },
      { id: "B", text: "Yes, was advised to use a softer/plush mattress" },
      { id: "C", text: "Yes, but only told to get \"good support\"" },
      { id: "D", text: "No professional guidance so far" }
    ],
    followUp: {
      question: "Did they suggest any specific feature (zoned support, adjustable base, etc.)?",
      options: [
        { id: 1, text: "Zoned support" },
        { id: 2, text: "Adjustable bed base" },
        { id: 3, text: "No specific feature mentioned" },
        { id: 4, text: "Not applicable" }
      ],
      multiSelect: true
    }
  },
  {
    id: 13,
    question: "Best Previous Mattress Experience",
    options: [
      { id: "A", text: "Plush memory foam (relieved pressure points)" },
      { id: "B", text: "Balanced hybrid (supportive but not too firm)" },
      { id: "C", text: "Firmer innerspring (helped with back pain)" },
      { id: "D", text: "Haven't found one I truly love yet" }
    ],
    followUp: {
      question: "Did it help reduce pain or stiffness?",
      options: [
        { id: 1, text: "Yes, significantly" },
        { id: 2, text: "Somewhat" },
        { id: 3, text: "Not really" },
        { id: 4, text: "Not sure / No relevant pain at that time" }
      ],
      multiSelect: false
    }
  },
  {
    id: 14,
    question: "Sleep Accessories Currently Used",
    options: [
      { id: "A", text: "Extra pillows/body pillow for support" },
      { id: "B", text: "Adjustable base (elevate head/feet)" },
      { id: "C", text: "Specialized topper (foam, latex, etc.)" },
      { id: "D", text: "None of the above" }
    ],
    followUp: {
      question: "Do these accessories improve your sleep comfort or reduce pain?",
      options: [
        { id: 1, text: "Yes, significantly" },
        { id: 2, text: "Yes, slightly" },
        { id: 3, text: "No" },
        { id: 4, text: "Not sure" }
      ],
      multiSelect: false
    }
  },
  {
    id: 15,
    question: "Views on a \"Split\" or Dual-Firmness Mattress",
    options: [
      { id: "A", text: "Very interested—might solve differences" },
      { id: "B", text: "Open to it, but worried about cost or setup" },
      { id: "C", text: "Not interested—prefer one consistent feel" },
      { id: "D", text: "Unsure—would need more info or testing" }
    ],
    followUp: {
      question: "Would you invest more in a split mattress for optimal pain relief?",
      options: [
        { id: 1, text: "Yes" },
        { id: 2, text: "No" },
        { id: 3, text: "Maybe" }
      ],
      multiSelect: false
    }
  }
];

export default questionnaire;
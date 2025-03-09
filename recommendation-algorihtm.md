<recommendation-algorihtm>
Below is a **step-by-step algorithm** (without explicit code) describing how to score each mattress category—**Memory Foam**, **Latex/Eco-Friendly**, **Innerspring**, and **Hybrid**—based on the answers A, B, C, or D for each of the 15 questions in the closed-ended questionnaire. You can adjust the scoring as needed in your documentation or implementation.

---

## Algorithm: Mattress Recommendation Based on Questionnaire

1. **Initialize Scores**  
   - Create four counters (scores), one for each mattress category:  
     - Memory Foam = 0  
     - Latex/Eco-Friendly = 0  
     - Innerspring = 0  
     - Hybrid = 0  

2. **For Each Question (Q1–Q15), Read the Selected Answer (A, B, C, or D):**  
   - Based on the answer, adjust the corresponding mattress-type scores. The following outlines a sample scoring approach.

3. **Q1: Primary Sleeping Position**  
   - If **Side (A)**: 
     - Memory Foam +2 (because side sleepers often need pressure relief)  
     - Hybrid +1  
   - If **Back (B)**: 
     - Hybrid +2  
     - Latex/Eco-Friendly +1  
     - Innerspring +1  
   - If **Stomach (C)**: 
     - Latex/Eco-Friendly +2  
     - Innerspring +2  
   - If **Combination (D)**:  
     - Hybrid +2  
     - Memory Foam +1  
     - Latex/Eco-Friendly +1  
     - Innerspring +1  

4. **Q2: Body Support Needs**  
   - If **Under 150 lbs, plush (A)**:  
     - Memory Foam +2  
     - Hybrid +1  
   - If **150–200 lbs, balanced (B)**:  
     - Hybrid +2  
     - Latex/Eco-Friendly +1  
   - If **200+ lbs or joint issues (C)**:  
     - Latex/Eco-Friendly +2  
     - Innerspring +2  
     - Hybrid +1  
   - If **Mix of firmness/cushion (D)**:  
     - Hybrid +2  
     - Memory Foam +1  

5. **Q3: Preferred Firmness**  
   - If **Soft (A)**:  
     - Memory Foam +3  
   - If **Medium (B)**:  
     - Hybrid +2  
     - Latex/Eco-Friendly +1  
     - Memory Foam +1  
   - If **Medium-Firm (C)**:  
     - Hybrid +2  
     - Latex/Eco-Friendly +2  
   - If **Firm (D)**:  
     - Innerspring +3  
     - Latex/Eco-Friendly +2  

6. **Q4: Material Preference**  
   - If **Memory Foam (A)**: Memory Foam +3  
   - If **Natural/Eco (B)**: Latex/Eco-Friendly +3  
   - If **Innerspring (C)**: Innerspring +3  
   - If **Hybrid (D)**: Hybrid +3  

7. **Q5: Temperature Sensitivity**  
   - If **Very sensitive to heat (A)**: 
     - Memory Foam −1 (it can sleep hot unless specialized)  
     - Latex/Eco-Friendly +1  
     - Hybrid +1  
   - If **Sleep cool (B)**: 
     - Memory Foam +1  
   - If **Neutral (C)**: (No change)  
   - If **Cooling nice but not critical (D)**:  
     - Hybrid +1  
     - Latex/Eco-Friendly +1  

8. **Q6: Motion Isolation**  
   - If **Extremely important (A)**:  
     - Memory Foam +2  
     - Hybrid +1  
   - If **Somewhat important (B)**:  
     - Hybrid +1  
     - Memory Foam +1  
   - If **Not a big deal (C)**:  
     - Innerspring +1  
   - If **Little bounce desired (D)**:  
     - Latex/Eco-Friendly +1  
     - Innerspring +1  

9. **Q7: Allergies/Chemical Sensitivities**  
   - If **Significant (A)**:  
     - Latex/Eco-Friendly +2 (often minimal off-gassing, naturally hypoallergenic)  
   - If **Avoid strong odors (D)**:  
     - Memory Foam −1 (common off-gassing unless it’s certified low-VOC)  

10. **Q8: Edge Support**  
    - If **Crucial (A)**:  
      - Innerspring +1  
      - Hybrid +1  
      - Latex/Eco-Friendly +1  

11. **Q9: Budget**  
    - If **\$400–\$800 (A)**:  
      - Memory Foam +2 (often more budget-friendly)  
      - Innerspring +1 (basic models)  
      - Latex/Eco-Friendly −2 (usually more expensive)  
    - If **\$800–\$1200 (B)**:  
      - Hybrid +1  
      - Memory Foam +1  
    - If **\$1200–\$2000 (C)**:  
      - Hybrid +2  
      - Latex/Eco-Friendly +1  
    - If **\$2000+ (D)**:  
      - Latex/Eco-Friendly +2  
      - Hybrid +2  

12. **Q10: Mattress Lifespan**  
    - If **10+ years (C)**:  
      - Latex/Eco-Friendly +1  
      - Hybrid +1  
    - If **Pay more for longevity (D)**:  
      - Latex/Eco-Friendly +2  
      - Hybrid +2  

13. **Q11: Specific Pain Areas**  
    - If **Neck/shoulder (A)**:  
      - Memory Foam +2  
      - Hybrid +1  
    - If **Mid/lower back (B)**:  
      - Latex/Eco-Friendly +1  
      - Innerspring +1  
      - Hybrid +1  
    - If **Hip/knee (C)**:  
      - Memory Foam +2  
      - Hybrid +2  
    - If **None (D)**: (No change)  

14. **Q12: Professional Guidance**  
    - If **Advised firmer (A)**:  
      - Memory Foam −1  
      - Innerspring +1  
      - Latex/Eco-Friendly +1  
    - If **Advised softer (B)**:  
      - Innerspring −1  
      - Memory Foam +1  

15. **Q13: Best Previous Mattress Experience**  
    - If **Plush memory foam (A)**: Memory Foam +2  
    - If **Balanced hybrid (B)**: Hybrid +2  
    - If **Firmer innerspring (C)**: Innerspring +2  

16. **Q14: Current Sleep Accessories**  
    - If **Adjustable base (B)**:  
      - Memory Foam +1  
      - Latex/Eco-Friendly +1  
      - Hybrid +1  

17. **Q15: Split/Dual-Firmness**  
    - If **Very interested (A)**:  
      - Hybrid +1  
      - Latex/Eco-Friendly +1  

18. **Determine the Recommended Mattress Category**  
    - Compare the final scores for all four categories:  
      1. Memory Foam  
      2. Latex / Eco-Friendly  
      3. Innerspring  
      4. Hybrid  
    - The category with the **highest total score** is the recommended type.

19. **Output**  
    - Present the mattress type (or top two if there’s a tie) as the recommendation.

---

### Notes & Customization

- You can **fine-tune** the point system to match your specific knowledge or priorities. For instance, you might increase the weight for budget concerns (Q9) or temperature sensitivity (Q5) if that’s more important.  
- If multiple categories tie with equal scores, you can:  
  - Recommend the top two or three categories.  
  - Add further tie-breaking logic based on critical questions (e.g., if user has severe back pain, you might lean toward a medium-firm or firmer type).  
- In a real-world application, you might also link each category to **specific brand models** or sub-recommendations (e.g., “Latex Hybrid with zoned coils” if both latex and hybrid have high scores).

By following these steps, you’ll be able to map each **closed-ended questionnaire** answer to a straightforward **scoring algorithm**, leading to a suggested mattress type.


</recommendation-algorihtm>
import { MattressesByType } from '../types';

const mattressesByType: MattressesByType = {
  memoryFoam: [
    {
      name: "Endy Original",
      firmness: "Medium-firm (6.5/10)",
      type: "All-foam",
      cooling: "Open-cell foam with breathability",
      motionIsolation: "4/5 - Excellent",
      edgeSupport: "3/5 - Below-average",
      priceRange: "$800–$1,200 (Queen ~$895)",
      pros: [
        "Comfortable medium-firm feel for all sleep positions",
        "Good pressure relief for side sleepers",
        "Outstanding motion isolation"
      ],
      cons: [
        "Not ideal for stomach sleepers or those who prefer very firm beds",
        "Edge sagging when sitting",
        "May trap some heat"
      ],
      link: "https://ca.endy.com/products/mattresses"
    },
    {
      name: "Douglas Original",
      firmness: "Medium-firm (6–6.7/10)",
      type: "All-foam (gel foam, elastex foam, support foam)",
      cooling: "Cooling gel-infused foam and moisture-wicking cover",
      motionIsolation: "5/5 - Very strong",
      edgeSupport: "3/5 - Fair",
      priceRange: "Under $800 (Queen ~$799)",
      pros: [
        "Sleeps cooler than many memory foam beds",
        "Low motion transfer and good pressure relief",
        "Great value for the price"
      ],
      cons: [
        "Average edge support",
        "May not suit strict stomach sleepers",
        "Some very hot sleepers may still find it warm"
      ],
      link: "https://www.douglas.ca/en/mattresses"
    },
    {
      name: "Novosbed",
      firmness: "Soft (4/10), Medium (6/10), or Firm (7-8/10)",
      type: "Premium memory foam",
      cooling: "Breathable Tencel cover and airflow foam layers",
      motionIsolation: "5/5 - Excellent",
      edgeSupport: "3/5 - Average",
      priceRange: "$800–$1,200 (Queen ~$1,199)",
      pros: [
        "Luxurious high-density memory foam feel",
        "Very pressure relieving and durable",
        "Offers comfort adjustment kit to fine-tune firmness"
      ],
      cons: [
        "Can sleep a bit warmer than hybrids",
        "Slow-response feel means less bounce",
        "Higher price point relative to other online Canadian mattresses"
      ],
      link: "https://www.novosbed.com"
    }
  ],
  latexEcoFriendly: [
    {
      name: "Silk & Snow Organic",
      firmness: "Firm (8/10) or Medium (6/10)",
      type: "Latex Hybrid (organic materials)",
      cooling: "Natural latex, wool, and cotton with excellent breathability",
      motionIsolation: "3/5 - Moderate",
      edgeSupport: "5/5 - Excellent",
      priceRange: "$1,200–$2,000 (Queen ~$1,600)",
      pros: [
        "Natural and chemical-free certified materials",
        "Responsive, uplifted feel - great for combination sleepers",
        "Excellent cooling and breathability"
      ],
      cons: [
        "Feel of latex not for everyone (more bouncy than memory foam)",
        "Motion isolation not as good as full memory foam",
        "Higher price point"
      ],
      link: "https://www.silkandsnow.com/en-ca/organic-mattress"
    }
  ],
  innerspring: [
    {
      name: "Sealy Posturepedic",
      firmness: "Plush, Medium, or Firm options available",
      type: "Innerspring / Hybrid with pillow-top",
      cooling: "SealyCool or Chill technology with phase change material",
      motionIsolation: "3/5 - Moderate",
      edgeSupport: "5/5 - Excellent (DuraFlex edge system)",
      priceRange: "$800–$1,200 for mid-range models",
      pros: [
        "Reliable support and durability",
        "Zoned coil support helps with back support",
        "Excellent edge support"
      ],
      cons: [
        "May not contour as precisely as memory foam",
        "Some motion transfer can be felt",
        "Quality varies by specific model"
      ],
      link: "https://www.sealy.ca/en-ca/mattresses/posturepedic"
    },
    {
      name: "Saatva Classic",
      firmness: "Plush Soft (3-4/10), Luxury Firm (6/10), or Firm (8/10)",
      type: "Innerspring (coil-on-coil) with Euro Pillow-Top",
      cooling: "Excellent airflow through two coil layers",
      motionIsolation: "3/5 - Moderate",
      edgeSupport: "5/5 - Excellent",
      priceRange: "$1,200–$2,000 (Queen ~$1,795)",
      pros: [
        "Balanced feel with cushioning and robust support",
        "Strong lumbar support for back pain sufferers",
        "Hotel-like finish and quality"
      ],
      cons: [
        "Some partner movement can be felt",
        "Heavy and difficult to move",
        "$99 transportation fee for returns in Canada"
      ],
      link: "https://www.saatva.com/mattresses/saatva-classic"
    }
  ],
  hybrid: [
    {
      name: "Logan & Cove Hybrid",
      firmness: "Medium-Plush (5.5/10) or Medium-firm (7/10)",
      type: "Luxury Pillow-top Hybrid",
      cooling: "Cooling gel foam and breathable Tencel fabric",
      motionIsolation: "3/5 - Moderate",
      edgeSupport: "4/5 - Strong",
      priceRange: "$800–$1,200 (Queen ~$999) or $1,200–$2,000 (Premium)",
      pros: [
        "High-end hotel luxury feel",
        "Plush quilted pillow-top with robust coil support",
        "Quality construction and cooling performance"
      ],
      cons: [
        "Higher motion transfer due to coil layers",
        "Heavy and comes folded in a box",
        "Price higher than all-foam options"
      ],
      link: "https://www.loganandcove.ca"
    },
    {
      name: "Silk & Snow Hybrid",
      firmness: "Medium-firm (6.5/10)",
      type: "Hybrid (foam + coils)",
      cooling: "Gel-infused memory foam and coil airflow",
      motionIsolation: "4/5 - Good",
      edgeSupport: "4/5 - Very solid",
      priceRange: "$800–$1,200 (Queen ~$1,000)",
      pros: [
        "Great spine support with zoned coils",
        "Relieved pressure points without being too soft",
        "Quality materials at reasonable price"
      ],
      cons: [
        "May feel too firm for those who prefer very soft beds",
        "Some motion isolation issues for sensitive sleepers",
        "Initial off-gassing smell for a few days"
      ],
      link: "https://www.silkandsnow.com/en-ca/hybrid-mattress"
    },
    {
      name: "Casper Original Hybrid",
      firmness: "Medium-firm (6-7/10)",
      type: "Hybrid (foam + pocketed coils)",
      cooling: "AirScape breathable foam with perforations",
      motionIsolation: "4/5 - Very good",
      edgeSupport: "4/5 - Good",
      priceRange: "$800–$1,200 (Queen ~$1,295)",
      pros: [
        "Zoned support design improves spinal alignment",
        "Balanced feel works for multiple sleeping positions",
        "Good quality and customer service"
      ],
      cons: [
        "Too middling for those who prefer very plush or very firm",
        "May feel too firm on shoulders for lightweight side sleepers",
        "Some durability concerns for very heavy users"
      ],
      link: "https://casper.com/ca/en/mattresses/casper-original"
    }
  ]
};

export default mattressesByType;
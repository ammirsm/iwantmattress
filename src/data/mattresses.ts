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
      priceRange: { min: 800, max: 1200 },
      rating: 4.5,
      description: "A Canadian-made memory foam mattress with medium-firm support and good pressure relief.",
      pros: [
        "Comfortable medium-firm feel for all sleep positions",
        "Good pressure relief for side sleepers",
        "Outstanding motion isolation"
      ],
      cons: [
        "Not ideal for stomach sleepers or those who prefer very firm beds",
        "Edge sagging when sitting",
        "May sleep warm for hot sleepers"
      ],
      url: "https://ca.endy.com/products/the-endy-mattress"
    },
    {
      name: "Douglas",
      firmness: "Medium-firm (6/10)",
      type: "All-foam",
      cooling: "Cooling gel foam top layer",
      motionIsolation: "5/5 - Excellent",
      edgeSupport: "3/5 - Below-average",
      priceRange: { min: 749, max: 999 },
      rating: 4.6,
      description: "An affordable Canadian memory foam mattress with cooling gel and eco-conscious materials.",
      pros: [
        "Excellent value for price point",
        "Good pressure relief and support",
        "CertiPUR-US certified foams"
      ],
      cons: [
        "Limited motion isolation compared to denser foams",
        "Edge support could be better",
        "May not be suitable for heavyweight sleepers"
      ],
      url: "https://www.douglasbed.ca/"
    },
    {
      name: "Casper Original",
      firmness: "Medium (5.5/10)",
      type: "All-foam",
      cooling: "AirScape perforated breathable foam",
      motionIsolation: "4/5 - Very good",
      edgeSupport: "3/5 - Average",
      priceRange: { min: 895, max: 1695 },
      rating: 4.3,
      description: "A well-known memory foam mattress with zoned support and balanced comfort.",
      pros: [
        "Zoned support for proper spinal alignment",
        "Works for all sleeping positions",
        "Balanced feel between sink and support"
      ],
      cons: [
        "Higher price point than some competitors",
        "May sleep too warm for hot sleepers",
        "Not firm enough for some stomach sleepers"
      ],
      url: "https://casper.com/ca/en/mattresses/casper-original/"
    }
  ],
  latexEcoFriendly: [
    {
      name: "Essentia Tatami",
      firmness: "Medium-firm to Firm (7/10)",
      type: "Organic latex",
      cooling: "Naturally cool latex material",
      motionIsolation: "3/5 - Good",
      edgeSupport: "4/5 - Very good",
      priceRange: { min: 2299, max: 4047 },
      rating: 4.7,
      description: "A premium organic latex mattress made in Canada with excellent support and eco-friendly materials.",
      pros: [
        "Certified organic materials",
        "No off-gassing or chemicals",
        "Durable construction likely to last 15+ years"
      ],
      cons: [
        "Very expensive price point",
        "May be too firm for side sleepers",
        "Heavy and difficult to move"
      ],
      url: "https://myessentia.ca/collections/tatami-mattress"
    },
    {
      name: "Recore Latex Foam",
      firmness: "Medium (5.5/10)",
      type: "Latex Foam",
      cooling: "Graphite-infused latex for cooling",
      motionIsolation: "4/5 - Very good",
      edgeSupport: "3/5 - Average",
      priceRange: { min: 849, max: 1149 },
      rating: 4.2,
      description: "A Canadian-made latex foam mattress designed for active lifestyles with pressure relief and cooling properties.",
      pros: [
        "Responsive surface for easy movement",
        "Graphite-infused for cooling",
        "Great price point for latex"
      ],
      cons: [
        "Not 100% natural latex",
        "May not be supportive enough for heavier people",
        "Some may find it too bouncy"
      ],
      url: "https://www.recorebed.ca/"
    }
  ],
  hybrid: [
    {
      name: "Logan & Cove Luxury Pillow-Top",
      firmness: "Medium-plush (4.5/10) or Medium-firm (6.5/10)",
      type: "Hybrid",
      cooling: "Gel-infused foam and breathable coils",
      motionIsolation: "4/5 - Very good",
      edgeSupport: "4.5/5 - Excellent",
      priceRange: { min: 999, max: 1399 },
      rating: 4.8,
      description: "A luxury pillow-top hybrid mattress with multiple foam layers and pocketed coils for excellent support.",
      pros: [
        "Luxurious pillow-top feel at reasonable price",
        "Excellent edge support",
        "Two firmness options"
      ],
      cons: [
        "Heavy and difficult to move",
        "May be too soft for some stomach sleepers",
        "Slight off-gassing initially"
      ],
      url: "https://www.logancove.ca/"
    },
    {
      name: "Brunswick Spring",
      firmness: "Medium-firm (6/10)",
      type: "Hybrid",
      cooling: "Gel-infused foam and spring construction",
      motionIsolation: "3.5/5 - Good",
      edgeSupport: "4.5/5 - Excellent",
      priceRange: { min: 799, max: 1099 },
      rating: 4.4,
      description: "An affordable Canadian-made hybrid mattress with euro-top comfort and pocketed coils.",
      pros: [
        "Excellent balance of comfort and support",
        "Superior edge support",
        "Great value for a hybrid"
      ],
      cons: [
        "Only one firmness option",
        "Some motion transfer compared to all-foam",
        "May not be plush enough for some side sleepers"
      ],
      url: "https://www.brunswickbed.ca/"
    },
    {
      name: "Silk & Snow Hybrid",
      firmness: "Medium-firm (6.5/10)",
      type: "Hybrid",
      cooling: "Coil system allows airflow, cooling gel foam",
      motionIsolation: "4/5 - Very good",
      edgeSupport: "4/5 - Very good",
      priceRange: { min: 850, max: 1250 },
      rating: 4.5,
      description: "A Canadian hybrid mattress with individually wrapped coils and cooling gel memory foam.",
      pros: [
        "Individually wrapped zoned coils for targeted support",
        "Antimicrobial cover",
        "Good balance of motion isolation and responsiveness"
      ],
      cons: [
        "May feel too firm for lightweight side sleepers",
        "Some customers report premature sagging",
        "Can be quite heavy"
      ],
      url: "https://silkandsnow.com/en-ca/hybrid-mattress/"
    }
  ],
  innerspring: [
    {
      name: "Saatva Classic",
      firmness: "Multiple options: Plush Soft (3/10), Luxury Firm (5-7/10), Firm (8/10)",
      type: "Innerspring",
      cooling: "Excellent airflow through dual coil layers",
      motionIsolation: "3/5 - Average",
      edgeSupport: "5/5 - Excellent",
      priceRange: { min: 1299, max: 1999 },
      rating: 4.7,
      description: "A luxury innerspring mattress with a Euro pillow top and dual-coil support system.",
      pros: [
        "Three firmness options",
        "Excellent edge support",
        "Luxury hotel feel with Euro pillow top"
      ],
      cons: [
        "Higher price point",
        "Some motion transfer",
        "Heavy and difficult to move"
      ],
      url: "https://www.saatva.ca/mattresses/saatva-classic"
    },
    {
      name: "Serta Perfect Sleeper",
      firmness: "Multiple options available",
      type: "Innerspring",
      cooling: "Good airflow through coil system",
      motionIsolation: "3/5 - Average",
      edgeSupport: "4/5 - Very good",
      priceRange: { min: 799, max: 1999 },
      rating: 4.2,
      description: "A traditional innerspring mattress with various comfort options and good support.",
      pros: [
        "Widely available in stores",
        "Multiple firmness options",
        "Responsive feel for combination sleepers"
      ],
      cons: [
        "More motion transfer than foam mattresses",
        "May develop impressions over time",
        "Less pressure relief than memory foam"
      ],
      url: "https://www.serta.ca/mattresses"
    }
  ]
};

export default mattressesByType;
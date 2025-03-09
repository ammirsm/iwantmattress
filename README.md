# 🛌 iwantmattress.ca

![Mattress Selector](https://img.shields.io/badge/Status-Active-brightgreen)
![Built with](https://img.shields.io/badge/Built%20with-Next.js-blue)
![Made in](https://img.shields.io/badge/Made%20in-Canada-red)

A sophisticated web application designed to help Canadians find their perfect mattress based on sleep preferences, body type, and pain concerns. Using a scientific approach and advanced algorithm, this tool provides personalized mattress recommendations tailored to individual needs.

## 🔗 Live Demo

Try out our mattress selector at: [iwantmattress.ca](https://iwantmattress.ca)

## ✨ Features

- **Personalized Questionnaire**: Comprehensive assessment of sleep preferences, body type, pain points, and more
- **Partner Compatibility**: Support for couples with different sleep preferences
- **Scientific Approach**: Algorithm based on sleep science and ergonomic research
- **Canadian Focus**: All recommendations are available in the Canadian market
- **Visual Progress**: Step-by-step guidance with visual progress indicators
- **Detailed Results**: Comprehensive mattress recommendations with pros, cons, and price ranges
- **Dark Mode Support**: Toggle between light and dark themes for comfortable viewing

## 🚀 Technologies

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Theme**: Dark/light mode with next-themes
- **Deployment**: Vercel

## 🏗️ Project Structure

```
📦 mattress-selector-canada
 ┣ 📂 src
 ┃ ┣ 📂 components      # UI components
 ┃ ┃ ┣ 📂 layout        # Layout components
 ┃ ┃ ┗ 📂 ui            # shadcn/ui components
 ┃ ┣ 📂 data            # Mattress data and algorithm
 ┃ ┣ 📂 lib             # Utility functions
 ┃ ┣ 📂 pages           # Next.js pages
 ┃ ┣ 📂 styles          # Global styles
 ┃ ┗ 📂 types           # TypeScript type definitions
 ┣ 📜 questionnaire.md  # Detailed questionnaire structure
 ┣ 📜 recommendation-algorithm.md  # Scoring algorithm details
 ┗ 📜 research.md       # Mattress research data
```

## 📑 Core Documentation Files

The core of this application is built around three key markdown files that contain the research and logic driving the mattress recommendations:

### [questionnaire.md](./questionnaire.md)
A comprehensive 15-question assessment tool with subquestions that captures:
- Sleeping position and related pain points
- Body support needs and weight considerations
- Firmness preferences and material preferences
- Temperature sensitivity and motion isolation needs
- Budget range and expected mattress lifespan
- Specific pain areas and professional guidance

This questionnaire is designed to be completed by individuals or couples to determine the ideal mattress type.

### [recommendation-algorithm.md](./recommendation-algorithm.md)
A sophisticated scoring algorithm that:
- Processes answers from the questionnaire
- Assigns weighted points to four mattress categories (Memory Foam, Latex/Eco-Friendly, Innerspring, and Hybrid)
- Considers factors like sleeping position, body type, temperature sensitivity, etc.
- Identifies the best mattress type for the user based on their responses
- Includes customization notes and tie-breaking logic

### [research.md](./research.md)
An extensive database of mattresses available in Canada, including:
- Detailed specs for dozens of mattress models across all categories
- Information on firmness levels, materials, cooling features, and motion isolation
- Price ranges and retailer availability
- Customer and expert reviews with pros and cons
- Trial periods and warranty information

This research provides the foundation for matching users with actual products available in the Canadian market.

## 📱 Pages

- **Home**: Introduction and participant selection
- **Questionnaire**: Interactive sleep preferences assessment
- **Results**: Personalized mattress recommendations

## 🧠 Research & Algorithm

The research data and algorithm powering this application were initially generated using advanced AI models:

- **OpenAI GPT-o1-pro**: Used for creating the detailed mattress research database
- **GPT Deep Research**: Used for developing the recommendation algorithm and questionnaire structure

These AI-generated resources were then refined, validated, and implemented into a functional application.

## 🔧 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/ammirsm/iwantmattress.git
   cd iwantmattress
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ammirsm/iwantmattress/issues).

## 📄 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.

## 🙏 Acknowledgements

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Next.js](https://nextjs.org/) for the React framework
- OpenAI GPT models for initial research and algorithm design
- OpenAI for the AI models that helped generate the research data
- The shadcn/ui team for the beautiful component library
- All contributors who have helped shape this project 
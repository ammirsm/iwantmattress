# CLAUDE.md for Mattress Selector Canada

## Project Overview
This project is a mattress selector tool for the Canadian market that helps users find the perfect mattress based on their sleep preferences, pain concerns, and budget. The application implements:

1. A comprehensive questionnaire covering 15 key mattress selection factors
2. A science-based recommendation algorithm that scores mattress types
3. A database of Canadian mattress options with detailed specifications

## Build Commands
- `npm install` - Install dependencies
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

## Technology Stack
- **Framework**: Next.js (React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui with Radix UI primitives
- **Data Storage**: TypeScript modules with strong typing

## Code Structure
- `/src/pages/` - Main application pages (index, questionnaire, results)
- `/src/components/` - Reusable UI components
- `/src/components/ui/` - shadcn/ui base components
- `/src/data/` - Data modules (questionnaire, algorithm, mattresses)
- `/src/styles/` - Global CSS and Tailwind configuration
- `/src/lib/` - Utility functions

## Algorithm Implementation
The recommendation system works as follows:
1. User answers 15 multiple-choice questions about sleep preferences
2. Each answer assigns points to different mattress types (Memory Foam, Latex/Eco-Friendly, Innerspring, Hybrid)
3. For couples, preferences are analyzed for compatibility
4. Highest scoring mattress types are used to filter specific models
5. Final recommendations are ranked and presented with detailed information

## Key Features
- Single-page questionnaire with all questions displayed at once
- Partner compatibility analysis for shared mattresses
- Interactive explanation of how recommendations are calculated
- Detailed mattress specifications including firmness, motion isolation, edge support
- Transparent scoring system with point-by-point breakdown

## Development Roadmap
- Add user accounts to save preferences
- Implement mattress comparison feature
- Add price filtering and sorting options
- Create a mattress retailer map for Canada
- Add sleep trial and warranty filtering

## Best Practices
- Maintain separation between data, algorithm, and UI components
- When adding new mattress types, update both algorithm.js and mattresses.js
- Ensure all UI components support both desktop and mobile layouts
- Add detailed prop validation for all components
- Keep algorithm explanation in sync with actual algorithm implementation
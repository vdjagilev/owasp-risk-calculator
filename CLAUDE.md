# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an OWASP Risk Rating Calculator built with SvelteKit that implements the OWASP Risk Rating Methodology. It calculates security risk severity based on likelihood and impact factors, with support for mitigation tracking displayed via radar charts.

## Development Commands

```bash
# Install dependencies (uses pnpm)
pnpm install

# Start development server
pnpm dev
# Or open in browser automatically
pnpm dev -- --open

# Type checking
pnpm check
# Type checking in watch mode
pnpm check:watch

# Linting and formatting
pnpm lint           # Check formatting with Prettier and lint with ESLint
pnpm format         # Auto-format with Prettier

# Production build
pnpm build

# Preview production build
pnpm preview
```

## Architecture

### Core Domain Model

The application is built around a hierarchical risk assessment model:

- **Risk** (`src/lib/risk/Risk.ts`): Top-level entity representing a security risk
  - Contains `likelihoodFactorSets` and `impactFactorSets` arrays
  - Each Risk can have an optional `mitigation` property (also a Risk instance)
  - Likelihood is calculated as the average of all likelihood factor sets
  - Impact follows OWASP methodology: Business Impact takes priority over Technical Impact if present (score > 0)

- **FactorSet** (`src/lib/risk/FactorSet.ts`): Groups related factors together
  - Examples: Threat Agent Factors, Vulnerability Factors, Technical Impact, Business Impact
  - Implements `IScoreSource` - calculates score as average of contained factors
  - Defined via builder pattern (see `src/lib/risk/constants/`)

- **Factor** (`src/lib/risk/Factor.ts`): Individual risk assessment criteria
  - Contains a numeric score (0-9) and options for dropdown selection
  - Each option maps a score to a descriptive label
  - Colors for visualization are defined in `FactorColorMap`

### Risk Calculation Flow

1. **Likelihood**: Average of Threat Agent Factors and Vulnerability Factors
2. **Impact**: Business Impact if present (score > 0), otherwise Technical Impact
3. **Severity**: Determined by `RiskSeverityMatrix` (`src/lib/risk/RiskSeverity.ts`) which maps likelihood and impact levels to severity (Note/Low/Medium/High/Critical)

### State Management

Uses Svelte stores (`src/lib/risk/Store.ts`):
- `risks`: Array of all risk assessments
- `editRisk`: Currently selected risk for editing (triggers modal)
- `deleteRisk`: Risk selected for deletion (triggers confirmation modal)

### UI Component Structure

- **Risk.svelte**: Main risk display with tabs for risk/mitigation views and radar chart
- **RiskForm.svelte**: Form for editing risk factors (used for both risk and mitigation)
- **FactorSet.svelte** and **Factor.svelte**: Render factor groups and individual factors
- **Radar.svelte**: Chart.js radar visualization comparing risk vs mitigation
- Action components in `src/lib/components/actions/`: AddRisk, EditRisk, DeleteRisk, ClearRisks (handle modals)

### Factor Set Builders

Located in `src/lib/risk/constants/`:
- `likelihoodFactorSet.ts`: Threat Agent Factors (Skill Level, Motive, Opportunity, Size)
- `vulnerabilityFactorSet.ts`: Vulnerability Factors (Ease of Discovery, Ease of Exploit, Awareness, Intrusion Detection)
- `techImpactFactorSet.ts`: Technical Impact (Loss of Confidentiality, Integrity, Availability, Accountability)
- `businessImpactFactorSet.ts`: Business Impact (Financial Damage, Reputation Damage, Non-Compliance, Privacy Violation)

Each builder implements `IFactorSetBuilder` and constructs a `FactorSet` with predefined factors following OWASP methodology.

### Mitigation Feature

- Each Risk can have a mitigation Risk attached (`risk.mitigation`)
- When creating mitigation, factor scores are copied from the parent risk using `Risk.copyFactorScores()`
- Users then adjust mitigation scores to reflect reduced risk after controls
- Radar chart overlays both datasets for visual comparison

## Build Configuration

- **Vite** with SvelteKit plugin
- **Base path**: `/owasp-risk-calculator` (configured in `vite.config.ts`)
- **Adapter**: Static adapter (`@sveltejs/adapter-static`) for static site generation
- **Preprocessors**: Tailwind CSS via PostCSS, SASS support
- **UI Framework**: Flowbite Svelte components with Tailwind CSS

## Key Dependencies

- **SvelteKit 2.x**: Application framework
- **Svelte 4.x**: Component framework
- **Chart.js + svelte-chartjs**: Radar chart visualization
- **Flowbite Svelte**: UI component library
- **TypeScript 5.x**: Type safety

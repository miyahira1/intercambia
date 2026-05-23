# INTERCAMBIA
## Language Exchange Platform — Argentina
### Product Requirements Document (PRD)
**Version 2.0 | May 2026 | Confidential**

> **Operating model:** 2-person founding team, Argentina-based, AI-first from day one.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Problem Statement](#2-problem-statement)
3. [Vision & Goals](#3-vision--goals)
4. [Target Users & Personas](#4-target-users--personas)
5. [Solution Overview](#5-solution-overview)
6. [AI & Agentic AI Architecture](#6-ai--agentic-ai-architecture)
7. [Product Features](#7-product-features)
8. [Business Model & Financial Plan](#8-business-model--financial-plan)
9. [Technical Architecture](#9-technical-architecture)
10. [Success Metrics & KPIs](#10-success-metrics--kpis)
11. [Risks & Mitigations](#11-risks--mitigations)
12. [Development Roadmap](#12-development-roadmap)
13. [Team & AI-Augmented Operations](#13-team--ai-augmented-operations)
14. [Appendix: Competitive Landscape](#14-appendix-competitive-landscape)

---

## 1. Executive Summary

**Intercambia** is a language exchange platform built in Argentina, for Argentina — connecting Spanish speakers with native speakers of English, Portuguese, Italian, and other key languages.

What makes Intercambia fundamentally different from legacy platforms like MyLanguageExchange.com is not just better UX or more features — it is **the degree to which AI replaces operational overhead**. The platform is designed from the ground up to be run by two people: one managing the business, one managing the product. Agentic AI handles everything else: matching, moderation, customer support, content generation, onboarding, session coaching, and growth.

Argentina is the ideal launch market: 43 million people, massive demand for English fluency (driven by USD remote-work income), a mature Mercado Pago fintech ecosystem, a large Italian-heritage community seeking EU citizenship, and no dominant local competitor.

**The founding thesis:** a 2-person team with the right AI stack can build and operate what would have required 20 people five years ago.

---

## 2. Problem Statement

### 2.1 The Incumbent: MyLanguageExchange.com

MyLanguageExchange.com launched in 1999 and claims 4+ million members. It is a product of its era — and it shows:

- **No AI whatsoever:** Manual keyword search, zero smart recommendations
- **Desktop-only:** No mobile app, no responsive design
- **No real-time communication:** Email and basic text chat only; no voice or video
- **No trust layer:** Minimal verification, weak moderation
- **English-centric:** No localization, no regional pricing, no local payment methods
- **Stale UX:** Early-2000s design with no meaningful updates
- **Weak business model:** Flat premium subscription with little value differentiation

### 2.2 The Argentine Market Opportunity

| Signal | Detail |
|---|---|
| Population | 43M, ~70% smartphone penetration |
| English demand | Remote work boom; bilingual workers earn 2–3x more in USD |
| Italian heritage | 20M+ Argentinians of Italian descent; Italian citizenship demand surging |
| Brazil proximity | Trade, travel, and cultural ties drive strong Portuguese demand |
| Fintech maturity | Mercado Pago dominant; local payment integration is straightforward |
| Local competitor gap | No modern, Argentina-first language exchange platform exists |

---

## 3. Vision & Goals

> *"To become the #1 language exchange community in Latin America — built by two people and powered by AI."*

### 3.1 Phase 1 Goals (Months 1–6, Pre-Revenue)

- Launch MVP with core exchange functionality
- Acquire 2,000 registered users organically (no paid ads)
- Facilitate 5,000 completed sessions
- Validate matching satisfaction score > 4.0 / 5.0

### 3.2 Phase 2 Goals (Months 7–12, Early Revenue)

- Reach 10,000 registered users
- 300 paying Plus subscribers
- MRR: USD 1,500
- NPS > 50

### 3.3 Phase 3 Goals (Year 2, Scale)

- 50,000 registered users
- 2,000 paying subscribers
- Expand to Mexico and Colombia
- MRR: USD 10,000+

---

## 4. Target Users & Personas

| Persona | Profile | Goal | Pain Point |
|---|---|---|---|
| **El Profesional** | 25–40 yr, Buenos Aires, seeks remote work | Reach B2 English for USD income | Can't afford lessons; Duolingo feels too slow |
| **La Heredera** | 30–55 yr, Italian/French surname | Learn Italian/French for EU citizenship | Courses expensive; wants real conversation |
| **El Estudiante** | 18–24 yr, university student | Improve English for exchange programs or content | Wants social, fun practice |
| **El Nativo** | English/Portuguese speaker abroad | Learn Argentine Spanish; explore culture | Generic apps don't teach lunfardo or *vos* |
| **El Emprendedor** | 30–45 yr, SME owner | Basic Portuguese for Brazilian clients | Needs fast, practical language practice |

---

## 5. Solution Overview

Intercambia connects language learners through structured 1-on-1 and group exchange sessions via video, voice, and text — all within the app, with no external tools needed.

### 5.1 The Exchange Model

Every user is both a teacher and a learner. A session is split 50/50: **30 minutes in Language A, 30 minutes in Language B.** Mutual value keeps the core free and creates genuine human connection.

### 5.2 The AI-First Difference

Rather than hiring a team to handle operations, Intercambia uses a layer of **agentic AI systems** that run autonomously in the background. These agents handle matching, moderation, customer support, content, and growth — allowing two humans to focus only on strategy and product.

See Section 6 for the full AI architecture.

---

## 6. AI & Agentic AI Architecture

This is the core competitive advantage of Intercambia. AI is not a feature — it is the operating system.

### 6.1 Agentic AI Systems (Always-On Agents)

| Agent | Role | Replaces |
|---|---|---|
| **MatchAgent** | Continuously scores and ranks partner compatibility for each user based on language goals, schedule, interests, and communication style. Runs on every login and every profile update. | Dedicated matching team |
| **ModerationAgent** | Monitors chat and session reports for harassment, spam, and inappropriate content. Auto-flags, auto-warns, and escalates only the highest-severity cases to the human admin. | Trust & safety team |
| **SupportAgent** | Handles 90%+ of user support tickets via LLM-powered responses integrated with the user's account data. Escalates unresolvable cases to the human operator. | Customer support team |
| **OnboardingAgent** | Guides new users through a conversational onboarding flow, assesses language level via a short spoken/written diagnostic, and sets up their first match automatically. | Onboarding specialists |
| **GrowthAgent** | Monitors user inactivity, sends personalized re-engagement messages, suggests new partners, and triggers nudges at optimal times based on past session behavior. | CRM / lifecycle marketing team |
| **ContentAgent** | Generates weekly conversation starter packs, cultural topic cards, and slang-of-the-week content tailored to each language pair. Posts to the app feed and sends as push notifications. | Content team |
| **InsightAgent** | Generates a weekly business dashboard for the operator: key metrics, anomalies, user feedback themes, and suggested product actions. | Analyst / data team |

### 6.2 AI Features Within Sessions

| Feature | Description |
|---|---|
| **Real-time vocabulary capture** | During text chat, AI identifies new words and automatically adds them to the user's vocabulary list |
| **Post-session summary** | After every session, AI generates a summary: vocabulary used, key phrases, grammar observations, and what to practice next |
| **Pronunciation feedback** | AI scores pronunciation attempts and gives specific, actionable feedback (especially for Argentine Spanish learners) |
| **Translation tooltips** | Hover over any word in chat to get an instant translation with example sentences |
| **Conversation prompts** | If a session goes silent, AI suggests topic prompts suited to both users' interests and level |
| **Safety scoring** | Each session is scored in real-time; anything flagged automatically pauses the session and alerts ModerationAgent |

### 6.3 AI Tools Used

| Tool | Purpose |
|---|---|
| OpenAI GPT-4o / GPT-4o-mini | SupportAgent, OnboardingAgent, ContentAgent, InsightAgent, post-session summaries |
| OpenAI Whisper | Voice-to-text for pronunciation feedback and session transcription |
| OpenAI Realtime API | Real-time voice conversation coaching during sessions |
| Pinecone (vector DB) | Semantic matching for MatchAgent — user embedding similarity search |
| LangChain / LangGraph | Orchestration layer for multi-step agentic workflows |
| Resend + AI | GrowthAgent email and push notification generation |
| Anthropic Claude | InsightAgent weekly reports and complex reasoning tasks |

### 6.4 Human-in-the-Loop Boundaries

AI handles everything it can reliably do. Humans intervene only when:

- ModerationAgent escalates a severe safety incident
- SupportAgent cannot resolve a ticket after 2 attempts
- InsightAgent flags an anomaly requiring a strategic decision
- A user explicitly requests human support

This keeps the operator's daily workload to **< 2 hours of AI-escalated tasks**.

---

## 7. Product Features

### 7.1 MVP (Phase 1 — Months 1–4)

#### Core Exchange
- User profiles: native language, target language, CEFR level, interests, availability
- Smart matching via MatchAgent (no manual search required)
- Text chat with real-time vocabulary capture and translation tooltips
- Voice and HD video calls (WebRTC, no app needed)
- 50/50 session timer with language-switch reminder
- Post-session AI summary and vocabulary list

#### Trust & Safety
- Email verification; optional DNI verification for "Verified" badge
- 2-way star rating after each session
- Report & block → auto-routed to ModerationAgent
- Community guidelines enforced by AI moderation

#### Onboarding
- Conversational onboarding flow via OnboardingAgent
- CEFR self-assessment + optional short spoken diagnostic
- First match auto-suggested and bookable in < 3 minutes

### 7.2 Growth Layer (Phase 2 — Months 5–8)

#### Gamification
- Streaks (weekly sessions), XP points, badges
- Leaderboard by language pair
- "Partner of the Month" community recognition

#### Group Rooms
- Themed conversation rooms (up to 8 people)
- Topics: "Tech in English", "Cine Argentino", "Business Portuguese"
- Hosted by community volunteers (recognized with XP)

#### Content Feed
- Weekly cultural content generated by ContentAgent
- Argentine slang dictionary integrated into chat
- Conversation starter card decks by topic and level

#### Re-engagement
- GrowthAgent sends personalized "Your partner is online" and "You have a new match" notifications
- Lapsed user re-engagement sequences (email + push)

### 7.3 Monetization Layer (Phase 3 — Months 9–12)

#### Intercambia Plus (Individual)
- Unlimited sessions (free tier: 4/month)
- Priority matching
- Full AI session summaries + vocabulary export
- HD video + optional session recording (partner consent required)
- Ad-free

#### B2B: Corporate Accounts
- Company dashboard: employee sessions, progress, language pair breakdown
- AFIP-compliant invoicing
- Dedicated MatchAgent config for business language pairs

#### Teacher Marketplace
- Verified teachers offer paid sessions
- 15% platform commission; Intercambia handles scheduling and payments

---

## 8. Business Model & Financial Plan

### 8.1 Revenue Streams

| Stream | Model | Price | Month 12 Target |
|---|---|---|---|
| Plus Individual (monthly) | Subscription | ARS 4,900 / ~USD 5 | 250 subscribers |
| Plus Individual (annual) | Subscription | ARS 39,900 / ~USD 40 | 100 subscribers |
| B2B Corporate Seats | Per-seat/month | USD 12/seat | 5 companies × 4 seats |
| Teacher Marketplace | 15% commission | Avg session USD 10 | 200 sessions/month |
| Free Tier Ads | CPM native ads | CPM USD 3 | 100K impressions/month |

### 8.2 Lean Cost Structure (2-Person Team + AI)

| Category | Monthly (USD) | Annual (USD) | Notes |
|---|---|---|---|
| Operator salary #1 (business) | 1,500 | 18,000 | Argentine market rate |
| Operator salary #2 (product/tech) | 1,800 | 21,600 | Argentine market rate |
| AI APIs (OpenAI, Anthropic, Pinecone) | 400 | 4,800 | Scales with usage; low at start |
| Infrastructure (AWS São Paulo) | 200 | 2,400 | Scales with users |
| WebRTC / Video (Agora.io) | 100 | 1,200 | First 10K mins/month free |
| Mercado Pago / Stripe fees | ~3% of revenue | — | Variable |
| Marketing (organic-first) | 300 | 3,600 | Content, SEO tools, small boosts |
| Legal & AFIP compliance | 200 | 2,400 | Accountant + legal setup |
| Tools & subscriptions | 200 | 2,400 | Figma, Resend, Vercel, etc. |
| **TOTAL** | **~4,700** | **~56,400** | |

### 8.3 Break-Even Analysis

At ~USD 4,700/month in costs, break-even is achievable with relatively modest revenue:

- **Month 6:** ~50 Plus subscribers = USD 250 + ads = **~USD 350/mo** (bootstrapping mode)
- **Month 9:** ~150 Plus + 2 B2B accounts = **~USD 1,100/mo**
- **Month 12:** ~350 Plus + 5 B2B + marketplace = **~USD 2,800/mo**
- **Month 18:** ~1,000 Plus + 15 B2B + marketplace = **~USD 6,500/mo → break-even + profit**

> **No external funding required** if founders cover personal expenses from savings or freelance work for the first 6 months. The lean AI-first model makes bootstrapping entirely viable.

### 8.4 Go-to-Market Strategy (Organic-First)

#### Months 1–2: Seeding
- Personal outreach to 5 Argentine university language departments for free beta access
- Post authentically in Facebook/WhatsApp language learner groups (80K+ combined members)
- Create 2–3 TikTok/Reels showing the "exchange experience" — real sessions, real results
- Launch a waitlist landing page with SEO-optimized content

#### Months 3–6: Growth
- Referral program: 1 free Plus month per referred friend who completes 2 sessions
- SEO content: "cómo aprender inglés gratis", "intercambio de idiomas Argentina", "hablar con nativos en inglés"
- Partner with 2–3 Argentine English teachers on YouTube/Instagram for honest reviews
- ContentAgent posts to social automatically 3×/week

#### Months 7–12: Monetization
- Launch Plus with "Founding Member" pricing (locked rate for first 500 subscribers)
- Cold email to HR contacts at 100 Argentine export-oriented SMEs
- Apply to Argentine startup programs (Programa Emprender, ASEA, etc.) for visibility

---

## 9. Technical Architecture

### 9.1 Stack

| Layer | Technology | Why |
|---|---|---|
| Frontend | Next.js 14 + Tailwind CSS | Fast, SEO-ready, modern |
| Mobile | Progressive Web App (PWA) first, then React Native | PWA reduces dev cost for 2-person team |
| Backend | Node.js + Fastify | High throughput, real-time |
| Database | PostgreSQL (Supabase) + Redis | Managed DB reduces ops burden |
| Real-time | Supabase Realtime + Socket.io | Chat, presence, notifications |
| Video/Voice | Agora.io SDK | WebRTC, generous free tier |
| AI Orchestration | LangGraph (LangChain) | Agentic workflows, tool-calling |
| Vector DB | Pinecone | Semantic user matching |
| Auth | Supabase Auth | Free, integrated with DB |
| Payments | Mercado Pago + Stripe | Local + international |
| Email | Resend | Developer-friendly, cheap |
| Hosting | Vercel (frontend) + Railway (backend) | Minimal DevOps, auto-scaling |
| Analytics | PostHog (cloud free tier) | Privacy-compliant, full funnel |
| AI APIs | OpenAI + Anthropic | GPT-4o for agents, Claude for reasoning |

### 9.2 Why This Stack for 2 People

- **Supabase** replaces a backend DBA: managed Postgres, auth, real-time, storage in one
- **Vercel + Railway** deploy automatically on git push — no DevOps
- **LangGraph** lets one developer build and maintain all agentic workflows
- **PWA-first** means one codebase for web and mobile initially
- All services have generous free tiers that cover the first 1,000–2,000 users

### 9.3 Key Technical Constraints

- Low-bandwidth fallback: adaptive bitrate video → voice-only → text-only
- ARS/USD dual-currency pricing with quarterly auto-adjustment
- Argentina Law 25.326 (Personal Data Protection) compliance required
- No session recordings stored by default; opt-in only, auto-deleted after 30 days

---

## 10. Success Metrics & KPIs

| Metric | Month 3 | Month 6 | Month 12 |
|---|---|---|---|
| Registered Users | 500 | 2,000 | 10,000 |
| MAU | 150 | 700 | 3,500 |
| Session Completion Rate | >65% | >72% | >80% |
| D7 Retention | >25% | >35% | >45% |
| Match Satisfaction (1–5) | >3.8 | >4.0 | >4.3 |
| Plus Subscribers | 0 | 30 | 350 |
| MRR | USD 0 | USD 150 | USD 2,500 |
| NPS | >40 | >50 | >60 |
| AI Support Resolution Rate | >80% | >88% | >93% |
| Operator daily AI-task load | <3 hrs | <2 hrs | <1.5 hrs |

---

## 11. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Cold start: not enough users for quality matching | High | High | Global matching from day 1 (timezone-aware); seed with bilingual university students |
| ARS devaluation eroding revenue | High | Medium | USD-pegged pricing internally; ARS price auto-adjusts quarterly |
| AI agent failure (bad moderation, bad matches) | Medium | High | Human review queue for flagged content; A/B test match quality weekly; easy user feedback |
| Safety incidents (harassment) | Medium | High | DNI verification badge, AI moderation, 24hr human escalation path |
| 2-person bandwidth limit during crisis | Medium | Medium | Runbooks for common incidents; ModerationAgent handles 95% autonomously |
| Competition from Tandem / HelloTalk scaling into LATAM | Low | High | Argentine-first brand moat, Mercado Pago integration, local cultural content |
| Low Plus conversion | Medium | High | Session limit is the primary conversion driver; keep free tier tight (4 sessions/month) |

---

## 12. Development Roadmap

| Phase | Timeline | Key Deliverables |
|---|---|---|
| **Phase 0: Foundation** | Weeks 1–4 | Supabase schema, auth, landing page + waitlist, brand identity, LangGraph agentic scaffold |
| **Phase 1: MVP** | Months 2–4 | Profiles, text chat, video call (Agora), MatchAgent v1, OnboardingAgent, post-session AI summary, beta with 50 users |
| **Phase 2: AI Depth** | Months 5–7 | SupportAgent, ModerationAgent, GrowthAgent, ContentAgent, vocabulary system, PWA mobile, gamification v1 |
| **Phase 3: Monetization** | Months 8–10 | Plus subscription (Mercado Pago + Stripe), InsightAgent dashboard, group rooms, teacher marketplace |
| **Phase 4: Scale** | Months 11–18 | B2B corporate tier, pronunciation AI, LATAM expansion (Mexico, Colombia), Series A prep if desired |

---

## 13. Team & AI-Augmented Operations

### 13.1 The 2-Person Founding Team

| Role | Focus | Daily Work |
|---|---|---|
| **Operator #1 — Business** | Strategy, growth, partnerships, monetization, community | Reviews InsightAgent dashboard, responds to escalated support, manages B2B outreach, oversees GrowthAgent campaigns |
| **Operator #2 — Product/Tech** | Development, AI agents, infrastructure, UX | Builds and maintains the platform and AI systems, monitors agent performance, ships features |

### 13.2 How AI Replaces Headcount

| Function | Traditional Team | Intercambia AI |
|---|---|---|
| User matching | 2 engineers + algorithm team | MatchAgent (LangGraph + Pinecone) |
| Customer support | 2–3 support agents | SupportAgent (GPT-4o + account data) |
| Content creation | 1–2 content writers | ContentAgent (GPT-4o + templates) |
| Trust & safety | 1–2 moderators | ModerationAgent (GPT-4o + rules engine) |
| User lifecycle/CRM | 1 growth marketer | GrowthAgent (Resend + LangGraph) |
| Data & analytics | 1 analyst | InsightAgent (Claude + PostHog API) |
| New user onboarding | Support + product | OnboardingAgent (conversational flow) |

### 13.3 When to Hire (Trigger-Based)

Hire only when AI cannot scale a specific function:

- **Hire #3 (Community Manager):** When MAU > 5,000 and group rooms need live moderation
- **Hire #4 (Growth):** When MRR > USD 8,000 and paid acquisition ROI is proven
- **Hire #5 (Engineer):** When feature backlog exceeds 3-month runway for 1 developer

Until those triggers are hit, everything runs on the 2-person + AI model.

---

## 14. Appendix: Competitive Landscape

| Platform | Model | Strengths | Why Intercambia Wins |
|---|---|---|---|
| MyLanguageExchange.com | Exchange (free + premium) | Large community, proven concept | We have mobile, AI, video, and local presence |
| Tandem | Exchange + tutoring | Good mobile UX, voice/video | No Argentine localization, no Mercado Pago, weak LATAM push |
| HelloTalk | Exchange + social feed | Large user base, translation tools | Social noise, no focus, generic |
| italki | Tutor marketplace | Quality teachers | Expensive, no free exchange model, no LATAM focus |
| Duolingo | Gamified solo learning | Enormous brand, habit-forming | No human interaction; we are the human layer |
| Preply | Tutor marketplace | B2B product | Very expensive, no exchange, no LATAM identity |

---

*— End of Document —*

*Intercambia | Version 2.0 | May 2026 | Argentina-Based | 2-Person + AI Operating Model | Confidential*

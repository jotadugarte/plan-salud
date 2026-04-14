# SYSTEM_ARCHITECTURE.md

## The Absolute Stack
- Base: Ruby 3.x, Rails 8 (Omakase configs)
- Database: SQLite (Dev/Test), PostgreSQL (Prod)
- Deployment: Kamal
- Frontend CSS: TailwindCSS + inline Neumorphism legacy transitions
- Frontend JS: Hotwire (Turbo & Stimulus JS)

## Core Architectural Boundaries
1. **Frontend JS Isolation**: STRICTLY FORBIDDEN to use jQuery or raw inline `<script>` tags. All interactive toggles and dynamic UI (e.g., dashboard rendering, modals) MUST be encapsulated within standardized `Stimulus.js` controllers using target/action paradigms.
2. **Multi-tenancy Access Firewall**: All domain records read or mutated over HTTP MUST be strictly accessed through `Current.user` abstractions to prevent cross-tenant data leakage.
3. **Data Integrity**: Side-effects must remain in `before_validation` hooks with clear Value Objects for scalar types. Enforcing Domain Driven Design principles explicitly.

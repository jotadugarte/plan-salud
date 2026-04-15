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
4. **Future-Date Guard (domain write controllers)**: Any controller action that creates or destroys a domain record tied to a calendar date (e.g. `HabitLog`, `WorkoutLog`) MUST validate that the target date is not in the future relative to `Date.current` in `user.timezone`, and return `403 Forbidden` if it is. This guard must execute before the record lookup to avoid leaking IDs.
5. **No timezone-aware validation in Models**: Models MUST NOT use `Date.today` or `Time.now` to validate business constraints like "not in the future". Models have no access to `Current.user.timezone`. Future-date enforcement belongs in the **controller** layer (where `Current.user` is available). Model-level validations for date fields are restricted to presence and format checks only.

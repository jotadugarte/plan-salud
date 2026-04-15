# Project Specification (SPEC.md)

> **REQ-ID format:** Use `REQ-[DOMAIN]-[NNN]` for traceability (e.g. `REQ-AUTH-001`, `REQ-DASH-002`).

## 🎯 Purpose & Vision
Convert a static HTML/JS/CSS "Plan Integral de Salud" personal app into a multi-tenant, back-end driven Ruby on Rails application using Hotwire and SQLite.

## 📖 Domain Glossary

| Term | Definition | Semantic Meaning |
|------|------------|------------------|
| Phase | Represents the stage of the health plan. | A container of durations and specialized rules. |
| Master Exercise | Default catalog entry for an exercise. | A global reference that defines baseline metrics. |
| Snapshot Log | A check-in or interaction with a Master entity. | Is decoupled from the Master Entity, copying metrics dynamically. |
| Timezone Object | Ruby Value Object wrapping tzinfo strings. | Ensures physiological dates always align with user location. |
| Habit | Seeded global catalog for daily behaviors. | Read-only category representing a trackable action (e.g. "Desayuno", "Agua"). |
| Mi Día | Daily central dashboard overlay. | The primary interaction hub for tracking day-to-day habits and schedule adherence. |
| Habit Log | A toggle recording completion per date. | Enforces a strict day constraint using pure dates. |

## 🏗️ Core Entities & Relationships

- **User**
  - has_many :workout_logs
  - has_many :habit_logs
- **Exercise (Master)**
  - has_many :workout_logs
- **Habit (Master)**
  - has_many :habit_logs
- **WorkoutLog**
  - belongs_to :user
  - belongs_to :exercise
- **HabitLog**
  - belongs_to :user
  - belongs_to :habit
- **Phase**
  - Represented globally per cycle.

## 🛠️ Key Workflows & Business Logic
1. **[REQ-AUTH-001] Authentication & Timezone Initialization**: Validates standard parameters and normalizes timezones.
2. **[REQ-COR-001] Data Mutability Hooking**: When logging a Workout, the logs inherently snapshot the default repetitions, series, and weight from the Exercise catalog to maintain fidelity.
3. **[REQ-SYS-001] Multi-tenancy Constraint**: Forced `Current.user` contextual scoping across all progress writes and reads.
4. **[REQ-MDIA-001] Habit Toggling**: Habit logs strictly validate against future dates; `logged_on` cannot exceed the user's current calendar day in their `timezone`. The controller enforces this with a `403 Forbidden` guard clause before any create/destroy action.
5. **[REQ-MDIA-002] Idempotent State Logging**: Repeated habit toggles on the same date gracefully raise/intercept duplicate keys using SQLite unique indices `[user_id, habit_id, logged_on]`.
6. **[REQ-MDIA-003] Week-Calendar Navigation**: The Mi Día view navigates day-by-day and week-by-week via Turbo Frames using a bookmarkable `?date=YYYY-MM-DD` query param. The selected week is always the ISO calendar week (Monday–Sunday) containing the selected date. Future days are visible but habit checkboxes are rendered disabled and non-interactive. All date arithmetic uses `Date.current` scoped to `user.timezone` (never `Date.today` or `Time.now`).

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

## 🏗️ Core Entities & Relationships

- **User**
  - has_many :workout_logs
- **Exercise (Master)**
  - has_many :workout_logs
- **WorkoutLog**
  - belongs_to :user
  - belongs_to :exercise
- **Phase**
  - Represented globally per cycle.

## 🛠️ Key Workflows & Business Logic
1. **[REQ-AUTH-001] Authentication & Timezone Initialization**: Validates standard parameters and normalizes timezones.
2. **[REQ-COR-001] Data Mutability Hooking**: When logging a Workout, the logs inherently snapshot the default repetitions, series, and weight from the Exercise catalog to maintain fidelity.
3. **[REQ-SYS-001] Multi-tenancy Constraint**: Forced `Current.user` contextual scoping across all progress writes and reads.

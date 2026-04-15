# Schema Reference

This reference is automatically governed by `sync-docs`, mapping the SQLite definitions from `db/schema.rb`.

## Data Semantics & Overviews
* **users**: Central authoritative tenant. Maintains core attributes (`timezone`, `role`). Added `plan_started_at` to infer the first day the user started using the app.
* **phases**: High-level boundaries of plan progression.
* **exercises**: Immutable global catalog.
* **workout_logs**: Mutated telemetry per user. **[Crucial Semantic]**: When `workout_logs` are instantiated, they copy (`snapshot`) the primitives (`completed_reps`, `completed_weight` -> wrapped as `Weight`) of the Master `exercise`.
* **habits**: Seeded global catalog for the "Mi Día" feature. Grouped by `category`. Read-only by default.
* **habit_logs**: Tracks habit completion per user. **[Crucial Semantic]**: Uses a pure Date (`logged_on`) rather than highly specific datetime timestamps to avoid timezone crossover bugs at midnight. It features a unique composite index (`user_id`, `habit_id`, `logged_on`) enforcing a strict boolean state constraint across a calendar day.

## Tables

### users
* `email`: string, unique
* `password_digest`: string
* `role`: string, default "user"
* `timezone`: string
* `plan_started_at`: date

### exercises
* `name`: string
* `description`: text
* `default_reps`, `default_series`: integer
* `default_weight`: decimal (6,2)
* `tags`: json

### phases
* `name`: string
* `duration_days`: integer
* `rules`: json

### workout_logs
* `user_id`: fkey
* `exercise_id`: fkey
* `completed_reps`: integer
* `completed_series`: integer
* `completed_weight`: decimal (6,2) [Wrapped in Weight.rb]

### habits
* `key`: string, unique
* `name`: string
* `category`: string
* `position`: integer

### habit_logs
* `user_id`: fkey (users)
* `habit_id`: fkey (habits)
* `logged_on`: date
* `completed`: boolean, default false

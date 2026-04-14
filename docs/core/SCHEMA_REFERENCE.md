# Schema Reference

This reference is automatically governed by `sync-docs`, mapping the SQLite definitions from `db/schema.rb`.

## Data Semantics & Overviews
* **users**: Central authoritative tenant. Maintains core attributes (`timezone`, `role`).
* **phases**: High-level boundaries of plan progression.
* **exercises**: Immutable global catalog.
* **workout_logs**: Mutated telemetry per user. **[Crucial Semantic]**: When `workout_logs` are instantiated, they copy (`snapshot`) the primitives (`completed_reps`, `completed_weight` -> wrapped as `Weight`) of the Master `exercise`. Modifying the master catalog will *not* retroactively rewrite historical user telemetry data!

## Tables

### users
* `email`: string, unique
* `password_digest`: string
* `role`: string, default "user"
* `timezone`: string

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

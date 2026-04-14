# Migrate HTML App to Rails + Hotwire + SQLite

## The Goal
Convert a static HTML/JS/CSS "Plan Integral de Salud" personal app into a multi-tenant, back-end driven Ruby on Rails application using Hotwire and SQLite.

## Core Decisions
1. **Multitenancy**: App will support multiple users, each with their own goals and progress.
2. **Administration**: Admins will have CRUD interfaces to manage the catalog of Exercises, Meals, and Phases.
3. **Tracking**: Users will have a daily check-in system to log their adherence (exercises done, meals eaten, habits completed).
4. **UI/UX**: Modals and simple interactions will be managed by lightweight Stimulus controllers.
5. **Timezones**: User model saves timezone; daily calculations use `Time.current.in_time_zone(user.timezone)`.
6. **Immutability**: Logs take a snapshot of the metric (e.g. weight, reps) instead of just referencing the Master Exercise/Recipe.
7. **Shopping Lifecycle**: Abstracted to `WeeklyShoppingList` per user, regenerated per cycle.
8. **Security**: Forced `Current.user` scoping for all progress writes and reads.

## Domain Model (Draft)
- **User**: Authenticatable entity. Includes physiological data (height, initial weight, target weight), current timezone, and role.
- **Phase**: Represents the stage of the health plan (e.g., Phase 1, Phase 2). Contains duration/rules.
- **Exercise (Master)**: Catalog entry with name, description, tags, default series/reps/weight/rest.
- **Recipe / Meal (Master)**: Catalog entry with name, ingredients, procedure, tags.
- **DailyPlan**: A mapping of which Exercises and Meals correspond to which day of the week in a given Phase.
- **CheckIn / Log**: 
  - `WeightLog`: Tracks weight progression over time.
  - `WorkoutLog`: Snapshot of the exercise completed (allows overriding the completed weight/reps if it deviated from the plan).
  - `MealLog`: Boolean check or details of adherence for a specific meal.
  - `HabitLog`: e.g., "Walked 10k steps", "Skipped rope".
- **ShoppingCategory & ShoppingItem**: An aggregated list generated dynamically per user based on their current active phase/meals.

### Value Objects
- **Role**: Encapsulates `admin` vs `user` validation.
- **Timezone**: Validates and normalizes robust timezone strings (e.g., `America/Bogota`).
- **Weight**: Encapsulates decimal values, units (kg/lbs), and ensures non-negative numbers.
- **Measurement**: Captures metrics like repetitions, distance, or duration with their appropriate units.

<implementation_plan>
<step id="1" status="complete">
  <description>Setup Rails green test baseline</description>
  <action>Run bin/rails test to ensure the environment is healthy before writing any code. If Rails hasn't been initialized, initialize it with SQLite.</action>
</step>
<step id="2" status="complete">
  <description>Write a failing test for User Authentication & Timezones</description>
  <action>Generate a test ensuring a User object requires an email, password, and timezone.</action>
</step>
<step id="3" status="complete">
  <description>Implement User Auth</description>
  <action>Configure Rails authentication (Authentication API en Rails 8 o has_secure_password), add timezone column, and scaffold basic session controllers.</action>
</step>
<step id="4" status="complete">
  <description>Write failing tests for Models (Phase, Exercise, Recipe, DailyPlan, Logs)</description>
  <action>Create ActiveSupport::TestCase files defining relationships and validations. Specifically verify that WorkoutLog captures snapshots of Exercise metrics.</action>
</step>
<step id="5" status="pending">
  <description>Implement Models and DB Migrations</description>
  <action>Generate models and migrations for the core domain. Setup associations (`has_many :workout_logs`). Ensure `WorkoutLog` copies metrics natively.</action>
</step>
<step id="6" status="pending">
  <description>Write failing tests for Core Controllers (Tracking & Admin)</description>
  <action>Test that users can only access their own logs (Privacy). Test that admins can access Master catalogs.</action>
</step>
<step id="7" status="pending">
  <description>Implement Controllers & Stimulus</description>
  <action>Build endpoints for Daily Check-ins. Add Stimulus controllers for UI toggles (expanding recipes/phases).</action>
</step>
<step id="8" status="pending">
  <description>Port Frontend Templates (Neumorphism UI)</description>
  <action>Refactor the existing `index.html` Vanilla CSS and structure into Rails layouts/views, preserving the exact aesthetic via asset pipeline.</action>
</step>
</implementation_plan>

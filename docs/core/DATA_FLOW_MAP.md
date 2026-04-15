# Data Flow Map

Visualizing key entity lifecycles and side-effects.

## 1. Immutable Logging Lifecycle (WorkoutLog Snapshot)

```text
[User checks in] -> {WorkoutLogsController}
                        |
                        v
        (Instantiates WorkoutLog via Current.user)
                        |
                        v
          [before_validation hook triggers]
           `snapshot_metrics_from_exercise`
                        |
                        v
      (Copies Master Exercise defaults into Log Instance)
                        |
                        v
         {Weight Value Object Encapsulation}
                        |
                        v
                 [Saved to DB]
```

## 2. Mi Día Navigation Lifecycle (Turbo Frame Carousel)

```text
[User clicks day/week arrow] -> {Turbo Frame GET /mi_dia?date=YYYY-MM-DD}
                                       |
                                       v
                    (MiDiaController#index parses date param)
                    (Defaults to Date.current in user.timezone)
                                       |
                                       v
                    (Calculates week: Monday..Sunday of selected date)
                    (Loads Habits + HabitLogs for selected date)
                    (Sets readonly_day = selected_date > Date.current)
                                       |
                                       v
                 {Turbo Frame replaces #mi_dia — bookmarkable URL}
```

## 3. Habit Logging Lifecycle (Mi Día Dashboard)

```text
[User toggles Habit checkbox] -> {HabitLogsController}
                                       |
                                       v
                     [Guard: logged_on > Date.current? → 403 Forbidden]
                                       |
                                       v
                          (Validates ownership via Current.user)
                                       |
                                       v
                    (Creates or deletes HabitLog with DB Unique Index)
                    (ActiveRecord::RecordNotUnique rescued on double-POST)
                                       |
                                       v
                      {Turbo Stream replacement updates UI state}
```

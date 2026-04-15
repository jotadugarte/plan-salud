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

## 2. Habit Logging Lifecycle (Mi Día Dashboard)

```text
[User toggles Habit checkbox] -> {HabitLogsController}
                                       |
                                       v
                          (Validates `logged_on` <= Date.today)
                                       |
                                       v
                    (Creates or deletes HabitLog with DB Unique Index)
                                       |
                                       v
                      {Turbo Stream replacement updates UI state}
```

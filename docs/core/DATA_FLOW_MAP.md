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

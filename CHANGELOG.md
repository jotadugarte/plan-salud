# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- Rails 8 application initialized with SQLite database and Hotwire (Turbo/Stimulus).
- Core domain models including `User`, `Phase`, `Exercise`, `WorkoutLog` with Data Validation and Value Object encapsulations (`Role`, `Timezone`).
- Devise-style custom authentication flow with timezone enforcement and role-based policies using `Current.user`.
- Code review compliance refactoring for `WorkoutLogsController` and `User` models to utilize native Rails I18n symbols.

### Changed
- Standardized fluid layout and interactive soft neumorphism across all tabs.
- Enlarged tap targets (minimum 32px) for improved mobile accessibility.
- Optimized Exercise component layout using fluid flexbox.
- Extracted global `--transition-fast` variable for cohesive UI animations.

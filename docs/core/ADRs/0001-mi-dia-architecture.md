# ADR 0001: Arquitectura de la Vista "Mi Día"

## Contexto
La transición del "Calendario" original en HTML estático a una plataforma Rails dinámica requiere un mapeo preciso de las interacciones de registro de hábitos. Se necesita rastrear el cumplimiento diario sin acoplar demasiada lógica al calendario gregoriano ni sufrir inconsistencias de zona horaria por el uso de *timestamps*.

## Decisiones

1. **Reemplazo Semántico:** La vista "Calendario" se renombra a "Mi Día" para focalizarse en el presente y simplificar la carga cognitiva, relegando el "calendario" a una simple barra (carrusel de navegación).
2. **Registro basado en fechas puras:** El modelo `HabitLog` utiliza campos Date puros (`logged_on`) y el índice de base de datos (`user_id`, `habit_id`, `logged_on`) es único. El uso de validaciones de fechas puras en Rails mitiga los errores por cambio de día trans-horario; se fuerza la validación respecto a `Date.current` bajo el huso horario configurado para el Tenant (`User`).
3. **Catálogo Seeded (Read-Only):** En esta versión inicial (v1), los hábitos disponibles existen de forma global en la base de datos (seeded rows). Hemos evitado deliberadamente agregar un CRUD de administración de hábitos personalizados por usuario para mantener el alcance bajo control.
4. **Respuesta Rápida (Optimización):** Se descartan las peticiones asíncronas lentas. Los toggles de hábitos envían una solicitud y retornan una respuesta de reemplazo `Turbo Stream` para actualizar la vista de forma casi instantánea, conservando el scroll sin JavaScript extra, manteniendo así un backend predominantemente en HTML.

## Consecuencias
- La rigidez del catálogo global de hábitos mantendrá los requisitos mínimos, pero deberemos ampliar la arquitectura global si el negocio exige rutinas extremadamente personalizadas por usuario.
- El acoplamiento explícito a SQLite Unique Indexes significa la resolución absoluta (no "suave") de logs de hábitos duplicados, requiriendo el uso de validaciones como `ActiveRecord::RecordNotUnique` si por alguna pérdida de conexión el Turbo Stream reenvía *POSTs*.

# [REQ-MDIA-004] Date formatting helpers for Mi Día view — Spanish locale
module MiDiaHelper
  SPANISH_DAYS_SHORT = %w[Do Lu Ma Mi Ju Vi Sá].freeze
  SPANISH_DAYS_LONG  = %w[Domingo Lunes Martes Miércoles Jueves Viernes Sábado].freeze
  SPANISH_MONTHS     = %w[enero febrero marzo abril mayo junio julio agosto
                           septiembre octubre noviembre diciembre].freeze

  CATEGORY_CONFIG = {
    "alimentacion" => { icon: "🍽️", label: "Alimentación", color: "food"      },
    "salud_fisica" => { icon: "💪",  label: "Salud Física", color: "health"    },
    "emocional"    => { icon: "🌿",  label: "Emocional",    color: "emotional" }
  }.freeze

  # [REQ-MDIA-004] Short day abbreviation (e.g., "Lu", "Ma")
  def spanish_day_short(date)
    SPANISH_DAYS_SHORT[date.wday]
  end

  # [REQ-MDIA-004] Full day name (e.g., "Lunes", "Martes")
  def spanish_day_long(date)
    SPANISH_DAYS_LONG[date.wday]
  end

  # [REQ-MDIA-004] Month name in lowercase (e.g., "abril")
  def spanish_month(date)
    SPANISH_MONTHS[date.month - 1]
  end

  # [REQ-MDIA-004] Short date label (e.g., "14 abr")
  def format_short_date(date)
    "#{date.day} #{spanish_month(date).first(3)}"
  end

  # [REQ-MDIA-004] Returns category display config hash.
  def habit_category_config(category)
    CATEGORY_CONFIG[category] || { icon: "•", label: category.to_s.humanize, color: "food" }
  end
end

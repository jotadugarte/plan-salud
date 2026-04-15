# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

# [REQ-MDIA-002] Seed default habits — idempotent via find_or_create_by!
[
  { key: "desayuno",     name: "Desayuno",       category: "alimentacion",  position: 1 },
  { key: "almuerzo",     name: "Almuerzo",        category: "alimentacion",  position: 2 },
  { key: "cena",         name: "Cena",            category: "alimentacion",  position: 3 },
  { key: "ejercicio",    name: "Ejercicio",        category: "salud_fisica", position: 4 },
  { key: "agua",         name: "Agua (8 vasos)",   category: "salud_fisica", position: 5 },
  { key: "paseo_pixel",  name: "Paseo de Píxel",  category: "emocional",    position: 6 }
].each do |attrs|
  Habit.find_or_create_by!(key: attrs[:key]) do |h|
    h.name     = attrs[:name]
    h.category = attrs[:category]
    h.position = attrs[:position]
  end
end

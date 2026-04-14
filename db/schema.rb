# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.1].define(version: 2026_04_14_040000) do
  create_table "exercises", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.integer "default_reps", null: false
    t.integer "default_rest_seconds"
    t.integer "default_series", null: false
    t.decimal "default_weight", precision: 6, scale: 2
    t.text "description"
    t.string "name", null: false
    t.json "tags"
    t.datetime "updated_at", null: false
  end

  create_table "phases", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.integer "duration_days", null: false
    t.string "name", null: false
    t.json "rules"
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "role", default: "user", null: false
    t.string "timezone", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  create_table "workout_logs", force: :cascade do |t|
    t.integer "completed_reps", null: false
    t.integer "completed_series", null: false
    t.decimal "completed_weight", precision: 6, scale: 2
    t.datetime "created_at", null: false
    t.integer "exercise_id", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id", null: false
    t.index ["exercise_id"], name: "index_workout_logs_on_exercise_id"
    t.index ["user_id"], name: "index_workout_logs_on_user_id"
  end

  add_foreign_key "workout_logs", "exercises"
  add_foreign_key "workout_logs", "users"
end

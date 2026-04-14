class CreateWorkoutLogs < ActiveRecord::Migration[8.1]
  def change
    create_table :workout_logs do |t|
      t.references :user, null: false, foreign_key: true
      t.references :exercise, null: false, foreign_key: true
      t.integer :completed_series, null: false
      t.integer :completed_reps, null: false
      t.decimal :completed_weight, precision: 6, scale: 2

      t.timestamps
    end
  end
end

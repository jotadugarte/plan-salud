class CreateHabitLogs < ActiveRecord::Migration[8.1]
  def change
    create_table :habit_logs do |t|
      t.references :user,  null: false, foreign_key: true
      t.references :habit, null: false, foreign_key: true
      t.date    :logged_on,  null: false
      t.boolean :completed,  null: false, default: false

      t.timestamps
    end

    add_index :habit_logs, [ :user_id, :habit_id, :logged_on ], unique: true
  end
end

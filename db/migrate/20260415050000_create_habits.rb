class CreateHabits < ActiveRecord::Migration[8.1]
  def change
    create_table :habits do |t|
      t.string :key,      null: false
      t.string :name,     null: false
      t.string :category, null: false
      t.integer :position, null: false, default: 0

      t.timestamps
    end

    add_index :habits, :key, unique: true
  end
end

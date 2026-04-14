class CreatePhases < ActiveRecord::Migration[8.1]
  def change
    create_table :phases do |t|
      t.string :name, null: false
      t.integer :duration_days, null: false
      t.json :rules

      t.timestamps
    end
  end
end

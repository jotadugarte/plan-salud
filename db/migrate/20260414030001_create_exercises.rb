class CreateExercises < ActiveRecord::Migration[8.1]
  def change
    create_table :exercises do |t|
      t.string :name, null: false
      t.text :description
      t.json :tags
      t.integer :default_series, null: false
      t.integer :default_reps, null: false
      t.decimal :default_weight, precision: 6, scale: 2
      t.integer :default_rest_seconds

      t.timestamps
    end
  end
end

class AddPlanStartedAtToUsers < ActiveRecord::Migration[8.1]
  def change
    add_column :users, :plan_started_at, :date
  end
end

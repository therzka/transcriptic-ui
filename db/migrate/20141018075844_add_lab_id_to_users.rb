class AddLabIdToUsers < ActiveRecord::Migration
  def change
    add_column :users, :lab_id, :string, null: false
  end
end

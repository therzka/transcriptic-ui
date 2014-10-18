class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :project_id, null: false
      t.timestamps

      t.belongs_to :user
    end
  end
end

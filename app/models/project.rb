class Project < ActiveRecord::Base
  validates_presence_of :project_id

  belongs_to :user
end
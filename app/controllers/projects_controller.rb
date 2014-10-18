class ProjectsController < ApplicationController
  before_filter :authenticate_user!
  
  def index
    @projects = current_user.projects.all
  end

  def show
    @project = Project.find(params[:id])
  end
end
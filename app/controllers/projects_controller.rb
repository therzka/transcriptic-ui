class ProjectsController < ApplicationController
  before_filter :authenticate_user!
  
  def index
    @projects = current_user.projects.all
  end

  def show
    @project = Project.find(params[:id])
  end

  def new
    @project = Project.new
  end

  def create
    current_user.projects.create(project_params)
    redirect_to projects_path
  end

  private

  def project_params
    params.require(:project).permit(:project_id)
  end
end
class ProjectsController < ApplicationController
  
  def index
    @projects = if user_signed_in?
      current_user.projects.all
    else
      []
    end
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
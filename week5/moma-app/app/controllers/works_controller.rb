class WorksController < ApplicationController
  def new
    @work = Work.new
  end

  def create
    # raise 'hell'

    Work.create work_params

    redirect_to works_path
  end

  def index
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  def work_params
    params.require(:work).permit( :title, :year, :medium, :style, :image )
  end

end

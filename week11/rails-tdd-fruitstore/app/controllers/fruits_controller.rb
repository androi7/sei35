class FruitsController < ApplicationController

  def index
    @fruits = Fruit.all.reverse

    respond_to do |format|
      format.html  # render default HTML template
      format.json { render json: @fruits }
    end
  end # index

  def search
    @fruits = Fruit.where name: params[:name]
  end


  def create

    fruit = Fruit.create fruit_params

    if fruit.persisted?
      redirect_to fruit
    else
      # validation error, allow user to correct form errors
      render :new
    end

  end # create


  def show
  end # show


  private

  def fruit_params
    params.require(:fruit).permit(:name, :shelf_id)
  end

end

class PetsController < ApplicationController
  def index
    @pets = Pet.all
  end

  def show
    @pet = Pet.find params[:id]
  end

  def new
    @pet = Pet.new
  end

  def create
    pet = Pet.new pet_params
    if params[:file].present?
      req = Cloudinary::Uploader.upload(params[:file])
      pet.image = req["public_id"]
    end
    pet.save
    redirect_to pet_path(pet)
  end

  def update
    pet = Pet.find params[:id]

    # to do
  end

  def edit
    @pet = Pet.find params[:id]
  end

  private

  def pet_params
    params.require(:pet).permit(:name)
  end
end

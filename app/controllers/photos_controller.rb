class PhotosController < ApplicationController

  def index
    @photos = Photo.all
  end

  def new
    @photo = Photo.new
  end

  def create
    @photo = Photo.new( user_params)
    @photo.save
    redirect_to photos_path
  end

  private

    def user_params
      params.require(:photo).permit(:name, :image, :description, :album_id)
    end

end

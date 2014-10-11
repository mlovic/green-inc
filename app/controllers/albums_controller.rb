class AlbumsController < ApplicationController
  def new
  end

  def index
    @albums = Album.all
  end

  def show
    @album = Album.find(params[:id])
    @photos = @album.photos.all
  end
end

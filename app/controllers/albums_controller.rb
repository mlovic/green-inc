class AlbumsController < ApplicationController
  def new
  end

  def index
    @albums = Album.all.images.first
  end

  def show
    @images
  end
end

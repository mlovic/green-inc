class AlbumsController < ApplicationController
  def new
    @album = Album.new
  end

  def index
    @albums = Album.all
  end

  def show
    @album = Album.find(params[:id])
    @photos = @album.photos.all
  end

  def create
    @photos = params[:images]
    @album = Album.new(album_params)
    @album.save
    @photos.each do |p|
      @album.photos.create(image: p)
    end
    redirect_to admin_album_path(@album) 
  end

  private

    def album_params
      params.require(:album).permit(:name, :description, :category, {:photos => []})
    end
end

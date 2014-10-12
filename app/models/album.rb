class Album < ActiveRecord::Base
  has_many :photos

  def self.thumbnail
    self.photos.first
  end
end

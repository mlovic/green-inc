ActiveAdmin.register Photo do
  permit_params :name, :image, :description, :album
  form html: {enctype: "multipart/form-data"} do |f|
    f.inputs "Photo", multipart: true do
      f.input :name
      f.input :description
      f.input :image, :as => :file
      f.input :album
    end
    f.actions
  end

  show do 
    default_main_content
    attributes_table do
      row :name do
        image_tag photo.image.url
      end
    end
  end

  index do 
    id_column
    column :image do |photo|
      link_to image_tag(photo.image.url(:thumb)), admin_photo_path(photo)
    end
  end

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # permit_params :list, :of, :attributes, :on, :model
  #
  # or
  #
  # permit_params do
  #   permitted = [:permitted, :attributes]
  #   permitted << :other if resource.something?
  #   permitted
  # end


end

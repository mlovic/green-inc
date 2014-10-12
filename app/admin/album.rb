ActiveAdmin.register Album do
  permit_params :name, :photos, :description, :category
  form partial: 'form'
  
  #form html: {enctype: "multipart/form-data"} do |f|
    #f.inputs "Album", multipart: true do
      #f.input :name
      #f.input :description
      #f.input :category
    #end
    #f.inputs "Images", multipart: true do
      #f.input :photos, :as => :file, :input_html => {:multiple => true}
      ##file_field_tag "images[]", type: :file, multiple: true
    #end
    #f.actions
  #end

  #show do 
    #default_main_content
    #attributes_table do
      #row :name do
        #image_tag photo.image.url
      #end
    #end
  #end

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

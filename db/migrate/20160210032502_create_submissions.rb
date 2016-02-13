class CreateSubmissions < ActiveRecord::Migration
  def change
    create_table :submissions do |t|
      t.string  :address_city
      t.string  :address_one
      t.string  :address_state
      t.string  :address_two
      t.string  :address_zip
      t.date    :birthday
      t.string  :cell_phone
      t.string  :current_page
      t.string  :email
      t.string  :first_name
      t.integer :gender
      t.string  :guardian_email
      t.string  :guardian_employer
      t.string  :guardian_first_name
      t.string  :guardian_job_title
      t.string  :guardian_last_name
      t.string  :guardian_phone_number
      t.integer :guardian_phone_type
      t.integer :guardian_relationship
      t.string  :home_phone
      t.string  :last_name
      t.string  :preferred_name
      t.integer :registration_status
      t.integer :shirt_size
      t.integer :total_pages
      t.uuid    :uuid, default: 'uuid_generate_v4()'
    end
  end
end

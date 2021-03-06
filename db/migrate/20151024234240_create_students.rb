class CreateStudents < ActiveRecord::Migration

  def change
    create_table :students do |t|
      t.string  :address_city, null: false
      t.string  :address_one, null: false
      t.integer :address_state, null: false
      t.string  :address_two, default: '', null: false
      t.string  :address_zip, null: false
      t.date    :birthday, null: false
      t.string  :cell_phone, null: false
      t.boolean :is_checked_in, default: false, null: false
      t.string  :email, null: false
      t.string  :first_name, null: false
      t.integer :gender, null: false
      t.string  :guardian_one_email, null: false
      t.string  :guardian_one_employer, default: '', null: false
      t.string  :guardian_one_first_name, null: false
      t.string  :guardian_one_job_title, default: '', null: false
      t.string  :guardian_one_last_name, null: false
      t.string  :guardian_one_phone_number, null: false
      t.integer :guardian_one_phone_type, null: false
      t.integer :guardian_one_relationship, null: false
      t.string  :guardian_two_email, default: '', null: false
      t.string  :guardian_two_employer, default: '', null: false
      t.string  :guardian_two_first_name, default: '', null: false
      t.string  :guardian_two_job_title, default: '', null: false
      t.string  :guardian_two_last_name, default: '', null: false
      t.string  :guardian_two_phone_number, default: '', null: false
      t.integer :guardian_two_phone_type
      t.integer :guardian_two_relationship
      t.string  :home_phone, default: '', null: false
      t.boolean :is_flagged, default: false, null: false
      t.boolean :is_primary, null: false
      t.string  :last_name, null: false
      t.string  :preferred_name, default: '', null: false
      t.integer :shirt_size, null: false
      t.uuid    :submission_id, null: false
      t.references :conference, index: true, null: false
      t.references :group, index: true
      t.references :room, index: true
      t.references :school, index: true

      t.timestamps null: false
    end
  end

end

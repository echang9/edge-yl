class CreateStudentSubmissions < ActiveRecord::Migration

  def change
    create_table :student_submissions do |t|
      t.string  :address_city
      t.string  :address_one
      t.string  :address_state
      t.string  :address_two
      t.string  :address_zip
      t.integer :allergies
      t.date    :birthday
      t.string  :cell_phone
      t.integer :current_page, default: 0, null: false
      t.integer :dietary_restrictions
      t.string  :email
      t.integer :emergency_consent
      t.string  :exercise_limitations
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
      t.integer :health_conditions
      t.string  :home_phone
      t.boolean :is_draft, default: true, null: false
      t.integer :immunizations
      t.string  :last_name
      t.string  :medical_guardian_name
      t.string  :medications
      t.string  :other_dietary_restrictions
      t.string  :preferred_name, default: ''
      t.integer :psychologist_consent
      t.integer :registration_status
      t.integer :shirt_size
      t.uuid    :uuid, default: 'uuid_generate_v4()'
    end
  end

end


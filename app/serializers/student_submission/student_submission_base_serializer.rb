class StudentSubmissionBaseSerializer < BaseSerializer

  attributes :id, :address_city, :address_one, :address_state,
             :address_two, :address_zip, :allergies, :birthday, :cell_phone,
             :current_page, :dietary_restrictions, :email,
             :emergency_consent, :exercise_limitations,
             :first_name, :gender, :guardian_email,
             :guardian_employer, :guardian_first_name,
             :guardian_job_title, :guardian_last_name,
             :guardian_phone_number, :guardian_phone_type,
             :guardian_relationship, :health_conditions, :home_phone,
             :is_draft, :immunizations, :last_name, :medical_guardian_name,
             :medications, :other_dietary_restrictions, :preferred_name,
             :psychologist_consent,:registration_status, :shirt_size, :uuid

end

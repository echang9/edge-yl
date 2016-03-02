# == Schema Information
#
# Table name: students
#
#  id                         :integer          not null, primary key
#  address_city               :string           not null
#  address_one                :string           not null
#  address_state              :string           not null
#  address_two                :string           default(""), not null
#  address_zip                :string           not null
#  allergies                  :integer          not null
#  birthday                   :date             not null
#  cell_phone                 :string           not null
#  dietary_restrictions       :integer          not null
#  other_dietary_restrictions :string           not null
#  email                      :string           not null
#  emergency_consent          :integer          not null
#  exercise_limitations       :string           not null
#  first_name                 :string           not null
#  gender                     :integer          not null
#  guardian_email             :string           not null
#  guardian_employer          :string           default(""), not null
#  guardian_first_name        :string           not null
#  guardian_job_title         :string           default(""), not null
#  guardian_last_name         :string           not null
#  guardian_phone_number      :string           not null
#  guardian_phone_type        :integer          not null
#  guardian_relationship      :integer          not null
#  health_conditions          :integer          not null
#  home_phone                 :string           not null
#  immunizations              :integer          not null
#  is_flagged                 :boolean          not null
#  is_primary                 :boolean          not null
#  last_name                  :string           not null
#  medical_guardian_name      :string           not null
#  medications                :string           not null
#  preferred_name             :string           default(""), not null
#  psychologist_consent       :integer          not null
#  registration_status        :integer          not null
#  shirt_size                 :integer          not null
#  conference_id              :integer
#  group_id                   :integer
#  room_id                    :integer
#  school_id                  :integer
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#

FactoryGirl.define do

  factory :student do
    address_city          { Faker::Address.city }
    address_one           { Faker::Address.street_address }
    address_state         { Faker::Address.state }
    address_two           { Faker::Address.street_address }
    address_zip           { Faker::Address.zip }
    allergies             { 0 }
    birthday              { Faker::Date.between(33.days.ago, Date.today) }
    cell_phone            { Faker::PhoneNumber.phone_number }
    dietary_restrictions  { 0 }
    email                 { Faker::Internet.email }
    emergency_consent     { 0 }
    exercise_limitations  { 'None' }
    first_name            { Faker::Name.first_name }
    gender                { rand(3) }
    guardian_email        { Faker::Internet.email }
    guardian_employer     { Faker::Name.name }
    guardian_first_name   { Faker::Name.first_name }
    guardian_job_title    { 'Software Engineer' }
    guardian_last_name    { Faker::Name.last_name }
    guardian_phone_number { Faker::PhoneNumber.phone_number }
    guardian_phone_type   { rand(3) }
    guardian_relationship { rand(9) }
    health_conditions     { 0 }
    home_phone            { Faker::PhoneNumber.phone_number }
    immunizations         { 0 }
    is_flagged            { true }
    is_primary            { true }
    last_name             { Faker::Name.last_name }
    medical_guardian_name { Faker::Name.first_name }
    medications           { 'None' }
    other_dietary_restrictions { 'None' }
    preferred_name        { 'sonia' }
    psychologist_consent  { 0 }
    registration_status   { rand(3) }
    shirt_size            { rand(5) }
  end

end

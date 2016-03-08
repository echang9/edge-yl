# == Schema Information
#
# Table name: student_submissions
#
#  id                         :uuid             not null, primary key
#  address_city               :string
#  address_one                :string
#  address_state              :string
#  address_two                :string           default("")
#  address_zip                :string
#  allergies                  :integer
#  birthday                   :date
#  cell_phone                 :string
#  current_page               :integer          default(0), not null
#  dietary_restrictions       :integer
#  email                      :string
#  emergency_consent          :integer
#  exercise_limitations       :string
#  first_name                 :string
#  gender                     :integer
#  guardian_email             :string
#  guardian_employer          :string           default("")
#  guardian_first_name        :string
#  guardian_job_title         :string           default("")
#  guardian_last_name         :string
#  guardian_phone_number      :string
#  guardian_phone_type        :integer
#  guardian_relationship      :integer
#  health_conditions          :integer
#  home_phone                 :string
#  is_draft                   :boolean          default(TRUE), not null
#  immunizations              :integer
#  last_name                  :string
#  medical_guardian_name      :string
#  medications                :string
#  other_dietary_restrictions :string
#  preferred_name             :string           default("")
#  psychologist_consent       :integer
#  registration_status        :integer
#  shirt_size                 :integer
#

class StudentSubmission < ActiveRecord::Base

  enum boolean: [:yes, :no]
  enum gender: [:female, :male, :other]
  enum dietary_restriction: [:dairy_free, :gluten_free, :None, :nut_allergy, :vegan, :vegetarian]
  enum guardian_phone_type: [:cell, :home, :work]
  enum guardian_relationship: [
    :mother,
    :father,
    :aunt,
    :uncle,
    :grandmother,
    :grandfather,
    :stepmother,
    :stepfather,
    :guardian,
  ]
  enum registration_status: [:registered, :selected, :dropped]
  enum shirt_size: [:S, :M, :L, :XL, :XXL]


  before_validation :validate_page, on: :update

  def form_url
    # TODO (Warren): !!!
    "http://localhost:3000/forms/student/#{id}"
  end

  def full_name
    "#{first_name} #{last_name}"
  end

  def submit_submission
    student = Student.new(
      address_city: address_city,
      address_one: address_one,
      address_state: address_state,
      address_two: address_two,
      address_zip: address_zip,
      allergies: 0,
      birthday: Date.new,
      cell_phone: cell_phone,
      dietary_restrictions: 0,
      exercise_limitations: exercise_limitations,
      email: email,
      emergency_consent: 0,
      first_name: first_name,
      gender: 0,
      health_conditions: 0,
      guardian_email: guardian_email,
      guardian_employer: guardian_employer,
      guardian_first_name: guardian_first_name,
      guardian_job_title: guardian_job_title,
      guardian_last_name: guardian_last_name,
      guardian_phone_type: 0,
      guardian_phone_number: guardian_phone_number,
      guardian_relationship: 3,
      home_phone: home_phone,
      immunizations: 0,
      last_name: last_name,
      medical_guardian_name: medical_guardian_name,
      medications: medications,
      other_dietary_restrictions: other_dietary_restrictions,
      preferred_name: preferred_name,
      psychologist_consent: 0,
      shirt_size: 1,
    )
    if student.save
      self.is_draft = true
      self.save
    end
  end

  private

  def attributes_one
    {
      first_name: first_name,
      last_name: last_name,
      gender: gender,
      birthday: Date.new,
      email: email,
      cell_phone: cell_phone,
      home_phone: home_phone,
      address_one: address_one,
      address_two: address_two,
      address_city: address_city,
      address_state: address_state,
      address_zip: address_zip,
      shirt_size: shirt_size,
    }
  end

  def attributes_two
    {
      guardian_first_name: guardian_first_name,
      guardian_last_name: guardian_last_name,
      guardian_email: guardian_email,
      guardian_relationship: guardian_relationship,
      guardian_phone_number: guardian_phone_number,
      guardian_phone_type: guardian_phone_type,
    }
  end

  def attributes_three
    {
      immunizations: immunizations,
      allergies: allergies,
      health_conditions: health_conditions,
      medications: medications,
      dietary_restrictions: dietary_restrictions,
      other_dietary_restrictions: other_dietary_restrictions,
      exercise_limitations: exercise_limitations,
      emergency_consent: emergency_consent,
      psychologist_consent: psychologist_consent,
      medical_guardian_name: medical_guardian_name,
    }
  end

  def validate_page
    if is_draft
      attributes_hash = {
        1 => attributes_one,
        2 => attributes_two,
        3 => attributes_three,
      }
      current_attributes = attributes_hash[current_page]
      validator = StudentValidator.new(current_attributes, current_page)
      validator.valid?
      response = validator.errors.to_hash
      response.each do |attribute, messages|
        messages.each do |message|
          self.errors.add(attribute, message)
        end
      end
    end
  end

end

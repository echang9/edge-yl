# == Schema Information
#
# Table name: students
#
#  id                            :integer          not null, primary key
#  address_city                  :string           not null
#  address_one                   :string           not null
#  address_state                 :string           not null
#  address_two                   :string           default(""), not null
#  address_zip                   :string           not null
#  allergies                     :integer          not null
#  allergies_other               :string           default(""), not null
#  birthday                      :date             not null
#  cell_phone                    :string           not null
#  is_checked_in                 :boolean          default(FALSE), not null
#  dietary_restrictions          :string           not null
#  email                         :string           not null
#  emergency_consent             :integer          not null
#  exercise_limitations          :string           not null
#  first_name                    :string           not null
#  gender                        :integer          not null
#  guardian_one_email            :string           not null
#  guardian_one_employer         :string           default(""), not null
#  guardian_one_first_name       :string           not null
#  guardian_one_job_title        :string           default(""), not null
#  guardian_one_last_name        :string           not null
#  guardian_one_phone_number     :string           not null
#  guardian_one_phone_type       :integer          not null
#  guardian_one_relationship     :integer          not null
#  guardian_two_email            :string           default(""), not null
#  guardian_two_employer         :string           default(""), not null
#  guardian_two_first_name       :string           default(""), not null
#  guardian_two_job_title        :string           default(""), not null
#  guardian_two_last_name        :string           default(""), not null
#  guardian_two_phone_number     :string           default(""), not null
#  guardian_two_phone_type       :integer
#  guardian_two_relationship     :integer
#  health_conditions             :string           not null
#  health_conditions_description :string           default(""), not null
#  home_phone                    :string           not null
#  immunizations                 :integer          not null
#  is_flagged                    :boolean          not null
#  is_primary                    :boolean          not null
#  last_name                     :string           not null
#  medications                   :string           not null
#  other_dietary_restrictions    :string           not null
#  preferred_name                :string           default(""), not null
#  psychologist_consent          :integer          not null
#  psychologist_consent_name     :string           not null
#  shirt_size                    :integer          not null
#  submission_id                 :uuid             not null
#  conference_id                 :integer          not null
#  group_id                      :integer
#  room_id                       :integer
#  school_id                     :integer
#  created_at                    :datetime         not null
#  updated_at                    :datetime         not null
#

require 'rails_helper'

RSpec.describe Student, type: :model do
  it 'is invalid without a first_name' do
    factory = FactoryGirl.build(:student, first_name: nil)
    expect(factory).to be_invalid
  end

  it 'is invalid without a last_name' do
    factory = FactoryGirl.build(:student, last_name: nil)
    expect(factory).to be_invalid
  end
end

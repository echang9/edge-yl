# == Schema Information
#
# Table name: rooms
#
#  id            :integer          not null, primary key
#  building      :string           not null
#  capacity      :integer          not null
#  gender        :integer          not null
#  number        :string           not null
#  style         :integer          not null
#  conference_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

FactoryGirl.define do
  factory :room do
    building          { "#{Faker::Lorem.word} building" }
    capacity          { 50 }
    gender            { EnumConstants::BINARY_GENDERS.sample }
    sequence(:number) { |n| n.to_s }
  end
end

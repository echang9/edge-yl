# == Schema Information
#
# Table name: schools
#
#  id            :integer          not null, primary key
#  address_city  :string           not null
#  address_one   :string           not null
#  address_state :string           not null
#  address_two   :string           default(""), not null
#  address_zip   :string           not null
#  name          :string           not null
#  website       :string           default(""), not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'rails_helper'

RSpec.describe School, type: :model do
  it 'is invalid without an address_one' do
    factory = FactoryGirl.build(:school, address_one: nil)
    expect(factory).to be_invalid
  end

  it 'is invalid without a name' do
    factory = FactoryGirl.build(:school, name: nil)
    expect(factory).to be_invalid
  end
end

# == Schema Information
#
# Table name: conferences
#
#  id         :integer          not null, primary key
#  end_date   :date             not null
#  location   :string           not null
#  name       :string           not null
#  start_date :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Conference, type: :model do
end

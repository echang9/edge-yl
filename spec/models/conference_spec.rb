# == Schema Information
#
# Table name: conferences
#
#  id         :integer          not null, primary key
#  end_data   :date             not null
#  location   :string           not null
#  start_date :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Conference, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
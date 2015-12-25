# == Schema Information
#
# Table name: groups
#
#  id               :integer          not null, primary key
#  name             :string           not null
#  primary_leader   :string           not null
#  secondary_leader :string           not null
#  conference_id    :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Group < ActiveRecord::Base

  belongs_to :conference

  has_many :students

end

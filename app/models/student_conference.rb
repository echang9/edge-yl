# == Schema Information
#
# Table name: student_conferences
#
#  id            :integer          not null, primary key
#  status        :integer          not null
#  conference_id :integer
#  student_id    :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class StudentConference < ActiveRecord::Base

  # TODO(Warren): Figure out enum possibilites.
  enum status: [:attending, :pending]

  belongs_to :conference
  belongs_to :school

end
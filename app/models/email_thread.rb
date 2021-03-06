# == Schema Information
#
# Table name: email_threads
#
#  id             :integer          not null, primary key
#  subject        :string           not null
#  emailable_id   :integer
#  emailable_type :string
#  user_id        :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class EmailThread < ActiveRecord::Base

  default_scope { order('updated_at DESC') }

  belongs_to :emailable, polymorphic: true
  belongs_to :user

  has_many :emails, dependent: :destroy

  def content
    emails.first.content
  end

  def emailable_name
    emails.first.emailable_name
  end

  def emails_count
    emails.count
  end

  def is_unread
    emails.where(is_unread: :true).count > 0
  end

  def mark_as_read
    thread_emails = Email.where(email_thread: self, is_sent: :true)
    thread_emails.each do |email|
      if email[:is_unread]
        email[:is_unread] = false
        email.save
      end
    end
  end

end

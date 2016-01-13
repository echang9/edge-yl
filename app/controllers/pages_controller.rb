class PagesController < BaseController

  before_filter :poll_authentication, only: [:login, :signup]
  skip_before_filter :authenticate_user, only: [:login, :signup]

  def login
  end

  def profile
  end

  def signup
  end

  def feedback
  end

  private

  def poll_authentication
    if user_signed_in?
      redirect_to students_path
    end
  end

end

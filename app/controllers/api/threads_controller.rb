class Api::ThreadsController < Api::BaseController

  skip_before_action :authenticate_user, only: [:create]

  def create
    custom_params = ActionController::Parameters.new(
      content: params['body-plain'],
      from: params[:from],
      is_sent: true,
      recipient: params[:recipient],
      sender: params[:sender],
      to: params[:to],
      subject: params[:subject],
    )
    email = Email.new email_params(custom_params)
    if params.key?('stripped-text')
      email.content = "#{params['stripped-text']}\n#{params['stripped-signature']}"
    end

    if email.save
      email.try_send_notification_email
      render json: { message: 'Received' }, status: :ok
    else
      unprocessable_response email
    end
  end

  def destroy
    thread = EmailThread.find params[:id]
    if thread.destroy
      render json: thread, serializer: EmailThreadBaseSerializer
    else
      unprocessable_response thread
    end
  end

  def index
    threads = current_user.email_threads.page params[:page]
    render json: threads,
           serializer: PaginatedSerializer,
           each_serializer: EmailThreadIndexSerializer
  end

  def show
    thread = EmailThread.find params[:id]
    thread.mark_as_read
    render json: thread, serializer: EmailThreadShowSerializer
  end

  private

  def email_params(params)
    params.permit(
      :content,
      :from,
      :is_sent,
      :recipient,
      :sender,
      :subject,
      :to,
    )
  end

end

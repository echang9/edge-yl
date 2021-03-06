class Api::FormsController < Api::BaseController

  skip_before_action :authenticate_user, only: [:show]

  def show
    form = Form.includes(pages: :questions)
               .find_by target: Form.targets[params[:target]]
    render json: form, serializer: FormShowSerializer
  end

end

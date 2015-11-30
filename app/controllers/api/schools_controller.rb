class Api::SchoolsController < Api::BaseController

  def create
    school = School.new school_params
    render json: student, serializer: SchoolBaseSerializer
  end

  def index
    schools = School.page params[:page]
    render json: schools,
                 serializer: PaginatedSerializer,
                 each_serializer: SchoolIndexSerializer
  end

  def show
    school = School.find params[:id]
    current_user.create_visit('School', params[:id].to_i)
    render json: school, serializer: SchoolShowSerializer
  end

  def update
    school = School.find params[:id]
    if school.update_attributes school_params
      render json: school, serializer: SchoolShowSerializer, status: 201
    else
      unprocessable_response school
    end
  end

  private

  def school_params
    params.require(:school).permit(
      :address,
      :counselor_email,
      :counselor_name,
      :name,
    )
  end

end

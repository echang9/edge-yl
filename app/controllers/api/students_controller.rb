class Api::StudentsController < Api::BaseController

  def create
    student = Student.new student_params
    render json: student, serializer: StudentBaseSerializer
  end

  def index
    puts params[:page]
    students = Student.includes(:school).page params[:page]
    render json: students,
                 serializer: PaginatedSerializer,
                 each_serializer: StudentIndexSerializer
  end

  def show
    student = Student.includes(:school).find params[:id]
    render json: student, serializer: StudentShowSerializer
  end

  def update
    student = Student.find params[:id]
    if student.update_attributes student_params
      render json: student, serializer: StudentIndexSerializer, status: 201
    else
      unprocessable_response student
    end
  end

  private

  def student_params
    params.require(:student).permit(
      :birthday,
      :cell_phone,
      :email,
      :first_name,
      :home_address,
      :home_phone,
      :last_name,
    )
  end

end

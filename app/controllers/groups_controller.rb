class GroupsController < BaseController

  def index
  end

  def show
    @id = params[:id].to_i
  end

end
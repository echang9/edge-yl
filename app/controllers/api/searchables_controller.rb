class Api::SearchablesController < Api::BaseController

  def search
    searchables = PgSearch.multisearch(params[:query]).page(1)
    render json: searchables,
                 serializer: PaginatedSerializer,
                 each_serializer: SearchableBaseSerializer
  end

end
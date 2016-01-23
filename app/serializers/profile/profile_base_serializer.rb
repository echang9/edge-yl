class ProfileBaseSerializer < BaseSerializer

  attributes :id, :email, :first_name, :full_name,
             :has_sidebar, :is_admin, :last_name

  has_many :visits, serializer: VisitBaseSerializer

  def visits
    object.visits.first(4)
  end

end
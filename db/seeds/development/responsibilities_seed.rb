Conference.all.each do |conference|
  School.all.each do |school|
    Responsibility.new(
      conference: conference,
      school: school,
    )
    puts "Created responsibility for #{school.name} for conference #{conference.name}."
  end
end
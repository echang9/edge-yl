conference = Conference.first

(1..25).each do |index|
  new_room = Room.create(
    conference: conference,
    number: index,
  )
  puts "Created room #{new_room.number} for conference #{conference.name}"
end
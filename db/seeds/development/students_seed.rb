(1..50).each do |index|
  new_student = Student.create!(
    address_city: "#{Faker::Address.city}",
    address_one: "#{Faker::Address.street_address}",
    address_state: "#{Faker::Address.state}",
    address_two: "#{Faker::Address.street_address}",
    address_zip: "#{Faker::Address.zip}",
    birthday: Faker::Date.between(33.days.ago, Date.today),
    cell_phone: Faker::PhoneNumber.phone_number,
    email: Faker::Internet.email,
    first_name: Faker::Name.first_name,
    gender: rand(3),
    guardian_email: Faker::Internet.email,
    guardian_employer: Faker::Name.name,
    guardian_first_name: Faker::Name.first_name,
    guardian_job_title: 'Software Engineer',
    guardian_last_name: Faker::Name.last_name,
    guardian_phone_number: Faker::PhoneNumber.phone_number,
    guardian_phone_type: rand(3),
    guardian_relationship: rand(9),
    home_phone: Faker::PhoneNumber.phone_number,
    is_flagged: true,
    is_primary: true,
    last_name: Faker::Name.last_name,
    preferred_name: '',
    registration_status: rand(3),
    school_id: index,
    shirt_size: rand(5),
  )
  puts "Created student: #{new_student.name}"
end

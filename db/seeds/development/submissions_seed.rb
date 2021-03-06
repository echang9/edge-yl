school_submission = SchoolSubmission.create(
  address_city: Faker::Address.city,
  address_one: Faker::Address.street_address,
  address_state: EnumConstants::STATES.sample,
  address_two: Faker::Address.street_address,
  address_zip: Faker::Address.zip,
  alternate_address_city: Faker::Address.city,
  alternate_address_one: Faker::Address.street_address,
  alternate_address_state: EnumConstants::STATES.sample,
  alternate_address_two: Faker::Address.street_address,
  alternate_address_zip: Faker::Address.zip,
  alternate_birthday: Faker::Date.between(33.days.ago, Time.zone.today),
  alternate_cell_phone: Faker::Base.numerify('###-###-####'),
  alternate_email: Faker::Internet.email,
  alternate_first_name: Faker::Name.first_name,
  alternate_gender: EnumConstants::GENDERS.sample,
  alternate_guardian_first_name: Faker::Name.first_name,
  alternate_guardian_email: Faker::Internet.email,
  alternate_guardian_last_name: Faker::Name.last_name,
  alternate_guardian_phone_number: Faker::Base.numerify('###-###-####'),
  alternate_guardian_phone_type: EnumConstants::PHONE_TYPES.sample,
  alternate_guardian_relationship: EnumConstants::GUARDIAN_RELATIONSHIPS.sample,
  alternate_home_phone: Faker::Base.numerify('###-###-####'),
  alternate_last_name: Faker::Name.last_name,
  alternate_shirt_size: EnumConstants::SHIRT_SIZES.sample,
  conference_id: Conference.active.first.id,
  contact_email: Faker::Internet.email,
  contact_first_name: Faker::Name.first_name,
  contact_last_name: Faker::Name.last_name,
  contact_phone_number: Faker::Base.numerify('###-###-####'),
  contact_title: 'Principal',
  current_page: 4,
  has_alternate_student: EnumConstants::BOOLEANS[0],
  name: "#{Faker::Name.first_name} High School",
  primary_address_city: Faker::Address.city,
  primary_address_one: Faker::Address.street_address,
  primary_address_state: EnumConstants::STATES.sample,
  primary_address_two: Faker::Address.street_address,
  primary_address_zip: Faker::Address.zip,
  primary_birthday: Faker::Date.between(33.days.ago, Time.zone.today),
  primary_cell_phone: Faker::Base.numerify('###-###-####'),
  primary_email: Faker::Internet.email,
  primary_first_name: Faker::Name.first_name,
  primary_gender: EnumConstants::GENDERS.sample,
  primary_guardian_first_name: Faker::Name.first_name,
  primary_guardian_email: Faker::Internet.email,
  primary_guardian_last_name: Faker::Name.last_name,
  primary_guardian_phone_number: Faker::Base.numerify('###-###-####'),
  primary_guardian_phone_type: EnumConstants::PHONE_TYPES.sample,
  primary_guardian_relationship: EnumConstants::GUARDIAN_RELATIONSHIPS.sample,
  primary_home_phone: Faker::Base.numerify('###-###-####'),
  primary_last_name: Faker::Name.last_name,
  primary_shirt_size: EnumConstants::SHIRT_SIZES.sample,
  website: Faker::Internet.url('schoolweb.com'),
)
puts "Created school submission #{school_submission.id}."

new_admin = User.new(
  email: 'registration@support.edgeyl.org',
  first_name: 'Registration',
  is_admin: true,
  last_name: 'Admin',
  password: 'password',
  password_confirmation: 'password',
)
new_admin.skip_confirmation!
new_admin.save
puts "Created admin #{new_admin.full_name}"

if Rails.env.development? || Rails.env.staging?
  (1..3).each do
    new_user = User.new(
      email: Faker::Internet.email,
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      password: 'password',
      password_confirmation: 'password',
    )
    new_user.skip_confirmation!
    new_user.save
    puts "Created user #{new_user.full_name}."
  end
end

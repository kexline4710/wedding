FactoryGirl.define do
  factory :attendee do
    first_name { "Test" }
    last_name { "Name" }
    email { "test@email.com" }
    full_address { "123 Fake St, Chicago IL 60654" }
  end
end

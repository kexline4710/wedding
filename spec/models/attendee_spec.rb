require 'rails_helper'

RSpec.describe Attendee, type: :model do
  describe "#full_name" do
    let(:attendee) { FactoryGirl.create(:attendee) }

    it "returns the full name" do
      expect(attendee.full_name).to eq("Test Name")
    end
  end
end

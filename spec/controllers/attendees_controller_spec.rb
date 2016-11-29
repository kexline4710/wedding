require 'rails_helper'

RSpec.describe AttendeesController, type: :controller do
  describe "#show" do
    let(:attendee) { FactoryGirl.create(:attendee) }

    it "is successful" do
      get :show, id: attendee
      expect(response.status).to eq(200)
    end
  end
end

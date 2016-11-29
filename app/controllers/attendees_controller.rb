class AttendeesController < ApplicationController
  before_action :find_attendee, only: [:edit, :show, :update]

  def index
    @attendees = Attendee.all
  end

  def new
    @attendee = Attendee.new
  end

  def create
    @attendee = Attendee.create(attendee_params)

    redirect_to @attendee
  end

  def edit
  end

  def update
    @attendee.update(attendee_params)

    redirect_to @attendee
  end

  def show
  end

  private

  def attendee_params
    params.require(:attendee).permit(:first_name, :last_name, :email, :full_address)
  end

  def find_attendee
    @attendee = Attendee.find_by_id(params[:id])
  end

end

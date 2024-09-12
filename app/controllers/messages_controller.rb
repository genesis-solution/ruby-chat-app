class MessagesController < ApplicationController
  before_action :authenticate_user!

  def index
    @messages = Room.find(params[:room_id]).messages
    render json: @messages
  end

  def create
    @message = current_user.messages.build(message_params)
    @message.room_id = params[:room_id]

    if @message.save
      render json: @message, status: :created
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end
end

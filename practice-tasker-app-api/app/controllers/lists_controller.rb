class ListsController < ApplicationController

  def index
    lists = List.all
    render json: lists
  end

  def create
    new_list = List.create(list_params)
    render json: new_list
  end

  def update
    list = List.find(params[:id])
    list.update(list_params)
    render json: list
  end

  private

  def list_params
    params.require(:list).permit(:description, :completed, :card_id)
  end

end

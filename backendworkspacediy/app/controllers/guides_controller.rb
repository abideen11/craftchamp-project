class GuidesController < ApplicationController
    skip_before_action :check_authentication
    def index
        @guides = Guide.all
        render json: @guides, only: [:id, :title, :category, :img_url]
    end
    def show
        @guides = Guide.find(params[:id])
        render json: @guides, only: [:id, :title, :category, :img_url]
    end
end

class GuidesController < ApplicationController
    def index
        @guides = Guide.all
        render json: @guides, only: [:id, :title, :category, :img_url]
    end
    def show
        @guides = Guide.find(params[:id])
        render json: @guides, only: [:id, :title, :category, :img_url]
    end
end

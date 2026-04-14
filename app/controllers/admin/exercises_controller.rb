module Admin
  class ExercisesController < ApplicationController
    before_action :require_admin!

    def index
      @exercises = Exercise.all
    end
  end
end

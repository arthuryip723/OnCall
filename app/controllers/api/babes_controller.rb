class Api::BabesController < ApplicationController
    def index
        @babes = Babe.all
    end
end

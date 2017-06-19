class UsersController < ApplicationController
  def search
    github = Octokit::Client.new(:login => 'monzelb', :password => ENV['github_key'])

    @query = params[:query]
    @followers = github.followers("#{@query}")

    # @user = github.user("#{@query}")
    if @query 
      @user = github.user("#{@query}")
      p @user
      respond_to do |format|
        format.js 
        format.html 
      end
    end
  end
end

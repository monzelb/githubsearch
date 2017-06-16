class UsersController < ApplicationController
  def search
    github = Github.new basic_auth: 'monzelb:2d9cf995f8fa651a34926fc81ceeaa8a3714a246'
    @query = params[:query]
    followers = github.users.followers.list "#{@query}"
    p followers
    render :search
    respond_to do |format|
      format.js {}
      format.html {redirect_to search_url}
    end

  end
end

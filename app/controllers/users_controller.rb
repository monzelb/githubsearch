class UsersController < ApplicationController
  def search
    github = Github.new basic_auth: "monzelb:#{Rails.application.secrets.github_key}"
    @query = params[:query]
    @followers = github.users.followers.list "#{@query}"
    p @followers

    if @query
      respond_to do |format|
        format.js {}
        format.html {redirect_to search_url}
      end
    end

  end
end

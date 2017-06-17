class UsersController < ApplicationController
  def search
    # github = Github.new basic_auth: "monzelb:#{Rails.application.secrets.github_key}"
    github = Octokit::Client.new(:login => 'monzelb', :password => "#{Rails.application.secrets.github_key}")
    @query = params[:query]
    @followers = github.followers("#{@query}")
    @blah = "blah"
    gon.blah = @blah
    # @followers = client.users.followers.list "#{@query}"
    if @query
      respond_to do |format|
        format.js {}
        format.html {redirect_to search_url}
      end
    end
  end
end

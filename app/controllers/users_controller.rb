class UsersController < ApplicationController
  def search
    github = Octokit::Client.new(:login => 'monzelb', :password => ENV['github_key'])
    @query = params[:query]
    gon.query = @query
    @followers = github.followers("#{@query}")
    gon.watch.followers = @followers
    @blah = "blah"
    gon.blah = @blah
    if @query
      respond_to do |format|
        format.js { render "search", :locals => {:query => @query} }
        format.html 
      end
    end
  end
end

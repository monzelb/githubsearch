# Github User Search

This is a project I created based on this prompt: 

* Create a service that allows for a user to search for a GitHub username. On a successful search return, display the user's GitHub handle, follower count, and a list of the user's followers (just the avatar is fine). Since some users (e.g. gaearon, holman, etc.) have many thousands of followers, GitHub only returns a portion of the followers with each request. Create a "load more" button that, when clicked, fetches the next payload of followers. This button should persist until there are no more pages of followers to fetch.

Technologies used:

* Ruby on Rails

* Javascript/Jquery

* HTML/CSS

* Heroku

* Octokit

Resources consulted:

* http://blog.teamtreehouse.com/code-a-simple-github-api-webapp-using-jquery-ajax

* https://codepen.io/elmahdim/pen/sGkvH

* Stack Overflow

I chose to build this app in Ruby on Rails, a framework I have used often, but not for a single page app without additional frameworks. Figuring out how to display new results without refreshing the page was a particularly interesting challenge. This was the first time I had used a js.erb file to combine Ruby and Javascript code. I used the Octokit gem to access Github's API, which simplified things. Many of the folders in this repo were obviously generated by Rails. All of the code in application.js, application.html.erb, search.js.erb, and users_controller.rb was written by me (with snippets borrowed from resources mentioned above).  While using a front-end framework such as Angular may have produced cleaner code, I generally prefer to go without frameworks when possible, and this was a nice opportunity to go minimal. I didn't have time to build it so that all of a users followers get pulled down, but just the first thirty. If I had time to architect it differently, I would probably do a seperate Ajax call for each payload of followers, instead of one call for all of them and then hiding/showing them. 

If time had not been an issue, I would have included:

* Testing 

* Error handling

* Better responsiveness

* A Links from followers' avatars to their own list of followers, and links to their Github pages.

Links

* The app! - https://secure-lowlands-82773.herokuapp.com/

* My portfolio - https://www.brettmonzel.com

* My github page - https://www.github.com/monzelb


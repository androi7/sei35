class MoviesController < ApplicationController
  @@api_key = '24d863d54c86392e6e1df55b9a328755'
  $query_to_go_back = ""

  def form
  end

  def search

    @query = params[:title]
    url = "https://api.themoviedb.org/3/search/movie?api_key=#{@@api_key}&query=#{@query}"
    $query_to_go_back = @query
    response = HTTParty.get url
    @titles = response['results']


    # binding.pry
  end

  def movie_info
    url = "https://api.themoviedb.org/3/movie/#{params[:id]}?api_key=#{@@api_key}"
    @response = HTTParty.get url

    url = "https://api.themoviedb.org/3/movie/#{params[:id]}/videos?api_key=#{@@api_key}"
    @video = HTTParty.get url

    if @video['results'].empty?
      @video = false
    end

    @query_to_go_back = $query_to_go_back
  end

end

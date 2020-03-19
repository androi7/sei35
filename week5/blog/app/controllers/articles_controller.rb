class ArticlesController < ApplicationController

  http_basic_authenticate_with name: "admin", password: "chicken",
  except: [:index, :show]

  def index
    @articles = Article.all
  end

  def show
    @article = Article.find(params[:id])
  end

  def new
    @article = Article.new
    # The reason why we added @article = Article.new in the ArticlesController is that otherwise @article would be nil in our (new.html.erb) view, and calling @article.errors.any? would throw an error.
  end

  def edit
    @article = Article.find(params[:id])
  end

  def create
    # render plain: params[:article].inspect
    @article = Article.new(article_params)

    if @article.save
      redirect_to @article
    else
      render 'new'  # redirect_to would create a new request
    end
  end

  def update
    @article = Article.find(params[:id])

    if @article.update(article_params) # not necessary to pass all the attributes to update
      redirect_to @article
    else
      render 'edit'
    end
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy

    redirect_to articles_path
  end

  private
    def article_params
      params.require(:article).permit(:title, :text)
    end


end

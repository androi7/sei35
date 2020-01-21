class DashboardController < ApplicationController
  def app
  end

  def dogs_index
    # AJAX version ONLY
    render json: Dog.all
  end

  def dogs_search
    render json: Dog.where(name: params[:query])
  end

  def uptime

    # Run the command and store the output
    @up = `uptime`

    response = {
      command: 'uptime',
      output: @up
    }

    respond_to do |format|
      format.html  # do nothing special, i.e. render the default template
      format.json { render json: response }  # render JSON in response to an AJAX request
    end  # respond_to

  end  # uptime action

end  # controller

class CalculatorController < ApplicationController

  def home
  end

  def show
    @first= params[:first_num].to_f
    @second = params[:second_num].to_f
    @operator = params[:operator]

    # @result = case params[:operator]
    # when '*'
    #   num1 * num2
    # when '/'
    #   num1.to_f / num2
    # when '+'
    #   num1 + num2
    # when '-'
    #   num1 - num2
    # when '**'
    #   num1**num2
    # when '%'
    #   num1 % num2
    # else
    #   'error'
    # end

    @result = @first.send(@operator, @second)


  end

end

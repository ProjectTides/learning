defmodule BeerSong do
  @doc """
  Get a single verse of the beer song
  """
  @spec verse(integer) :: String.t()
  def verse(number)  do
    # Your implementation here...
    cond do
      number == 1 ->"""
      1 bottle of beer on the wall, 1 bottle of beer.
      Take it down and pass it around, no more bottles of beer on the wall.
      """

      true ->"""
      #{number} #{if (number) > 1, do: "bottles", else: "bottle"} of beer on the wall, #{number} #{if (number) > 1, do: "bottles", else: "bottle"} of beer.
      Take #{if (number) > 1, do: "one", else: "it"} down and pass it around, #{number-1} #{if (number-1) > 1, do: "bottles", else: "bottle"} of beer on the wall.
      """
    end
    
  end

  def verse(number) when number = 0 do
    # Your implementation here...
"""
        No more bottles of beer on the wall, no more bottles of beer.
        Go to the store and buy some more, 99 bottles of beer on the wall.
        """ 
  end
  

  @doc """
  Get the entire beer song for a given range of numbers of bottles.
  """
  @spec lyrics(Range.t()) :: String.t()
  def lyrics(range \\ 1..99) do
    # Your implementation here...
    Enum.reduce(range, 0, fn i , acc -> 
      if(acc == 0) do
       acc = verse(i)
      else
       acc = "#{acc}\n#{verse(i)}"
      end
      #i * i + acc 
    end)
    
  end

  # def lyrics() do
  #   # Your implementation here...
  #   range = 99..0
  #   Enum.reduce(range, 0, fn i , acc -> 
  #     if(acc == 0) do
  #      acc = verse(i)
  #     else
  #      acc = "#{acc}\n#{verse(i)}"
  #     end
  #     #i * i + acc 
  #   end)
    
  # end

end

defmodule RomanNumerals do
  @doc """
  Convert the number to a roman number.
  """
  @spec numeral(pos_integer) :: String.t()
  def numeral(number) do
    normalNumToRoman =  %{ 1 => "I",4 => "IV",5 => "V",9 => "IX",10 => "X",40 => "XL",50 => "L",90 => "XC",100 => "C",400 => "CD",500 => "D",900 => "CM",1000 => "M"}
    numberSystem =  [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    convertToRoman(number, numberSystem, normalNumToRoman, "H");
  end

  defp convertToRoman(0, list , normalNumToRoman, romanNumber) do 
   IO.puts "#{romanNumber}"
    romanNumber
  end

  defp convertToRoman(number, [] , normalNumToRoman, romanNumber) do 
    IO.puts "#{romanNumber}"
    romanNumber
  end

  defp convertToRoman(number, [head | tail], normalNumToRoman, romanNumber) do
    # convertToRoman(number, tail, normalNumToRoman, romanNumber)
      IO.puts "#{head}, #{number}"
    if(number > head) do
      newRomanNumber = romanNumber <> normalNumToRoman[head]
      IO.puts "New #{head}, #{number}, #{newRomanNumber}"
      convertToRoman(number - head, [head | tail], normalNumToRoman, newRomanNumber )
    else
      convertToRoman(number, tail, normalNumToRoman, romanNumber)
    end

    # "I"

      # cond do
      #   (number > head) -> 
      #     newRomanNumber = romanNumber <> normalNumToRoman[head]
      #     convertToRoman(number - head, [head | tail], normalNumToRoman, romanNumber )

      #   true -> convertToRoman(number, tail, normalNumToRoman, romanNumber)
      # end
  end
  
end


printLog = fn text -> IO.puts "printing the #{text} \n ............ " end


# printLog.(String.match?("4?", ~r/\d/))
printLog.(String.replace("4sss?", ~r/^[a-z]/, ""))
printLog.(String.replace("1,2,3, cfu/ml", ~r/[\p{L}{,}, {\/}]/, ""))
# RomanNumerals.numeral(27)



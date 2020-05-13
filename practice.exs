printLog = fn text -> IO.puts "printing the #{text} \n ............ " end

defmodule WordCount do
    @doc """
  Count the number of words in the sentence.

  Words are compared case-insensitively.
  """
    @spec count(String.t()) :: map
    def count(sentence) do
      wordList = String.split(sentence, " ")
        countWord(wordList, %{})
    end

    defp countWord([head | tail], map) do
        if(map[head] == nil) do
            countWord(tail, Map.put(map, head, 1)) 
        else
            countWord(tail, %{map | head => (map[head] + 1)}) 
        end
    end

    defp countWord([], map) do
      byte_size(map)
    end
end

str = String.replace(List.to_string('GC'), ["G", "C"], fn <<char>> 
          -> 
           map = %{"G" => "C", "C" => "G", "T" => "A", "A" => "U"}
           map[<<char>>] 
      end)

printLog.(str)



# printLog = fn text -> IO.puts "printing the #{text} \n ............ " end

#str = String.replace('G', ['G'], fn [head | _tail] -> [head + 1] end)

# printLog.(String.to_charlist("G"))

# list =  List.replace_at('G', 0, 0)
# ll = List.to_string('G')

# printLog.(ll)
# IO.inspect(list, charlists: :as_lists)
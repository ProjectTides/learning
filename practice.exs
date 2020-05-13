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

printLog.(WordCount.count("Hello world Hello"))
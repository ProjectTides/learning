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
     
      countWord(tail, Map.update(map, head, 1, &(&1 + 1))) 
        
        # if(map[head] == nil) do
        #     countWord(tail, Map.update(map, head, 1, )) 
        # else
           
        # end
    end

  
    defp countWord([], map) do
      map
    end

end


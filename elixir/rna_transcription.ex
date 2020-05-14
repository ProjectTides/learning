defmodule RnaTranscription do
  @doc """
  Transcribes a character list representing DNA nucleotides to RNA

  ## Examples

  iex> RnaTranscription.to_rna('ACTG')
  'UGAC'
  """
  @spec to_rna([char]) :: [char]
  def to_rna(dna) do
    str = String.replace(List.to_string(dna), ["G", "C", "T", "A"], fn <<char>> 
          -> 
           map = %{"G" => "C", "C" => "G", "T" => "A", "A" => "U"}
           map[<<char>>] 
      end)

    String.to_charlist(str)
  end
end

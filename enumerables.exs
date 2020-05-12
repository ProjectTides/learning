Enum.map([1, 2, 3], fn x -> x * 2 end)
Enum.map(%{1 => 2, 3 => 4}, fn {k, v} -> k * v end)


1..100_000 |> Enum.map(&(&1 * 3)) |> Enum.filter(odd?) |> Enum.sum

Enum.sum(Enum.filter(Enum.map(1..100_000, &(&1 * 3)), odd?))
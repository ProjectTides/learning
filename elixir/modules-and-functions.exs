printLog = fn text -> IO.puts "printing the #{text} \n ............ " end

defmodule Math do
  def sum(a, b) do
    do_sum(a, b)
  end

  defp do_sum(a, b) do
    a + b
  end
end

printLog.(Math.sum(1, 2))


defmodule DefaultTest do
  def dowork(x \\ "hello") do
    x
  end
end

printLog.(DefaultTest.dowork)
printLog.(DefaultTest.dowork 123)


defmodule Concat do
  def join(a, b \\ nil, sep \\ " ")

  def join(a, b, _sep) when is_nil(b) do
    a
  end

  def join(a, b, sep) do
    a <> sep <> b
  end
end

printLog.(Concat.join("Hello", "world"))   
printLog.(Concat.join("Hello", "world", "_"))
printLog.(Concat.join("Hello"))



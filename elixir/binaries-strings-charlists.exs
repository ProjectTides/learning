printLog = fn text -> IO.puts "printing the #{text} \n ............ " end

printLog.(?a)
printLog.(?ł)


#keyword list
list = [{:a, 1}, {:b, 2}]
printLog.(list == [a: 1, b: 2])
printLog.(new_list[:a])

#MAps
map = %{:a => 1, 2 => :b}
printLog.(map[:a])
printLog.(map[2])
printLog.(map[:c])

#NestTed Maps
users = [
  john: %{name: "John", age: 27, languages: ["Erlang", "Ruby", "Elixir"]},
  mary: %{name: "Mary", age: 29, languages: ["Elixir", "F#", "Clojure"]}
]

printLog.(users[:john].age)


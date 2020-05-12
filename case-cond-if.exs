printLog = fn text -> IO.puts "printing the #{text} \n ............ " end

case {1, 2, 3} do
     {4, 5, 6} ->  printLog.("Value does not match")
     {1, x, 3} when x > 4 -> printLog.("Value with clause")
     {x, y, z} ->  
        printLog.("All value matched") 
        printLog.(x) 
        printLog.(y)
        printLog.(z)
     {1, x, 3} -> printLog.(x)
     _ -> printLog.("Nothing matched")
end

# Condition same a case but does not needes to compare with single object

cond do
    2.4 + 2 == 5 -> printLog.("This will not be true")
    2 * 2 == 3 -> printLog.("Nor this")
    true -> printLog.("But this will")
end



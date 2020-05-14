printLog = fn text -> IO.puts "printing the #{text} \n ............ " end
# Elixir provides all the basic operations we can think. 

list = ["1", "2", "3"]
iTemToBeremoved = ["2"]
printLog.(list ++ iTemToBeremoved)
printLog.(list -- iTemToBeremoved)


# or, and and not are only accpet the boolean values or functions
# printLog.(false or is_atom(:example))  will return true
# printLog.("true" or is_atom(:example)) will return error

# Elixir also provides ||, && and ! which accept arguments of any type. For these operators, all values except false and nil will evaluate to true:
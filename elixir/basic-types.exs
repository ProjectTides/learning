# Simple Math helpers
sum = 2+4
IO.puts "Sum of 2 + 4 is #{sum}"

# Simple contants, it has same as there value
IO.puts "#{:atom}"

# check variable type
isType =  is_atom(:Hello)
isInteger =  is_integer(2)
isBoolean =  is_boolean(true)
IO.puts "#{isType} , #{isInteger}, #{isBoolean} "


#Strings
lineBreaks = "hello\nworld"
IO.puts "#{lineBreaks}"

# String length
length =  String.length("hellö")
IO.puts "Length #{length}"



# Anonymous functions 
add = fn a, b -> a + b end
IO.puts "is function decleared add #{is_function(add)}"
IO.puts "calling a function #{add.(3,2)}"

printLog = fn text -> IO.puts "printing the #{text} \n ............ " end
IO.puts "is function decleared printTheBar #{is_function(printLog)}"
printLog.("Called this function")

functionWithoutArg = fn -> IO.puts "calling the function without argument" end
IO.puts "is function decleared functionWithoutArg #{is_function(functionWithoutArg)}"
functionWithoutArg.()




# (Linked) Lists
list = ["First element", "Second Element", "third element"] #It will only print the sting elements 
printLog.(list)
printLog.(length list)  #Check the length

printLog.(hd(list))   #pick head element
printLog.(tl(list))   #pick tail element
printLog.([ "Append "  | list] ++ [" Prepend"])   #pick tail element


# Touples
tuple = {:ok, "hello"}
printLog.(elem(tuple, 0))
printLog.(tuple_size(tuple)) #check the size
printLog.(put_elem(tuple, 1, "world")) #append an item
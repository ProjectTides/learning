printLog = fn text -> IO.puts "printing the #{text} \n ............ " end

# Match operator (=)

# Used for simple matching
isMetached =  x=1
# 1=x Return 1 becuase both values are same

# Used for destructuring
{a, b, c, d} = {:hello, "world", 42, 3.2}
printLog.(a)
printLog.(b)
printLog.(c)
printLog.(d)

[head | tail] = [1, 2, 3]

printLog.(head)

# Pin operator (^) Value can not be changed after first assignment
x= 1
printLog.(x=1)

x= 1
printLog.(^x=1)

# printLog.(^x=2) will throw an error 

[^x, 2, 3] = [1, 2, 3]
{y, ^x} = {2, 1}
{y, ^x} = {2, 2}

# can not exceute the function on the left side of matcher
# length([1, [2], 3]) = 3 will give an error
#problem link https://exercism.io/my/solutions/c02d12f43a714acf89fc058f151fe58a

defmodule RobotSimulator do
  defstruct position: {0, 0}, direction: :north
  @right_directions %{:east => :south, :south => :west, :west => :north, :north => :east}
  @left_direction %{:north => :west, :west => :south, :south => :east, :east => :north}
  @adv_movements %{:north => {0, 1}, :east => {1, 0}, :south => {0, -1}, :west => {-1, 0}}
  @validDirections [:north, :east, :south, :west]


  @spec create(direction :: atom, position :: { integer, integer }) :: any
  def create(direction \\ :north, _position \\ {0, 0})

  def create(direction, _position) when direction not in @validDirections do
    { :error, "invalid direction" }
  end


  def create(direction, {x, y}) when is_integer(x) and is_integer(y) do
      %RobotSimulator{direction: direction, position: {x, y}}
  end

  def create(_direction, _position) do
      { :error, "invalid position" }
  end


  @doc """
  Simulate the robot's movement given a string of instructions.

  Valid instructions are: "R" (turn right), "L", (turn left), and "A" (advance)
  """
  @spec simulate(robot :: any, instructions :: String.t ) :: any
  def simulate(robot, instructions) do
    data = String.graphemes(instructions)
    Enum.reduce_while(data, robot, fn 
         ("R", robot) -> {:cont, %{robot | direction: @right_directions[robot.direction] }}
         ("L", robot) -> {:cont, %{robot | direction: @left_direction[robot.direction] }}
         ("A", robot) -> {:cont, %{robot | position: advance_helper(robot) } }
         (_, _) -> {:halt, { :error, "invalid instruction" }}
      end)
  end

  def advance_helper(robot) do 
    {current_x, currect_y} = robot.position
    {advance_x, advance_y} = @adv_movements[robot.direction]
    {current_x + advance_x, currect_y + advance_y}
  end

  @doc """
  Return the robot's direction.

  Valid directions are: `:north`, `:east`, `:south`, `:west`
  """
  @spec direction(robot :: any) :: atom
  def direction(robot) do
    robot.direction
  end

  @doc """
  Return the robot's position.
  """
  @spec position(robot :: any) :: { integer, integer }
  def position(robot) do
    robot.position
  end
end

cmake_minimum_required(VERSION 2.8.3)
project(rostate_machine_viewer)

find_package(catkin REQUIRED COMPONENTS
  rostate_machine
)

catkin_package(
#  INCLUDE_DIRS include
#  LIBRARIES rostate_machine_viewer
  CATKIN_DEPENDS rostate_machine
#  DEPENDS system_lib
)

include_directories(
# include
  ${catkin_INCLUDE_DIRS}
)
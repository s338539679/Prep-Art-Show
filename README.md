# Prep-Art-Show

One of the first things I noticed is that changing the values that are restrictions for "random" in the this.x and this.y parameters inside the update function for the movers, changed the direction that the shapes moved. If there was no bias, (both values are equal distance from 0 (-3,3)) then the shapes would stay in the center, however, if there was any postive or negative bias (ex: -5,9 has a bias of 4) the shapes would move upwards or downwards across the screen. 

With this in mind, while looking at the initial code with some numbers changed, the downward motion of the shapes in the second scene (in the context of a game and our summative) reminded me of an animation of snakes and ladders. So I decided to add another scene before the closing one with the shapes moving upward to simulate the ladder part (this is also why the arrays are named snakes and ladders).

To do this, I made another 3 functions (defining, update and show) for a second mover, and I also added another loop inside the function setup with the second mover in it. Afterwards, I realized that all 6 functions had the same parameters with different values. Those parameters were this.x, this.y (start postition of shapes), the restrictions given to "random" and the shape of the object. So I could refactor the functions for the movers by making a generalmover function and adding those parameters that I could set to diffrenciate between the two movers, this way I would only have 3 functions for two movers (instead of 6). 

Then, I saw that I also did not need two different loops since the second one was just changing a part of the first one. So I refactored that by only making one loop but putting both movers (generalmover with different parameters set) in it. Something that then became frustrating was having to go back and find every loop and change the condition statement in all of them since I did that a few times and sometimes I would forget one and nothing would work. So I created a variable called blobSize (since the number of shapes makes a smaller or bigger blob on the screen) that stores that value from the loop in that variable. Doing this refactoring helped create a program that was a bit more human-error proof since I could just change the value in one place instead  of having to do it everywhere.

While on the subject of human error, I'm not very good at typing, so I made a few spelling mistakes that also frustrated me. An opportunity (and cool hidden code) I saw while making these dumb mistakes was to add an extra else statement for the shapes in the show function for the movers. This would make sure that if I misspelled the name of a shape while setting parameters for the generalmovers, the program would still work and something interesting would still be shown despite my sub par typing skills.





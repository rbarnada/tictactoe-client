# Tic-Tac-Toe Project

### Technologies used:
- html
- css
- bootstrap
- sass
- javascript
- jquery
- ajax
- atom text editor
- google chrome
- terminal

---

### Planning:
For the planning process, I started out with a rough wireframe and some basic user stories to cover basic functionality for the game. This provided the framework for the project and allowed me to have targeted goals to achieve.

---

### Development Process:
When setting out on the development of the project, I decided it would be best to start with authentication. While the schedule suggested game logic first, I was not feeling great about that and authentication was something we had most recently been working with and was still fresh in my mind. Besides the occasional trailing comma, the auth process went fairly smooth. Near the latter half of day one I finished the basics of auth and began to work on game logic. Game logic as a whole was intimidating and I struggled at the beginning for where to start. I made a visual game board using html and css to help visualize everything as I went. Then I broke game logic down to the smallest possible problem, and assigned each player to variables. To tackle switching, I made an extra variable for current player and started by assigning it to the ‘X’ player. I referenced back to earlier lessons and using modulo and made another variable for the turn and depending on if the number was even or odd, it would switch the player appropriately. When checking for a winner, I struggled because I was trying to find an efficient way to do such. After wasting too much time on that I went with the simplest method and just made a large ‘if’ statement checking to see if any 3 winning combinations all had either ‘x’ or ‘o’ in the appropriate cells. This worked out and allowed me to move forward.

Working in the API for the game was where I struggled the most. I understood how to make the curl script call to the API, but wasn’t sure how to properly implement it. After being hinted to check back to the store variable we used, I was able store the array the API was giving me and then was able to implement that in place of the array I created locally. Updating the API came a bit easier after having figured that out. Given the values the API needed passed to it, i was able to find how to call those values and push them into my ajax request. Lastly, showing the amount of games played was fairly easy having done the previous two calls and I was able to set that up relatively easily.

While working, I tried to stay focused on whatever my current task at hand was. If I noticed an unrelated bug or figured out a better solution to an earlier task, I would write them down in a notebook, then continue on what my current task was. When I finished that task, I would go back through my notes and make updates as necessary. I would also reference the issue queue while working through problems, to see if anyone else had gone through a similar issue and see how they were able to work through it and try to implement similar solutions in my own work.

---

### Unsolved Problems/Future Plans:
Styling has been a constant issues while making the project. Having just been introduced into bootstrap, it's taking me some time learning how to implement it and then how to adapt it to my specific use case.

In the future I would like to work on playing against an AI opponent. When you do not have a friend around to play the game with, the game becomes relatively useless as playing against yourself is pointless. Having an AI opponent would make the games more engaging for single players and offer more value. I would probably try to implement this using some method similar to the AI using math.random to randomly select a position in the array and put a move in there.

Additionally, the functionality for multiplayer on different devices is something I would like to explore, but that is more of a stretch goal.

# Portfolio
This repository aims to act as a portfolio of my progress in web development. 

## Background
I decided not to have a different page for every thing because I can just have it all on one page and hide/unhide it using javascript. 

## Goal
To make a pretty page where things load in and out in a smooth, aesthetically pleasing way. The primary focus is on the coding—I am not great at making color schemes, etc. 

## Issue:
### Jarring transitions
The main issue I have to address is that unhiding elements is currently pretty jarring and makes the page "hop" instead of transitioning smoothly. I also do not have any code for animating when the display is set back to none yet. I will probably just reverse the transition I already have for that.

### Potential solutions:
1. Toggle the display value with a transition on the whole <main> rather than transitioning only each element as it becomes unhidden. 
2. Drop the grid load system I have in place and change the layout
3. Drop the grid load system I have in place and hide all <main> elements other than the one that was just clicked.

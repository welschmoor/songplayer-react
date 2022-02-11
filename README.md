# Music Player with React

![preview image for music player build in React](https://github.com/welschmoor/songplayer-react/blob/main/preview_pictures/1.jpg)

For styling I used:

##### React Styled-Components
##### Ionic Icons


## Issues

The project "broke" all of a sudden. $npm start no longer worked. Even pulling earlier version from GitHub on a different computer
did not solve the issue. What solved the issue was: 

`$ npm update --legacy-peer-deps` 

The Solution was provided here: https://github.com/facebook/create-react-app/issues/2436



It is possible that on MAC the fonts will look different with spacing
looking "off". I used Arial for my font.

I was not able to modify the position of an input placeholder for Firefox. 
Chrome and Edge worked fine, but not Firefox. I selected it with -moz... and
could change it's color, so the css selector worked, but margin, padding, 
transform didn't not move the placeholder text.
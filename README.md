# Robo-Counter

#### Robo-Counter converts a simple number into a long list of numbers, beeps, boops, and "I'm sorry, Dave..."s. August 17, 2018

#### By Josh Gearheart

## Description

Robo-Counter ask the user for a number and returns a "robotic translation" in the guise of a life-saving utility for the robot apocalypse. It counts up to the users number, replacing numbers which include a 0 with "Beep!", numbers which include a 1 with "Boop!", and numbers divisible by 3 with "I'm sorry, Dave. I'm afraid I can't do that."

## Specifications

- [x] Program returns range of integers up to and including user input number
  - Input: 10
  - Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
- [x] Program replaces numbers containing 0 with "Beep!"
  - Input: 404
  - Output: ... 399, Beep!, Beep!, Beep!, Beep!, Beep!
- [x] Program replaces numbers containing 1 with "Boop!"
  - Input: 12
  - Output: ...8, 9, Beep!, Boop!, Boop!
- [x] Program replaces numbers divisible by three with "I'm sorry, Dave. I'm afraid I can't do that."
  - Input: 24
  - Output: ... Boop!, Beep!, Boop!, 22, 23, I'm sorry, Dave. I'm afraid I can't do that.
- [x] Program instructs user to enter a number if the input field contains non-numeric characters.
  - Input: I like pizza.
  - Output: Please enter a number.
- [x] Program instructs user to enter a number if the input field is blank.
  - Input:
  - Output: Please enter a number.
- [x] Program accurately counts and replaces numbers if the user enters a new number without reloading the page.
  - Input (after a number has already been counted and beep-booped): 12
  - Output: ...7, 8, I'm sorry, Dave. I'm afraid I can't do that., Beep!, Boop!, Boop!
****
#### Bonus Specifications (Easter Egg) if There is Extra Time

- [x] Program style changes to **Evil Theme** if the user enters "666"
  - Input: 666
  - Output: Page design fills with pentagrams, goat heads, and creepy font, then asks for a new number in a scary way
- [x] Program style reverts to original if the user enters "666" a second time
  - Input: 666
  - Output: Page design reverts to its default state

## Setup/Installation Requirements

- Navigate to https://github.com/gearjosh/robo-counter
- Click the green `Clone or download` button on the right, and select `Download ZIP`.
- Unzip `robo-counter-master.zip`.
- Navigate to the `robo-counter-master` directory.
- Inside `robo-counter-master` double-click on `index.html`

## Known Bugs

There are no known bugs.

## Support and contact details

If you run into any issues, or have questions, comments, or concerns, you can email me at comedian.sean.connery@gmail.com, though I may not respond right away.

## Technologies Used

This site uses JavaScript, HTML, CSS, and the Bootstrap front-end framework.

### License

**Licensed under GPL**

Copyright (c) 2018 **Josh Gearheart**

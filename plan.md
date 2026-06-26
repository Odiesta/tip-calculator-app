Write a function that capture value of bill, number of people from input field. When user click tip button the tip amount will automatically updated with total also updated. When user click custom, there will be a input field number that user can type how many percent it will give.

Step

Step 1 Calculation logic

- Tip per person = (bill \* tip%) / people
- Total per person = (bill + (bill \* tip%)) / people
- if people = 0, display "Can't be zero"
- if bill is empty default to 0
- if not tip selected tip is 0%

Step 2

- Select DOM elements
- Store state variables
- create calculate() function

Step 3 Handle preset tip button

- Add a click event listener to each tip button
- Add active class to the clicked button
- Update tip percentage and call calculate()

Step 4 Handle custom tip button

- When custom tip button clicked, remove active class from all preset buttons
  - replace button innerHTML with input field number placeholder Custom
  - auto focus to input
- When user type in custom input
  - listen for the input event on the custom input
  - update tipPercentage and call calculate()

Step 5 Reset functionality

- When reset is clicked, clear all input, remove active states, reset custom button to "custom" text, clear result display to 0.00$

Step 6 Validation

- If people is 0 or negative, show error "can't be zero"
- If bill or tip is 0, tip result is $0

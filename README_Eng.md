Assignment description

Introduction
Your friends Freek and Bernard are both seasoned catering professionals, but unfortunately they have lost their jobs due to the global pandemic. Fortunately, Freek and Bernard are not one-size-fits-all, so they started a company together:

Companylogo

You yourself wonder whether it was smart to let Bernard's 9-year-old niece design the logo, but that's besides the point. You're just glad they have something to do. That's why you want to give them a helping hand by creating an online order form for them!

Start application
Once you have cloned the project to your local machine, first install the node_modules by running the following command in the terminal:

npm install

When this is done, you can launch the application using:

npm run dev

or use the WebStorm button (npm run dev). Open http://localhost:5173 to view the page in the browser. Start making changes in src/App.js: every time you save a file, the changes will be reflected on the web page.



Assignment 1 - State

Users get to work putting together their fruit basket themselves. They can choose between four types of fruit, the quantities of which they can determine:

PICTURE

Preconditions for fruit counters
You use React's useState hook to keep track of quantities
Customers have the freedom to choose between four types of fruit:

Bananas 🍌
Strawberries 🍓
Apples 🍏
Kiwis 🥝

Each type of fruit has two buttons: one that increases the quantity (+) and one that decreases the quantity (-).
The amount may not be set lower than 0 by the user!
The quantity of selected fruit types is shown to the user with each update.
There is also a reset button, which resets all counters to 0.



Assignment 2 - Building form

It is of course difficult to order a fruit basket if we don't know where that basket should go. That's why we're going to create an order form:

PICTURE FORM

As you can see, the styling is not important, focus primarily on the functionality. Do you have time to spare? Then take a look at the bonus assignments!

Preconditions form
The form contains the following fields:

~First name
~Last name
~Age
~Postal Code
~Selectbox with delivery frequency. Options: every week, every other week, every month
~Radio buttons with time slot. Options: daytime, evening
~Comment (textarea)
~Agree to the terms and conditions (checkbox)
~Send button

Only when the user presses send will the form values and the fruit values be logged in the console!

Assignment 3 - Create components

Make your own components from elements that you have reused a lot. To achieve this you will have to maintain the state in App.js and pass both values and functions as properties (callback props). Think about:

* The reset and send buttons (they look very similar, right?)
* The - counter + combination
* The label and text input combination
* Keep it up!


Bonus assignments

Make it a beautiful styled page!
Use one composite onChange handler function for all fruits together
And while you're at it, provide the buttons with conditional styling. When a type of fruit has been clicked on once or more, you can give it a colored border, for example!
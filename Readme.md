# Project 1

## Instagram Login page

## Description

This is a simple Instagram clone built using React. The project includes SignUp and SignIn pages that allow users to create a new account or log in to an existing account.

### SignUp
The SignUp component allows users to create a new account by providing their mobile number or email, full name, phone number or username, and password. After filling in the required information, users can click the "Sign up" button to create their account.

### SignIn
The SignIn component allows existing users to log in to their account by providing their mobile number or email and password. After filling in the required information, users can click the "Sign in" button to log in.

### Technologies Used
* React
* React Router
* HTML
* CSS


# Project 2

## Increment Decrement

### Description

IncDec is a simple React component that displays a number and allows users to increment or decrement the number using buttons. It uses the `useState` hook from React to manage the state of the number.


### Usage
The IncDec component displays a number and two buttons: "Increment" and "Decrement." The number is initially set to 0, and clicking the "Increment" button increases the number by 1, while clicking the "Decrement" button decreases the number by 1.

* Props-
   The IncDec component does not require any props.

#### Example
Here's an example of how to use the IncDec component in your React application:

```
import React from 'react';
import IncDec from 'inc-dec';

const App = () => {
  return (
    <div>
      <h1>Increment and Decrement Example</h1>
      <IncDec />
    </div>
  );
};

export default App;
```

### Technologies Used
* React
* JSX
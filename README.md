## Key Creator

### Deployed Link 

[Live URL](https://pbyakod.github.io/key-creator/)

### Short Description
This project develops a webpage designed to generate random passwords, so you dont have to yourself! The password generator creats a string of characters based on various specifications that the user inputs themself, making it unique to every individual. A significant reason for developing this program is because I've never been good at creating unique passwords that are easy to remember before. By using this password generator, I can generate a never-before-seen code which can be easy to remember, sice I inputted my required specifications for the password beforehand. 

### Website Presentation
!["Website GIF"](./assets/gifs/password-generator.gif)

### Process Behind Development

#### 1. Creating prompts

The first task was to generate a prompt that askede for user specifications. These specifications include length of the password, use of lowercase chars, use of uppercase chars, use of numbers, and use of special ASCII characters. Each specification was asked in a different prompt, allowing the user to type in exactly what kinds of characters they want for the password.

#### 2. Defining Arrays

The next step was to compile all of the user request into one constant, so that the generator has a range of characters to select from. For example, if the user asks for a password containing lowercase letters, numbers, and special characters - excluding uppercase letters - then the program creates an array containing all possible lowercase, number, and special characters. This process was completed using multiple arrays and switch statements in the script.js file. 

#### 3. Generating Password

The final step was to create the password, using the array of possible characters. This was done by iterating from 0 to the specified length. Under each iteration, a random number would be generated using the built in Math.random() and Math.floor functions. After the number is selected, the loop maps that number to the index of the character array, and selects the corresponding character. Once the character is selected, the program concats the character to the password string - generating a set of chars known as the password. 

### License 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



# Card Shuffling Application

This is a React-based application that shuffles a deck of cards and presents it to the user.

## Deck of Cards API

This application uses the Deck of Cards API (https://deckofcardsapi.com/) to fetch the cards. The API provides a simple interface to create a new deck of cards.

## Installation

1. Clone the repository
2. Make sure you use node version 18 or above
3. Install the dependencies using `npm install`
4. Create a `.env` file in the root directory and set the `REACT_APP_DECK_OF_CARDS_API` variable to `https://deckofcardsapi.com/api`
5. Start the application using `npm start`
6. Open `http://localhost:3000` to view the application in the browser.

## Folder Structure

- `public`: Contains the public assets of the application
- `src`: Contains the source code of the application
  - `index.js`: Entry point of the application
  - `App.js`: Main component of the application
  - `components`: Contains the components used in the application
- `node_modules`: Contains the dependencies of the application
- `.env`: Environment variables file
- `.gitignore`: Specifies the files and folders that should be ignored by Git
- `package-lock.json` and `package.json`: Manage the dependencies of the application
- `README.md`: This file

## Usage

- The application starts and shows the back of the card.
- When the button `Shuffle Cards` is clicked then the card is shuffled and the first card is displayed
- The next card is shown when the current card is clicked.
- The cards can be shuffled again when clicked on `Shuffle Cards`


## Credits

This application was developed by [Mohammed Khushab Alam].

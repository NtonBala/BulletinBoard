# Bulletin Board

Bulletin Board is a client app providing a board to which a user can add draggable notes, that can be editted and deleted.

## Presentation

Architecture:

Board is a container component. The state: {notes: [{id, note}]} is lifted up to it. Initial state is got in its componentWillMount lifecycle method due to Fetch API. Initial data is retrieved from Bacon Ipsum JSON API.

Note is a presentational component. Initial position of Note element is defined in componentWillMount lifecycle method and React Draggable is used to make the component draggabe. Though Note is a presentatonal component it has local state: {editting: false} that defines if it is a form input or just a view. To protect Note element from rerendering and to optimize app shouldComponentUpdate lifecycle method is used. ComponentDidUpdate lifecycle method is used to give form input focus and give its text select.

Note:

Though ES6 syntax + JSX are more convenient, ES5 and React.createElement are used this time just to get acquainted.

Development Environment:

Create React App npm package is used this time because its simpliest way to start with React.

## Running

Run npm install to install all dependencies.

To launch Bulletin Board app run npm start and open http://localhost:3000/.

## Production Build

To create production build and get the app ready to be deployed run npm run build.

# Remaking the Redux-Tool-kit app

This is a remake of the example that is shown on the redux page.

Link here: [Redux Tool-kit Link](https://redux-toolkit.js.org/introduction/getting-started)

Check out the `src/naito-version` for my own code signature. This includes the original source code as reference. Everything is inside this folder, as this is a very simple app. A bigger app requires a better architecture setup, and I'm aware of that. As mentioned before, this was just an exercise.

This was just an exercise to update my knowledge on redux, but this time using what they call the `Redux-tool-kit` which they mentioned is simpler to use.

## Notes
Like before, a `Store` and `Provider` is needed. You will then proceed to create `"Reduce Slices"`, all your slices will create that `big store / combineReducer`. And you create your actions inside the `slices`, `actions` will then be export from your slice so they can be used outside.

- Async functionality is placed inside a thunk.
- You can use a `React-redux hook` to select what data you want from the store.



## Instructions

```
npm install
npm start

```


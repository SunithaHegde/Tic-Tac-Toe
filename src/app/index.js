import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import {Provider} from "react-redux";
import Board from "./Components/Board.js"
import { render } from "react-dom";

const reducer = (state = {
		isXNextPlayer:true,
		squares: Array(9).fill(null),
	},action) => {
	switch(action.type) {
		case "SET_SQUARE": 
			state = handleState(Object.assign({}, state), action.payload.index);
			/*state = {
				isXNextPlayer: ! state.isXNextPlayer,
				squares: updateSquare(state, action.payload.index)
            };*/
			break;
		default: 
			break;
	}	
	return state;

};

const store = createStore(
	reducer
);

store.subscribe(() => {
	console.log("state updated ", store.getState())
});


function handleState(currentState, index){
	    currentState.squares[index] = currentState.isXNextPlayer ? 'X' : 'O';
		currentState.isXNextPlayer = ! currentState.isXNextPlayer;
		return currentState;
			
}	
render(
    <Provider store={store}>
        <Board />
    </Provider>,
    window.document.getElementById('app'));
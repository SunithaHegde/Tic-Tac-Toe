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
			return handleState(state, action.payload.index);
		default: 
			return state;
	}	
	
};

const store = createStore(
	reducer
);

store.subscribe(() => {
	console.log("state updated ", store.getState())
});

function handleState(currentState, index){
		/*if(squares[index] || this.findWinner()){
			return;	
		}*/
		var newState = currentState;
	    newState.squares[index] = newState.isXNextPlayer ? 'X' : 'O';
		newState.isXNextPlayer = ! newState.isXNextPlayer;
		return newState;
			
}	
render(
    <Provider store={store}>
        <Board />
    </Provider>,
    window.document.getElementById('app'));
import React from "react";
import { render } from "react-dom";
import Square from "./Square.js"
import {connect} from "react-redux";

class Board extends React.Component {	
	renderSquare(index){
		return <Square value = {this.props.game.squares[index]} onClick={() => this.props.onUpdateBoard(index,this.props.game.squares)}>{this.props.game.squares[index]}</Square>
	}
	
	render() {
		var winner = findWinner(this.props.game.squares);
		if(winner){
			status = "Winner is " + winner +" ;)"
		} else {
			status = "Next Player: " + (this.props.game.isXNextPlayer ? 'X' :'O');
		}
		return(
				<div>
					<div>{status}</div>
					<div className="board-row">
						{this.renderSquare(0)}
						{this.renderSquare(1)}
						{this.renderSquare(2)}
					</div>	
					<div className="board-row">
						{this.renderSquare(3)}
						{this.renderSquare(4)}
						{this.renderSquare(5)}
					</div>	
					<div className="board-row">
						{this.renderSquare(6)}
						{this.renderSquare(7)}
						{this.renderSquare(8)}					
					</div>
				</div>	
		);
	}	

}

const mapStateToProps = (state) => {
	return {
		game:state
	}	
}

const mapDispatchToProps = dispatch => {
	return {
		onUpdateBoard: (index,squares) =>{	
			if(squares[index] === null && !findWinner(squares)){
				dispatch(toggle(index))
			}
		}	
	}	
}	
const toggle =  index => ({
		type: 'SET_SQUARE',
		payload: {
			index:index
		}
	})

function findWinner(squares) {
		const winningBlocks =[
			[0,1,2],
			[3,4,5],
			[6,7,8],
			[0,3,6],
			[1,4,7],
			[2,5,8],
			[0,4,8],
			[2,4,6]
		];
		var line = squares;
		for(let i = 0; i < winningBlocks.length ;++i){
			let [a,b,c] = winningBlocks[i];
			if(line[a] && line[a] === line[b] && line[a] === line[c]){
				return line[a];	
			}	
		}	
		return null;
}	


export default connect(mapStateToProps,mapDispatchToProps)(Board);
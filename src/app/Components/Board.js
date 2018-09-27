import React from "react";
import { render } from "react-dom";
import Square from "./Square.js"
import {connect} from "react-redux";

class Board extends React.Component {
	constructor(props){
		super(props);
		this.renderSquare = this.renderSquare.bind(this);
	}	
	renderSquare(index){
		return <Square value = {this.props.game.squares[index]} onClick={() => this.props.onUpdateBoard(index)}>{this.props.game.squares[index]}</Square>
		//return <button className ="square" onClick={() => this.props.onUpdateBoard(index)} >{this.props.game.squares[index]}</button>

	}
	
	render() {
		var status = "Next Player: " + (this.props.game.isXNextPlayer ? 'X' :'O');;
		/*var winner = this.findWinner();
		if(winner){
			status = "Winner is " + winner	
		} else {
			status = "Next Player: " + (this.state.isXNextPlayer ? 'X' :'O');
		}*/	
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
	console.log("new state ")
	console.log(state)
	return {
		game:state
	}	
}

const mapDispatchToProps = dispatch => {
		return {
			onUpdateBoard: index =>{	
				dispatch(toggle(index))
			}	
		}	
	
}	
const toggle =  index => ({
		type: 'SET_SQUARE',
		payload: {
			index:index
		}
	})




export default connect(mapStateToProps,mapDispatchToProps)(Board);
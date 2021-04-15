import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	reder(){
		if(! this.props.book){
			return <div>Select a book to get started.</div>
		    }
		return(
			<div>
				<h2>Details for:</h2>
				<div>
					{this.props.book.title}
				</div>
			</div>
		)
	}
}

function mapStateToProps (state){
	return{
		book: state.activeBook
	};
}	

export default connect(mapStateToProps)(BookDetail);
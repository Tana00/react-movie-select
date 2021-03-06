import React from 'react';
import MovieSelect from 'react-movie-select';
import BindToMixin from 'react-binding';

var App = React.createClass({
	mixins:[BindToMixin],
	getInitialState(){
		return { data:{}};
	},
	render () {
		
		var selectedItems = this.state.data.selectedItems || [];
		return (
			<div>
				<MovieSelect searchText='viol' maxCount={10} valueLink={this.bindToState('data','selectedItems')} />
				<ul>
				{selectedItems.map(function(item,index){
					return (<li>{item.movie.title || item.movie.name}</li>)
				})}
				</ul>
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));

var React =require('react');
var BlogForm = require('./BlogForm');

var BlogItem = React.createClass({
	updateItem: function(event) {
		this.props.setItem(this.props.item);
	},
	render: function() {
		var item = this.props.item;
		return <li key={this.props.key}>
				<h2>
					{item.title}
				</h2>
				<p><span>{item.author}</span> </p>
				<p><span>{item.content}</span></p>
				<button onClick={this.updateItem}>Update</button>
				<button onClick={this.props.onClick} value={item.id}>Delete</button>
			</li>;
	}
});

module.exports = BlogItem;


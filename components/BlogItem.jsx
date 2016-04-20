var React =require('react');

var BlogItem = React.createClass({
	render: function() {
		var item = this.props.item;
		return <li key={this.props.key}>
				<h2>
					{item.title}
				</h2>
				<p><span>{item.author}</span> </p>
				<p><span>{item.content}</span></p>
				<button onClick={this.props.onClick} value={item.id}>Delete</button>
			</li>;
	}
});

module.exports = BlogItem;


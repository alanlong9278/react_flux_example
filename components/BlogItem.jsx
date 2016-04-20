var React =require('react');

var BlogItem = function(props) {
	var item = props.item;
	debugger
	return <li key={props.key}>
		<h2>
			{item.title}
		</h2>
		<p><span>{item.author}</span> </p>
		<p><span>{item.content}</span></p>
		<button onClick={props.onClick} value={item.id}>Delete</button>
	</li>;
};

module.exports = BlogItem;


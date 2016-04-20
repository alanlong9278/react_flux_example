var React = require('react');
var ListStore = require('../stores/ListStore');
var BlogActions = require('../actions/BlogActions');
var BlogItem = require('./BlogItem');
var BlogForm = require('./BlogForm');

var MyBlogController = React.createClass({
	getInitialState: function () {
		return {
			items: ListStore.getAll()
		};
	},

	componentDidMount: function() {
		ListStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ListStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
  	this.setState({
      items: ListStore.getAll()
    });
  },

  createNewItem: function (item) {
  	item.id = Date.now();
    BlogActions.addNewItem(item);
  },

  deleteItem: function (event) {
  	BlogActions.deleteItem(event.target.value);
  },

  render: function () {

  	var self = this
		var blogItems = this.state.items.map(function (item, i) {
	  		return (
	  				<BlogItem item={item} key={i} onClick={self.deleteItem} />
	  		)
	  	});

    return (
    	<div>
    		<ul>
    			{blogItems}
    		</ul>

    		<BlogForm items={this.state.items} onSubmit={this.createNewItem} />
    	</div>
    	);
  }

});

module.exports = MyBlogController;
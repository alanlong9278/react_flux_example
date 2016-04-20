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
		debugger
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

  createNewItem: function (event) {
  	id = Date.now();
  	author = document.getElementById('new_blog_author').value;
  	title = document.getElementById('new_blog_title').value;
  	content = document.getElementById('new_blog_content').value;
  	item = {"id": id, "author": author, "title": title, "content": content};
    BlogActions.addNewItem(item);
  },

  deleteItem: function (event) {
  	BlogActions.deleteItem(event.target.value);
  },

  render: function() {
  	debugger
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
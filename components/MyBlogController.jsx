var React = require('react');
var BlogListStore = require('../stores/BlogListStore');
var BlogActions = require('../actions/BlogActions');
var BlogItem = require('./BlogItem');
var BlogForm = require('./BlogForm');

var MyBlogController = React.createClass({
	getInitialState: function () {
		return {
			items: BlogListStore.getAll(),
			current_item: {author: '', title: '', content: ''},
			updateState: "0"
		};
	},

	componentDidMount: function() {
		BlogListStore.addChangeListener(this._onChange);
		BlogListStore.addChangeListener(this.setItem);
  },

  componentWillUnmount: function() {
    BlogListStore.removeChangeListener(this._onChange);
    BlogListStore.removeChangeListener(this.setItem);
  },

  _onChange: function () {
  	this.setState({
      items: BlogListStore.getAll()
    });
  },

  createNewItem: function (item) {
  	item.id = Date.now();
    BlogActions.addNewItem(item);
  },

  deleteItem: function (event) {
  	BlogActions.deleteItem(event.target.value);
  },

  updateItem: function (item) {
  	// setState is asynchronous
  	this.setState(
      {updateState: "0"}, function() {
      	BlogActions.updateItem(item);
      }
    );
  },

  setItem: function(item) {
  	this.setState({
      current_item: item,
      updateState: "1"
    });
  },

  render: function () {
  	var self = this;
  	var blogItems = this.state.items.map(function (item, i) {
	  		return (
	  				<BlogItem item={item} key={i} onClick={self.deleteItem} setItem={self.setItem} />
	  		)
	  	});

    return (
    	<div>
    		<ul>
    			{blogItems}
    		</ul>

    		<BlogForm item={this.state.current_item} updateState={this.state.updateState} onSubmit={this.createNewItem} onClick={this.updateItem}/>
    	</div>
    	);
  }

});

module.exports = MyBlogController;
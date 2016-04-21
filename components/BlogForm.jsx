var React = require('react');

var BlogForm = React.createClass({
	getInitialState: function() {
		return {author: this.props.item.author, title: this.props.item.title, content: this.props.item.content, id: this.props.item.id};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTitleChange: function(e) {
    this.setState({title: e.target.value})
  },
  handleContentChange: function(e) {
    this.setState({content: e.target.value});
  },
  handleSubmit: function(e) {
  	e.preventDefault();
    var author = this.state.author.trim();
    var title = this.state.title.trim();
    var content = this.state.content.trim();
    var id = this.state.id;
    if (!title || !content || !author) {
      return;
    }
    if(!id) {
    	this.props.onSubmit({id: id, author: author, title: title, content: content});
  	} else {
  		this.props.onClick({id: id, author: author, title: title, content: content});
  	}
  },
  componentWillReceiveProps: function(nextProps) {
  	var item = (!this.props.item) ? nextProps.item : this.props.item;
  	debugger
  	if (typeof(item) == 'undefined' || (this.props.updateState == "0")) {
		  this.setState({author: '', title: '', content: '', id: ''});
	  } else {
	  	this.setState({
		  	id: item.id,
		    author: item.author,
		    title: item.title,
		    content: item.content
		  });
	  }

	},
	render: function() {
		return <div className="BlogForm">
        <p>
	        <input
	          type="text"
	          placeholder="Your name"
	          value={this.state.author}
	          onChange={this.handleAuthorChange}
	        />
	      </p>
        <p>
	        <input
	          type="text"
	          placeholder="Title"
	          value={this.state.title}
	          onChange={this.handleTitleChange}
	        />
	      </p>
	      <p>
	        <input
	          type="textarea"
	          placeholder="Say something..."
	          value={this.state.content}
	          onChange={this.handleContentChange}
	        />
	      </p>
        <p><button onClick={this.handleSubmit} value={this.state.id}>Post</button></p>
      </div>;
  }
});

module.exports = BlogForm;
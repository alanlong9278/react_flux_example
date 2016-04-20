var React = require('react');

var BlogForm = React.createClass({
	getInitialState: function() {
    return {author: '', title: '', content: ''};
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
    if (!title || !content || !author) {
      return;
    }
    this.props.onSubmit({author: author, title: title, content: content});
    this.setState({author: '', title: '', content: ''});
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
        <p><button onClick={this.handleSubmit}>New Blog</button></p>
      </div>;
  }
});

module.exports = BlogForm;
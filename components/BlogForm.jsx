var React = require('react');

var BlogForm = function(props) {
	return <form className="BlogForm" onSubmit={props.onSubmit}>
        <p>
	        <input
	          type="text"
	          placeholder="Your name"
	          id="new_blog_author"
	        />
	      </p>
        <p>
	        <input
	          type="text"
	          placeholder="Title"
	          id="new_blog_title"
	        />
	      </p>
	      <p>
	        <input
	          type="textarea"
	          rows="3" cols="20"
	          placeholder="Say something..."
	          id="new_blog_content"
	        />
	      </p>
        <p><input type="submit" value="Post" /></p>
      </form>;
};

module.exports = BlogForm;
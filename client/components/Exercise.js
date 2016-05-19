import React from 'react';
import ExPreview from './ExPreview';
import Comments from './Comments';

const Exercise = React.createClass({
	render() {
		const { postId } = this.props.params;
		// index of post
		const i = this.props.posts.findIndex((post) => post.code === postId);
		// get us the post
		const post = this.props.posts[i];

		const postComments = this.props.comments[postId] || [];
		
		return (
			<div className="exercise">
				<ExPreview i={i} post={post} {...this.props} />
				<Comments postComments={postComments} {...this.props}></Comments>
			</div>
		)
	}
});

export default Exercise;
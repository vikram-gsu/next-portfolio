import React from 'react';
import BlogPage from '../components/Blog';

const blogData = require('../data/medium_feed.json');

const Blog = ({posts}: {posts: any}) => {
  return <BlogPage posts={posts}/>;
};

Blog.getInitialProps = () => {
    const { Post: PostObj } = blogData.payload.references;

    const posts = Object.values(PostObj).map(
      (postObj: any) =>
        Object.assign(
          {},
          {
            title: postObj.title,
            createdAt: postObj.createdAt,
            subtitle: postObj.virtuals.subtitle,
            image: postObj.virtuals.previewImage.imageId
              ? `https://cdn-images-1.medium.com/max/800/${postObj.virtuals.previewImage.imageId}`
              : null,
            url: `https://medium.com/@vrstumped/${postObj.uniqueSlug}`
          }
        )
    );
    return {posts}
}

export default Blog;

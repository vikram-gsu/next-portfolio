import * as React from 'react';
import styled from 'styled-components';
import MediumItem from './MediumItem.tsx';

const BlogDiv = styled.div`
  /* border: 1px solid blue; */
  display: grid;
  grid-area: content;
  grid-template: 4em minmax(14em, 1fr) / 0.3fr 1fr 0.3fr;
  grid-gap: 0.5em;
  grid-template-areas:
    '. title .'
    '. innerContent .';
  padding-bottom: 5em;
  margin: 0;

  .contentHeader {
    /* border: 1px solid green; */
    grid-area: title;
    padding-left: 1em;
  }
  .contentBody {
    grid-area: innerContent;
  }
`;

const data = require('../data/medium_feed.json');

// type Post = {
//     title: string,
//     createdAt: string,
//     subtitle: string,
//     image: string | null,
//     url: string
// }

// type BlogState = {
//     posts: Array<Post>
// }
class Blog extends React.Component {
  state = { posts: [] };

  componentDidMount() {
    this.setPosts();
  }

  setPosts = () => {
    const { Post: PostObj } = data.payload.references;

    const posts = Object.values(PostObj).map(
      ({ title, createdAt, virtuals, uniqueSlug }) =>
        Object.assign(
          {},
          {
            title,
            createdAt,
            subtitle: virtuals.subtitle,
            image: virtuals.previewImage.imageId
              ? `https://cdn-images-1.medium.com/max/800/${virtuals.previewImage.imageId}`
              : null,
            url: `https://medium.com/@vrstumped/${uniqueSlug}`
          }
        )
    );
    this.setState({
      posts
    });
  };

  render() {
    const { posts } = this.state;
    return (
      <BlogDiv>
        <h2 className="contentHeader"> Blog </h2>
        <div className="contentBody">
          {posts && posts.map(post => <MediumItem key={post.title} {...post} />)}
        </div>
      </BlogDiv>
    );
  }
}

export default Blog;

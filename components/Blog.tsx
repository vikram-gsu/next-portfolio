import * as React from 'react';
import styled from 'styled-components';
import MediumItem from './MediumItem';
import {Post} from './types/common';

const BlogDiv = styled.div`
  /* border: 1px solid blue; */
  display: grid;
  grid-area: content;
  grid-template: 4em minmax(14em, 1fr) / 1fr ;
  grid-gap: 0.5em;
  grid-template-areas:
    'title'
    'innerContent';
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


type BlogProps = {
  posts: Array<Post>;
};
const Blog = ({ posts }: BlogProps) => {
  return (
    <BlogDiv>
      <h2 className="contentHeader"> Blog </h2>
      <div className="contentBody">
        {posts && posts.map(post => <MediumItem key={post.title} {...post} />)}
      </div>
    </BlogDiv>
  );
};

export default Blog;

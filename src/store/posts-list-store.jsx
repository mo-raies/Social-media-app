import { createContext, useReducer } from "react";



export const PostList = createContext({
  PostList: [],
  addPost: () => { },
  addinitalposts: () => { },
  deletePost: () => { }
});

const postListReducer = (currPostList, action) => {
  let newPostList = [...currPostList]; // Always create a new reference

  if (action.type === 'DELETE_POST') {
    newPostList = currPostList.filter((post) => post.id !== action.payload.postId);

  } else if (action.type === 'ADD_INITAL_POSTS') {
    newPostList = action.payload.posts
  }
  else if (action.type === 'ADD_POST') {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
};


const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, [])

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: 'ADD_POST',
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: reactions,
        userId: userId,
        tags: tags
      }
    })
  };

  const addinitalposts = (posts) => {
    dispatchPostList({
      type: 'ADD_INITAL_POSTS',
      payload: {
        posts,
      }
    })
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: 'DELETE_POST',
      payload: {
        postId,
      }
    })
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost, addinitalposts }}> {children} </PostList.Provider>
  )
};



export default PostListProvider;




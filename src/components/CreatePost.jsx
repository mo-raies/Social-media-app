import { useContext, useRef } from "react";
import { PostList } from "../store/posts-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    // tagsElement.current.value = ""



    addPost(userId, postTitle, postBody, reactions, tags)
  }

  return (
    <form className="create_post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">User Id</label>
        <input type="text" ref={userIdElement} placeholder="Your User Id " className="form-control" id="userId" />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input type="text" ref={postTitleElement} placeholder="How are you feeling today..." className="form-control" id="userId" />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post Content</label>
        <textarea type="text" ref={postBodyElement} rows="4" placeholder="Tell us more about it" className="form-control" id="body" />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">Number of reactions</label>
        <input type="text" ref={reactionsElement} placeholder="How many people reacted to this post" className="form-control" id="reaction" />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Enter your hastags here</label>
        <input type="text" ref={tagsElement} placeholder="Please enter tags using space" className="form-control" id="reaction" />
      </div>

      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  )
}
export default CreatePost;
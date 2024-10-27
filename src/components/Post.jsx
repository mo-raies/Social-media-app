import { useContext } from "react";
import { FiDelete } from "react-icons/fi";
import { PostList } from "../store/posts-list-store";


const Post = ({ post }) => {

  const { deletePost } = useContext(PostList);



  return <div className="card post-card" style={{ width: '30rem' }}>
    {/* <img src="..." className="card-img-top" alt="..." /> */}
    <div className="card-body" >
      <h5 className="card-title">{post.title}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}>
          <FiDelete />
        </span></h5>
      <p className="card-text">{post.body}</p>
      {post.tags.map((tags) => <span key={tags} className="badge text-bg-primary tags">{tags}</span>)}
      <div className="alert alert-secondary reaction" role="alert">
        This post has been reacted by <span className="react">{post.reaction}</span> people.
      </div>

    </div>
  </div>
}
export default Post;
import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/posts-list-store";
import WelcomeMassage from "./welcome-massage";



const PostList = () => {

  const { postList, addinitalposts } = useContext(PostListData)

  const handalGetpostClick = () => {
    // fetch('https://dummyjson.com/products')
    //   .then(res => res.json())
    //   .then((data) => {
    //     console.log(data);

    //     addinitalposts(data.products)
    //   });

    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then((data) => {
        addinitalposts(data.posts)
      })

  }


  return <>
    {postList.length === 0 &&
      (<WelcomeMassage onGetpostsClick={handalGetpostClick}></WelcomeMassage>)}
    {postList.map((post) => (
      <Post key={post.id} post={post} />
    ))}



  </>
}
export default PostList;

// const PostList = () => {
//   const { postList } = useContext(PostListData);
//   //console.log(postList);

//   return (
//     <>
//       {postList?.map((post) => (
//         post ? <Post key={post.id} post={post} /> : null // Skip undefined posts
//       ))}
//     </>
//   );
// };
// export default PostList;






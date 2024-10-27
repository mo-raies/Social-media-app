import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import Header from './components/Header'
import SideBar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import { useState } from 'react'
import PostListProvider from './store/posts-list-store'


function App() {

  const [selectedTab, setSelectedTab] = useState('Home')



  return (
    <PostListProvider>
      <div className='app-container'>
        <SideBar selectedTab={selectedTab}
          setSlectedTab={setSelectedTab}></SideBar>
        <div className='contant'>
          <Header></Header>
          {selectedTab === 'Home' ?
            <PostList></PostList> :
            <CreatePost></CreatePost>}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App

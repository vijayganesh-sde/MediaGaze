import BottomNavigation from '../../components/Footer/BottomNavigation';
import PostCard from '../../components/PostCard/PostCard';
import TopNavigation from '../../components/Header/TopNavigation';
import './posts.css';
function AllPosts(){
  return (<>
  <div className="main-container">
    <PostCard />
    <PostCard />
    <PostCard />
  </div>
  
  </>);
}
export default AllPosts;
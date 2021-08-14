import Header from "../Components/Header/Header";
import VideoAd from "../Components/VideoAd/VideoAd";
import SinglePost from "../Components/_Blog Post Page/SinglePost";

const BlogPost = () => {
    return (
        <>
            <Header mainTitle={"Single Post"} secondaryTitle={"Single Post"} />
            <SinglePost/>
            <VideoAd/>
        </>
     );
}
 
export default BlogPost;
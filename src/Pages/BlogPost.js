import Header from "../Components/Header/Header";
import VideoAd from "../Components/VideoAd/VideoAd";
import SinglePost from "../Components/_Blog Post Page/SinglePost";

import ToTopBtn from "../Components/Button/ToTopBtn";
import useShowBtn  from './../Hooks/useShowBtn';

const BlogPost = () => {

    const showBtn = useShowBtn();

    return (
        <>
            <Header mainTitle={"Single Post"} secondaryTitle={"Single Post"} />
            <SinglePost/>
            <VideoAd />
            <ToTopBtn show={showBtn} />
        </>
     );
}
 
export default BlogPost;
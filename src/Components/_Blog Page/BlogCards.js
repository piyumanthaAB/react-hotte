import * as B from './BlogPageElements';



const BlogCards = (props) => {
    return (
        <>
            <B.BlogCradsContainer >
                
                {
                    props.blogs.map((blog, idx) => {
                        return (
                            <B.BlogCard key={idx} data-aos="zoom-out-up">
                                <B.BlogCardTop>
                                    {blog.image}
                                    {/* <B.BlogCardImg src={img_1} /> */}
                                </B.BlogCardTop>
                                <B.BlogCardBottom>
                                    <B.BlogCardBtn to={`/post/${blog.id}`}>{blog.date }</B.BlogCardBtn>

                                    <B.BlogCardTitle to={`/post/${blog.id}`}>{ blog.title}</B.BlogCardTitle>
                                    <B.BlogCardDetails>
                                        {blog.details}
                                    </B.BlogCardDetails>

                                </B.BlogCardBottom>
                            </B.BlogCard>
                        );
                    })
                }
                
                
                
            </B.BlogCradsContainer>
        </>
     );
}
 
export default BlogCards;
import { Link } from "react-router-dom";
import styled from "styled-components";

export const BlogPostContainer = styled.div`
    display: flex;
    min-height: 50vh;
    background-color: white;
    padding: 5rem 20rem;
    justify-content: space-between;

    @media screen and (max-width:1400px){
        padding: 5rem 15rem;
    }
   
    /* styled for screen size 1200px or less */
    @media screen and (max-width:1200px){
        padding: 5rem 8rem;
        /* max-height: 120vh; */

    }
    /* styled for screen size 1200px or less */
    @media screen and (max-width:1000px){
        min-height: unset;
        flex-direction: column;
    }
    @media screen and (max-width:760px){
        padding: 5rem 4rem;
    }

    @media screen and (max-width:600px){
        padding: 5rem 2rem;

    }
    @media screen and (max-width:400px){
        padding: 3rem 2rem;

    }
    
`
// ================================ Left Components Start ==========================================================

export const BlogPostLeftContainer = styled.div`
    flex: 0 1 65%;
    /* background-color: red; */
`;

export const PostContainer = styled.div`
    width: 100%;

`;

export const PostTitle = styled.p`
    font-weight: 600;
    font-size: 3rem;
    line-height: 1.2;
    color: #232323;

    @media screen and (max-width:600px){
        font-size: 2.7rem;
    }
    @media screen and (max-width:400px){
        font-size: 2.2rem;
    }
`
export const PostSubTitle = styled.p`
    font-weight: 300;
    color: #8c8784;
    line-height: 1.2;
    font-size: 1.4rem;
    margin: 1rem 0;
    @media screen and (max-width:600px){
        font-size: 1.3rem;

    }
    @media screen and (max-width:400px){
        font-size: 1.1rem;
        margin: 1rem 0 .5rem;

    }
`

export const PostImageContainer = styled.div`
    width: 100%;
    min-height: 50vh;
    border-radius: 1rem;
    padding: 1rem 0;
`
export const PostImage = styled.img`
width: 100%;
`

export const PostImageDescription = styled.p`
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 600;
    color: #616161;
    line-height: 1.8;
    @media screen and (max-width:600px){
        font-size: 1.1rem;

    }
    @media screen and (max-width:400px){
        font-size: 1rem;

    }
`
export const PostMainText = styled.p`
    font-size: 1.4rem;
    color: #616161;
    font-weight: 400;
    @media screen and (max-width:600px){
        font-size: 1.25rem;

    }
    @media screen and (max-width:600px){
        font-size: 1.2rem;

    }
`

export const PostFooter = styled.div`
    width: 100%;
    background-color: #fef8f1;
    min-height: 10vh;
    margin: 3rem 0;
    display: flex;
    flex: 0 1 50%;
    align-items: center;
    padding: 1rem 2rem;
    justify-content: space-between;
    border-radius: .5rem;
`
export const PostIconContainer = styled.div`
    flex: 0 1 25%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width:800px){
        flex: 0 1 30%;
    }
    @media screen and (max-width:500px){
        flex: 0 1 35%;
    }
    

`

export const PostTagText = styled.p`
    font-size: 1.4rem;
    font-weight: 600;
    color: #8c8784;

    @media screen and (max-width:600px){
        font-size: 1.2rem;

    }
`

export const PostIcon = styled(Link)`
   
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    padding:1.5rem ;
    position: relative;
    z-index: 2;
    border-radius: .5rem;
    overflow: hidden;
    color: black;

    @media screen and (max-width:600px){
        padding:1rem ;

    }

    @media screen and (max-width:500px){
        font-size: 1.2rem;

    }

    &:hover{
        background-image: linear-gradient(to right, #f05424, #d51e19);
        color: white;
    }
`

export const BlogCommentContainer = styled.div`
    width: 100%;
    /* background-color: red; */
    min-height: 20vh;
`
export const BlogCommentRow = styled.div`
    width: 100%;
    display: flex;
    min-height: 10vh;
    /* background-color: red; */
    justify-content: space-between;
    margin: 2rem 0;
    
    @media screen and (max-width:400px){
        flex-direction: column;

    }
`

export const BlogCommentImageContainer = styled.div`
    width: 20%;
    
    border-radius: 1rem;
    padding: 1rem 0;
`
export const BlogCommentImg = styled.img`
    width: 100%;
`

export const BlogComment = styled.div`
    flex: 0 1 78%;
`
export const BlogCommentTitle = styled.p`
    font-weight: 600;
    font-size: 3rem;
    color: #232323;
    @media screen and (max-width:800px){
        font-size: 2.8rem;

    }
    @media screen and (max-width:600px){
        font-size: 2.4rem;

    }
    @media screen and (max-width:400px){
        font-size: 2.1rem;

    }
`
export const BlogCommentHeading = styled.p`
    font-weight: 500;
    font-size: 2.2rem;
    color: #3c3c3c;

    @media screen and (max-width:800px){
        font-size: 1.8rem;

    }
    @media screen and (max-width:600px){
        font-size: 1.5rem;

    }
    @media screen and (max-width:400px){
        font-size: 1.3rem;

    }
`
export const BlogCommentSubHeading = styled.p`
    font-weight: 400;
    font-size:1.4rem;
    color: #696969;

    @media screen and (max-width:600px){
        font-size: 1.2rem;

    }
    @media screen and (max-width:400px){
        font-size: 1.1rem;

    }
`
export const BlogCommentText = styled.p`
    font-weight: 400;
    font-size:1.4rem;
    color: #78787c;
    margin: 1rem 0;

    @media screen and (max-width:600px){
        font-size: 1.2rem;

    }
    @media screen and (max-width:400px){
        font-size: 1.1rem;

    }
`

export const BlogCommentFormContainer = styled.div`
    width: 100%;
    /* padding: 2rem; */
`
export const BlogCommentForm = styled.form`
    width: 100%;
    min-height: 20vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
export const BlogFormGroup = styled.div`
    flex: 0 1 48%;
    
`
export const BlogFormGroupTextArea = styled.div`
    flex: 0 1 100%;
`

// ================================ Left Components End ==========================================================


// ================================ Right Components Start ==========================================================


export const BlogPostRightContainer = styled.div`
    flex: 0 1 33%;

    @media screen and (max-width:1000px){
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 2rem 0;
    }

    @media screen and (max-width:600px){
        flex-direction: column;
    }
`;

export const BlogPostCategoryContainer = styled.div`
    width: 100%;
    min-height: 30vh;
    /* background-color: orange; */
    margin: 0 0 4rem;

    @media screen and (max-width:1000px){
        flex: 0 1 48%;
    }

    
`

export const BlogPostCategory = styled.div`
    width: 100%;
    padding: 1rem;
    border-radius:.5rem ;
    border: 1px solid #ced4da;
    margin: 1rem 0;
    transition: all .3s;

    &:hover{
        cursor: pointer;
    border: 1px solid #fc802a;
        
    }
`
export const BlogPostCategoryText = styled.p`
    font-weight: 400;
    font-size: 1.4rem;
    color: #78787c;

    @media screen and (max-width:500px){
        font-size: 1.3rem;
    }
    @media screen and (max-width:400px){
        font-size: 1.2rem;
    }
`

export const BlogRecentPostContainer = styled.div`
    width: 100%;
    min-height: 30vh;

    @media screen and (max-width:1000px){
        flex: 0 1 48%;
    }
`
export const BlogRecentPost = styled(Link)`
    width: 100%;
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    margin-bottom: 2rem;
`
export const BlogRecentPostTitle = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    color: #ff702a;

    @media screen and (max-width:400px){
        font-size: 1.4rem;

    }
`;


export const BlogRecentPostTitleDesc = styled.p`
    font-size: 1.3rem;
    font-weight: 400;
    color: #646464;

    @media screen and (max-width:400px){
        font-size: 1.1rem;

    }
`

export const BlogRecentPostImgContainer = styled.div`
    flex: 0 1 25%;
    border-radius: 0.5rem;
`
export const BlogRecentPostImg = styled.img`
    width: 100%;

`

export const BlogRecentPostDetailsContainer = styled.div`
    flex: 0 1 71%;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

`

export const BlogPopularTagsContainer = styled.div`
    /* display: flex; */
    width: 100%;
    min-height: 20vh;
    margin: 3rem 0;
    /* background-color: red; */

    @media screen and (max-width:1000px){
        flex: 0 1 100%;
    }
    
`

export const TagsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

   
`

export const BlogPopularTag = styled.div`
    padding:.8rem 1.3rem;
    width: max-content;
    border: 1px solid #e0e1e1;
    margin: 0.5rem 0;
    color: #78787c;
    font-size: 1.4rem;
    font-weight: 400;

    &:hover{
        background-image:linear-gradient(to right, #fb6828, #cc0e15);
        color: white;
    }

    &:not(:last-child){
        margin-right: 2rem;
    }
`
// ================================ Right Components End ==========================================================

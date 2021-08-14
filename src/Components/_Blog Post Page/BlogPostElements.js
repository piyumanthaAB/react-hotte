import { Link } from "react-router-dom";
import styled from "styled-components";

export const BlogPostContainer = styled.div`
    display: flex;
    min-height: 50vh;
    background-color: white;
    padding: 5rem 20rem;
    justify-content: space-between;
`
// ================================ Left Components Start ==========================================================

export const BlogPostLeftContainer = styled.div`
    flex: 0 1 65%;
    /* background-color: red; */
`;

export const PostContainer = styled.div`
    width: 100%;

`;

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
    /* flex-direction: column; */
`

export const BlogCommentImg = styled.img`
    flex: 0 1 18%;
    border-radius: 1rem;

`
export const BlogComment = styled.div`
    flex: 0 1 78%;
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
`;

export const BlogPostCategoryContainer = styled.div`
    width: 100%;
    min-height: 30vh;
    /* background-color: orange; */
    margin: 0 0 4rem;

    
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

export const BlogRecentPostContainer = styled.div`
    width: 100%;
    min-height: 30vh;
`
export const BlogRecentPost = styled(Link)`
    width: 100%;
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    margin-bottom: 2rem;
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

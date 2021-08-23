import * as B from './BlogPostElements';
import { CustomHeading,ColorSpan } from './../Headings/Headings';

import PostImg from './../../img/detailsimg.png';

import CommentImg_1 from './../../img/person1.png'
import CommentImg_2 from './../../img/person2.png'

import img_1 from './../../img/recent1.png';
import img_2 from './../../img/recent2.png';
import img_3 from './../../img/recent3.png';
import img_4 from './../../img/recent4.png';

import { FaFacebookF,FaGooglePlusG,FaSkype } from "react-icons/fa";

import { FormInput,FormTextArea,FormSubmitBtn } from './../Forms/FormElements';

const SinglePost = () => {
    return (
        <>
            <B.BlogPostContainer>
                {/* ==================================== Left Start  =================================== */}
                
                <B.BlogPostLeftContainer>
                    
                    <B.PostContainer>

                        <B.PostTitle>
                            Best booking systems and table planners for restaurants.
                        </B.PostTitle>
                        <B.PostSubTitle>
                            <ColorSpan>By: Jenifer Lofez | </ColorSpan>Date: 25 August, 2020
                        </B.PostSubTitle>

                        <B.PostImageContainer>
                            <B.PostImage src={PostImg} />
                            <B.PostImageDescription>
                                When trying to get new customers keep your visitoers attenton peope only have time to gse when they aren traveling
                                somen makes sense to have your site optimized ever poss have timean and the Internet evergrowing
                                ocean of information ocean of information tive thate your site not only stand out visually to your visitors.
                            </B.PostImageDescription>
                        </B.PostImageContainer>

                        <B.PostMainText>
                            When trying to get new customers keep your visitoers attenton peope only have time to check thin gse when they aren traveling
                            somen makes sense to have your site optimized ever possible device have timean and the Internet evergrowing ocean of information
                            ocean of information and it impera tive thate your site not only stand out visually to your visitors, but structurally search
                            engines been built from the ground up using the latest, semantic HTML5 markup,
                            allowing search engines easily distinguish where your main content starts and ends and easily distinguish.
                            When trying to get new customers keep your visitoers attenton peope only have time to check thin gse when they
                            aren traveling somen makes sense to have your site optimized ever possible device have timean and the Internet evergrowing ocean of
                            information ocean of information and it impera tive thate your site not only stand out visually to your visitors.
                            When trying to get new customers keep your visitoers attenton peope only have time to check thin gse when
                            they aren traveling somen makes sense to have your site optimized ever possible device have timean and the
                            Internet evergrowing ocean of information ocean of information and it impera tive thate your site not only
                            stand out visually to your visitors, but structurally search engines been built from the ground up using the
                            latest, semantic HTML5 markup,
                            allowing search engines easily distinguish where your main content starts and ends and easily distinguish.
                        </B.PostMainText>
                        

                    </B.PostContainer>
                    <B.PostFooter>
                        
                        <B.PostTagText>
                            <ColorSpan>Tags: </ColorSpan>Restaurant, Company, Food

                        </B.PostTagText>
                        <B.PostIconContainer>
                            <B.PostIcon to={'/'}> <FaFacebookF /> </B.PostIcon>
                            <B.PostIcon to={'/'}><FaSkype /></B.PostIcon>
                            <B.PostIcon to={'/'}><FaGooglePlusG /></B.PostIcon>
                        </B.PostIconContainer>
                    </B.PostFooter>

                    <B.BlogCommentContainer>
                        <B.BlogCommentTitle>Comments :</B.BlogCommentTitle>
                        
                        <B.BlogCommentRow>
                            <B.BlogCommentImageContainer>
                                <B.BlogCommentImg src={CommentImg_1} />
                            </B.BlogCommentImageContainer>
                            
                            <B.BlogComment>
                                <B.BlogCommentHeading>Kodins Creankis</B.BlogCommentHeading>
                                <B.BlogCommentSubHeading>Business Man</B.BlogCommentSubHeading>
                                <B.BlogCommentText>
                                    When trying to get new customers keep your visitoers attenton peope only have time to check
                                    thin gse when they aren traveling somen
                                    makes sense to have your site optimized ever possible device have timean and the Internet.
                                </B.BlogCommentText>
                                

                            </B.BlogComment>
                        </B.BlogCommentRow>
                        <B.BlogCommentRow>
                            <B.BlogCommentImageContainer>
                                <B.BlogCommentImg src={CommentImg_2} />
                            </B.BlogCommentImageContainer>
                            <B.BlogComment>
                                <B.BlogCommentHeading>Kodins Creankis</B.BlogCommentHeading>
                                <B.BlogCommentSubHeading>Business Man</B.BlogCommentSubHeading>
                                <B.BlogCommentText>
                                    When trying to get new customers keep your visitoers attenton peope only have time to check
                                    thin gse when they aren traveling somen
                                    makes sense to have your site optimized ever possible device have timean and the Internet.
                                </B.BlogCommentText>
                                

                            </B.BlogComment>
                        </B.BlogCommentRow>
                        

                        
                        <B.BlogCommentTitle> Leave a Comment :</B.BlogCommentTitle>

                        <B.BlogCommentFormContainer>
                            <B.BlogCommentForm>
                                <B.BlogFormGroup>
                                    <FormInput type={"text"} placeholder={"Name:"} required />
                                </B.BlogFormGroup>
                                <B.BlogFormGroup>
                                    <FormInput type={"email"} placeholder={"Email:"} required />
                                </B.BlogFormGroup>
                                <B.BlogFormGroupTextArea>
                                    <FormTextArea placeholder={"Message:"} rows={"5"} required />
                                </B.BlogFormGroupTextArea>
                                <B.BlogFormGroupTextArea>
                                    <FormSubmitBtn>Submit Now</FormSubmitBtn>
                                </B.BlogFormGroupTextArea>

                            </B.BlogCommentForm>
                        </B.BlogCommentFormContainer>

                    </B.BlogCommentContainer>

                    
                </B.BlogPostLeftContainer>
                
                {/* ==================================== Left End  =================================== */}

                {/* ==================================== Right Start  =================================== */}
                <B.BlogPostRightContainer>
                    
                    <B.BlogPostCategoryContainer>
                        <CustomHeading size={"2rem"} weight={"600"} color={"#232323"} margin={"0 0 2rem"} >Category</CustomHeading>
                        <B.BlogPostCategory>
                            <B.BlogPostCategoryText >Fresh Ingrediants</B.BlogPostCategoryText>
                        </B.BlogPostCategory>
                        <B.BlogPostCategory>
                            <B.BlogPostCategoryText >Thread With Brace</B.BlogPostCategoryText>
                        </B.BlogPostCategory>
                        <B.BlogPostCategory>
                            <B.BlogPostCategoryText >Pasta With Ragu</B.BlogPostCategoryText>
                        </B.BlogPostCategory>
                        <B.BlogPostCategory>
                            <B.BlogPostCategoryText >Grilled Fish</B.BlogPostCategoryText>
                        </B.BlogPostCategory>
                        <B.BlogPostCategory>
                            <B.BlogPostCategoryText >Fresh Ingredients</B.BlogPostCategoryText>
                        </B.BlogPostCategory>
                        <B.BlogPostCategory>
                            <B.BlogPostCategoryText >Thread With Brace</B.BlogPostCategoryText>
                        </B.BlogPostCategory>
                        <B.BlogPostCategory>
                            <B.BlogPostCategoryText >Pasta With Ragu</B.BlogPostCategoryText>
                        </B.BlogPostCategory>
                    </B.BlogPostCategoryContainer>
                    
                    
                    <B.BlogRecentPostContainer>
                        <CustomHeading size={"2rem"} weight={"600"} color={"#232323"} margin={"0 0 2rem"}>Recent Post</CustomHeading>
                        
                        <B.BlogRecentPost to={'/'}>
                            <B.BlogRecentPostImgContainer> <B.BlogRecentPostImg src={img_1} /> </B.BlogRecentPostImgContainer>
                            <B.BlogRecentPostDetailsContainer>
                                <B.BlogRecentPostTitle>24 August, 2020</B.BlogRecentPostTitle>
                                <B.BlogRecentPostTitleDesc>Grilled port the sample file ship with theme.</B.BlogRecentPostTitleDesc>
                                
                            </B.BlogRecentPostDetailsContainer>
                        </B.BlogRecentPost>
                        <B.BlogRecentPost to={'/'}>
                            <B.BlogRecentPostImgContainer> <B.BlogRecentPostImg src={img_2} /> </B.BlogRecentPostImgContainer>
                            <B.BlogRecentPostDetailsContainer>
                                <B.BlogRecentPostTitle>24 August, 2020</B.BlogRecentPostTitle>
                                <B.BlogRecentPostTitleDesc>Grilled port the sample file ship with theme.</B.BlogRecentPostTitleDesc>
                                
                            </B.BlogRecentPostDetailsContainer>
                        </B.BlogRecentPost>
                        <B.BlogRecentPost to={'/'}>
                            <B.BlogRecentPostImgContainer> <B.BlogRecentPostImg src={img_3} /> </B.BlogRecentPostImgContainer>
                            <B.BlogRecentPostDetailsContainer>
                                <B.BlogRecentPostTitle>24 August, 2020</B.BlogRecentPostTitle>
                                <B.BlogRecentPostTitleDesc>Grilled port the sample file ship with theme.</B.BlogRecentPostTitleDesc>
                                
                            </B.BlogRecentPostDetailsContainer>
                        </B.BlogRecentPost>
                        <B.BlogRecentPost to={'/'}>
                            <B.BlogRecentPostImgContainer> <B.BlogRecentPostImg src={img_4} /> </B.BlogRecentPostImgContainer>
                            <B.BlogRecentPostDetailsContainer>
                                <B.BlogRecentPostTitle>24 August, 2020</B.BlogRecentPostTitle>
                                <B.BlogRecentPostTitleDesc>Grilled port the sample file ship with theme.</B.BlogRecentPostTitleDesc>
                                
                            </B.BlogRecentPostDetailsContainer>
                        </B.BlogRecentPost>
                        

                    </B.BlogRecentPostContainer>
                
                    <B.BlogPopularTagsContainer>
                        <CustomHeading size={"2rem"} weight={"600"} color={"#232323"} margin={"0 0 2rem"} >Popular Tags</CustomHeading>
                        
                            
                        <B.TagsWrapper>
                            <B.BlogPopularTag>
                                Food
                            </B.BlogPopularTag>
                            <B.BlogPopularTag>
                                Restaurent
                            </B.BlogPopularTag>
                            <B.BlogPopularTag>
                                Chicken Food
                            </B.BlogPopularTag>
                            <B.BlogPopularTag>
                                Health Care
                            </B.BlogPopularTag>
                            <B.BlogPopularTag>
                                Beef Burger
                            </B.BlogPopularTag>
                            <B.BlogPopularTag>
                                Take Away
                            </B.BlogPopularTag>
                                
                        </B.TagsWrapper>

                    </B.BlogPopularTagsContainer>
                
                </B.BlogPostRightContainer>
                {/* ==================================== Right End  =================================== */}

            </B.BlogPostContainer>
        </>
    );
}
 
export default SinglePost;
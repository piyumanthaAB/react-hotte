import * as B from './BlogPostElements';
import { CustomHeading, CustomSpan } from './../Headings/Headings';

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
                        <CustomHeading margin={"0 0 2rem"} size={"3rem"} weight={"600"} color={ "#232323"} lineHeight={"1.2"}>
                            Best booking systems and table planners for restaurants.
                        </CustomHeading>
                        <CustomHeading margin={"0 0 2rem"} size={"1.4rem"} weight={"300"} color={ "#8c8784"} lineHeight={"1.2"}>
                            <CustomSpan size={"1.4rem"} color={"#fc802a"}> By: Jenifer Lofez | </CustomSpan>
                            
                            Date: 25 August, 2020
                        </CustomHeading>

                        <B.PostImageContainer>
                            <B.PostImage src={PostImg} />
                            <B.PostImageDescription>
                                When trying to get new customers keep your visitoers attenton peope only have time to gse when they aren traveling
                                somen makes sense to have your site optimized ever poss have timean and the Internet evergrowing
                                ocean of information ocean of information tive thate your site not only stand out visually to your visitors.
                            </B.PostImageDescription>
                        </B.PostImageContainer>

                        <CustomHeading size={"1.4rem"} weight={"400"} color={ "#616161"} lineHeight={"1.6"}>
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
                        </CustomHeading>

                    </B.PostContainer>
                    <B.PostFooter>
                        <CustomHeading weight={"400"} size={"1.4rem"} color={ "#8c8784"}>
                            <CustomSpan size={"1.4rem"} color={"#fc802a"} weight={"600"}>Tags:</CustomSpan>
                            { ' '} Restaurant, Company, Food
                        </CustomHeading>
                        <B.PostIconContainer>
                            <B.PostIcon to={'/'}> <FaFacebookF  /> </B.PostIcon>
                            <B.PostIcon to={'/'}><FaSkype  /></B.PostIcon>
                            <B.PostIcon to={'/'}><FaGooglePlusG  /></B.PostIcon>
                        </B.PostIconContainer>
                    </B.PostFooter>

                    <B.BlogCommentContainer>
                        <CustomHeading weight={"600"} size={"3rem"} color={ "#232323"}>
                            Comments :
                        </CustomHeading>
                        <B.BlogCommentRow>
                            <B.BlogCommentImg src={CommentImg_1} />
                            <B.BlogComment>
                                <CustomHeading weight={"500"} size={"2.2rem"} color={ "#3c3c3c"}>
                                    Kodins Creankis
                                </CustomHeading>
                                <CustomHeading margin={".3rem 0"} weight={"400"} size={"1.4rem"} color={ "#696969"}>
                                    Business Man
                                </CustomHeading>
                                <CustomHeading margin={"1.2rem 0"} weight={"400"} size={"1.4rem"} color={ "#78787c"}>
                                    When trying to get new customers keep your visitoers attenton peope only have time to check
                                    thin gse when they aren traveling somen
                                    makes sense to have your site optimized ever possible device have timean and the Internet.
                                </CustomHeading>

                            </B.BlogComment>
                        </B.BlogCommentRow>
                        <B.BlogCommentRow>
                        <B.BlogCommentImg src={CommentImg_2} />
                        <B.BlogComment>
                                <CustomHeading weight={"500"} size={"2.2rem"} color={ "#3c3c3c"}>
                                    Marien Tofaz
                                </CustomHeading>
                                <CustomHeading margin={".3rem 0"} weight={"400"} size={"1.4rem"} color={ "#696969"}>
                                    Ceo, Drankes
                                </CustomHeading>
                                <CustomHeading margin={"1.2rem 0"} weight={"400"} size={"1.4rem"} color={ "#78787c"}>
                                    When trying to get new customers keep your visitoers attenton peope only have time to check thin gse when they aren traveling
                                    somen makes sense to have your site optimized ever possible device have timean and the Internet.
                                </CustomHeading>

                            </B.BlogComment>
                        </B.BlogCommentRow>

                        <CustomHeading weight={"600"} size={"3rem"} color={ "#232323"}>
                            Leave A Comment :
                        </CustomHeading>

                        <B.BlogCommentFormContainer>
                            <B.BlogCommentForm>
                                <B.BlogFormGroup>
                                    <FormInput type={"text"} placeholder={"Name:"} required />
                                </B.BlogFormGroup>
                                <B.BlogFormGroup>
                                    <FormInput type={"email"} placeholder={"Email:"} required />
                                </B.BlogFormGroup>
                                <B.BlogFormGroupTextArea>
                                    <FormTextArea placeholder={"Message:"}  rows={"5"} required/>
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
                            <CustomHeading weight={"400"} size={"1.6rem"} color={"#78787c"} >Fresh Ingrediants</CustomHeading>
                        </B.BlogPostCategory>
                        <B.BlogPostCategory>
                            <CustomHeading weight={"400"} size={"1.6rem"} color={"#78787c"} >Thread With Brace</CustomHeading>
                        </B.BlogPostCategory>
                        <B.BlogPostCategory>
                            <CustomHeading weight={"400"} size={"1.6rem"} color={"#78787c"} >Pasta With Ragu</CustomHeading>
                        </B.BlogPostCategory>
                        <B.BlogPostCategory>
                            <CustomHeading weight={"400"} size={"1.6rem"} color={"#78787c"} >Grilled Fish</CustomHeading>
                        </B.BlogPostCategory>
                        <B.BlogPostCategory>
                            <CustomHeading weight={"400"} size={"1.6rem"} color={"#78787c"} >Fresh Ingredients</CustomHeading>
                        </B.BlogPostCategory>
                        <B.BlogPostCategory>
                            <CustomHeading weight={"400"} size={"1.6rem"} color={"#78787c"} >Thread With Brace</CustomHeading>
                        </B.BlogPostCategory>
                        <B.BlogPostCategory>
                            <CustomHeading weight={"400"} size={"1.6rem"} color={"#78787c"} >Pasta With Ragu</CustomHeading>
                        </B.BlogPostCategory>
                    </B.BlogPostCategoryContainer>
                    
                    
                    <B.BlogRecentPostContainer>
                        <CustomHeading size={"2rem"} weight={"600"} color={"#232323"} margin={"0 0 2rem"}>Recent Post</CustomHeading>
                        
                        <B.BlogRecentPost>
                            <B.BlogRecentPostImgContainer> <B.BlogRecentPostImg src={img_1} /> </B.BlogRecentPostImgContainer>
                            <B.BlogRecentPostDetailsContainer>
                                
                                <CustomHeading size={"1.5rem"} lineHeight={"1.6"} weight={"400"} color={"#ff702a"}>24 August, 2020</CustomHeading>
                                <CustomHeading size={"1.5rem"} lineHeight={"1.6"} weight={"400"} color={"#646464"} >Grilled port the sample file ship with theme.</CustomHeading>
                                
                            </B.BlogRecentPostDetailsContainer>
                        </B.BlogRecentPost>
                        
                        
                        <B.BlogRecentPost>
                            <B.BlogRecentPostImgContainer> <B.BlogRecentPostImg src={img_2} /> </B.BlogRecentPostImgContainer>
                            <B.BlogRecentPostDetailsContainer>
                                
                                <CustomHeading size={"1.5rem"} lineHeight={"1.6"} weight={"400"} color={"#ff702a"}>24 August, 2020</CustomHeading>
                                <CustomHeading size={"1.5rem"} lineHeight={"1.6"} weight={"400"} color={"#646464"} >Grilled port the sample file ship with theme.</CustomHeading>
                                
                            </B.BlogRecentPostDetailsContainer>
                        </B.BlogRecentPost>
                        
                        <B.BlogRecentPost>
                            <B.BlogRecentPostImgContainer> <B.BlogRecentPostImg src={img_3} /> </B.BlogRecentPostImgContainer>
                            <B.BlogRecentPostDetailsContainer>
                                
                                <CustomHeading size={"1.5rem"} lineHeight={"1.6"} weight={"400"} color={"#ff702a"}>24 August, 2020</CustomHeading>
                                <CustomHeading size={"1.5rem"} lineHeight={"1.6"} weight={"400"} color={"#646464"} >Grilled port the sample file ship with theme.</CustomHeading>
                                
                            </B.BlogRecentPostDetailsContainer>
                        </B.BlogRecentPost>
                        
                        <B.BlogRecentPost>
                            <B.BlogRecentPostImgContainer> <B.BlogRecentPostImg src={img_4} /> </B.BlogRecentPostImgContainer>
                            <B.BlogRecentPostDetailsContainer>
                                
                                <CustomHeading size={"1.5rem"} lineHeight={"1.6"} weight={"400"} color={"#ff702a"}>24 August, 2020</CustomHeading>
                                <CustomHeading size={"1.5rem"} lineHeight={"1.6"} weight={"400"} color={"#646464"} >Grilled port the sample file ship with theme.</CustomHeading>
                                
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
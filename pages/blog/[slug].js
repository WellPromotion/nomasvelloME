import { gql, useQuery } from '@apollo/client';
import client from '../../Components/AppolloClient'
import React from 'react'
import facebookIcon from '../../public/images/facebookIcon.png';
import twitterIcon from '../../public/images/twitterIcon.png';


export default function blog(props) {
    
    const shareOnFacebook = () => {
        const baseUrl = 'https://www.facebook.com/sharer/sharer.php';
        const shareUrl = `${baseUrl}?u=${encodeURIComponent(`https://nomasvello.ba/blog/${post.slug}`)}`;
        window.open(shareUrl, '_blank');
      }
      
      const shareOnTwitter = () => {
        const url = window.location.href;
        const baseUrl = 'https://twitter.com/share';
        const shareUrl = `${baseUrl}?url=${encodeURIComponent(`https://nomasvello.ba/blog/${post.slug}`)}`;
        window.open(shareUrl, '_blank');
    }
   
    const { post } = props;
    console.log(post)
    return (
        <>
            
            <section id="singleBlog" className="singleBlog section">
                <div className="container singleBlogCont">
                    <div className="columns singleBlogCols">
                        <div className="column singleBlogCol"> 



                            <div className="titlePost">
                                <p className='postSingleTitle'>
                                    {post.title}
                                </p>
                            </div>

                            <div className="datePost">
                                <p className='postSingleDate'>
                                    {post.date.split("T").shift()}
                                </p>
                            </div>

                            <div className="imgPost">
                                <img className='postSingleImage' src={post.featuredImage !==null ?
                                    post.featuredImage.node.sourceUrl : ""  } alt="" />
                            </div>

                            <div className="contentPost">
                                <div dangerouslySetInnerHTML={{ __html: post.content }} className="postSingleContent">
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            
            <section id="shareOnline" className="shareOnline">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <p className='shareOnlinePar'>Podijelite članak na socijalnim mrežama <span className='shareFacebook' onClick={shareOnFacebook}><img src={facebookIcon} alt="" /></span>
 <span className='shareTwitter' onClick={shareOnTwitter}><img src={twitterIcon} alt=""  /></span> </p>
                        </div>
                    </div>
                </div>
            </section>
       </>  
  )
}




blog.getInitialProps = async function (context) {
    
    let{query: {slug} } = context;
    const id = slug ? slug : context.query.id;
  
  
    const POST_QUERY = gql` query Post( $id: ID! ) {
  
      post( id: $id, idType: SLUG ) {
          date
          excerpt
          slug
          title
          featuredImage {
            node {
              sourceUrl
              id
            }
          }
          id
          content
          databaseId
        }
        
    }`;
  
    const res = await client.query(({
       query:  POST_QUERY,
       variables: { id }
    }))
  
    return{
      post: res.data.post,
    }
  
  }
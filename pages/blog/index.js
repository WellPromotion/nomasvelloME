import Head from 'next/head'
import GET_TEST from '../../Querries/test'
import client from '../../Components/AppolloClient'
import Link from 'next/Link'
import greenLines from '../../public/images/greenLinesTogether.svg'

export default function Test(props) {
    
    const { posts } = props
    console.log(posts)

  return (

      <>
          
          <section id="blogHeader" className="blogHeader">
              <div className="container">
                  <div className="columns">
                      <div className="column">
                          <p className="blogHeaderTitle">
                              Naš Blog
                          </p>
                      </div>
                  </div>
              </div>
          </section>
    
          
          <section id="blogsListed" className="blogsListed">
              <div className="container blogsContainer">
                  <div className="columns">
                      <div className="column blogsCol is-9">
                      <div className='blogList columns is-multiline'>
              {posts.length ? 
                  
                  posts.map(post =>
                      <div className="singlePost column is-4" key={post.id}>
                          <div className="singlePostInner">
                          <img className='postImage' src={post.featuredImage !== null ? post.featuredImage.node.sourceUrl : ""} alt="" />
                          
                          <p className='postTitle'>
                              {post.title}
                          </p>
                          <p className='postDate'>
                              {post.date.split("T").shift()}
                          </p>
                          <div
                              dangerouslySetInnerHTML={{ __html: post.excerpt }} className="postExcerpt" >
                              
                          </div>
                          
                          <Link href={`/blog/${post.slug}`}><a className='postButton'>Nastavi čitati</a></Link>
                          </div>
                      </div>
                    )
              : ""
            
            }
      </div>
                      </div>
                      
                      <div className="column rightCol">
                          <div className="searchBox">
                              
                          </div>
                          <div className="naseTehnologije">
                              <p className="titleTehn">
                              Naše tehnologije
                              </p>
                              <img className='greenLinesRight' src={greenLines} alt="" />
                              <a className='singleTehn' href="https://google.com">IPL Tehnologija</a>
                              <a className='singleTehn' href="https://google.com">Laser Tehnologija</a>
                              <a className='singleTehn' href="https://google.com">LED Tehnologija</a>
                              <a className='singleTehn' href="https://google.com">Ultrazvučna Tehnologija</a>
                              <a className='singleTehn' href="https://google.com">Sun & Safe</a>
                              <a className='singleTehn' href="https://google.com">Ljekarska Podrška</a>
                          </div>
                          <div className="nasiCentri">
                              <p className="titleTehn">
                              Naši Centri
                              </p>
                              <img className='greenLinesRight' src={greenLines} alt="" />
                              <div className="listCentri">
                              <a className='singleCent' href="https://google.com">Sarajevo</a>
                              <a className='singleCent' href="https://google.com">Mostar</a>
                              <a className='singleCent' href="https://google.com">Banja Luka</a> <br />
                              <a className='singleCent' href="https://google.com">Zenica</a>
                              <a className='singleCent' href="https://google.com">Tuzla</a>
                              <a className='singleCent' href="https://google.com">Doboj</a>
                              <a className='singleCent' href="https://google.com">Brčko</a> <br />
                              <a className='singleCent' href="https://google.com">Teslić</a>
                              <a className='singleCent' href="https://google.com">Ljubuški</a>
                             </div>
                          </div>
                      </div>
                      
                 </div>
     
              </div>
              
      </section>
     
     
          
      
      </> 
     
   
  )
}

export async function getStaticProps() {
    const result = await client.query( { query: GET_TEST } )
      return{
        props: {
          posts: result.data.posts.nodes,
        },
        revalidate: 10,
      }
  }
import Head from 'next/head'
import GET_TEST from '../../Querries/test'
import client from '../../Components/AppolloClient'
import Link from 'next/link'
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
    
          
          <section id="blogsListed" className="blogsListed section">
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
                              {post.title.length > 60 ?
    `${ post.title.substring(0, 50) }...` : post.title }
                          </p>
                          <p className='postDate'>
                              {post.date.split("T").shift()}
                          </p>
                          <div
                              dangerouslySetInnerHTML={{ __html: post.excerpt.substring(0, 90) + '...' }} className="postExcerpt" >
                              
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
                              <a className='singleTehn' href="/tehnologije/ipl-tehnologija">IPL Tehnologija</a>
                              <a className='singleTehn' href="/tehnologije/laser-tehnologija">Laser Tehnologija</a>
                              <a className='singleTehn' href="/tehnologije/led-tehnologija">LED Tehnologija</a>
                              <a className='singleTehn' href="/tehnologije/ultrazvucna-tehnologija">Ultrazvučna Tehnologija</a>
                              <a className='singleTehn' href="/tehnologije/sun-and-safe">Sun & Safe</a>
                              <a className='singleTehn' href="/tehnologije/ljekarska-podrska">Ljekarska Podrška</a>
                          </div>
                          <div className="nasiCentri">
                              <p className="titleTehn">
                                  Naši Centri
                              </p>
                              <img className='greenLinesRight' src={greenLines} alt="" />
                              <div className="listCentri">
                                  <a className='singleCent' href="/centri/sarajevo-i">Novo Sarajevo</a>
                                  <a className='singleCent' href="/centri/sarajevo-ii">Stari Grad</a>
                                  <a className='singleCent' href="/centri/sarajevo-iii">Dobrinja</a>
                                  <a className='singleCent' href="/centri/sarajevo-iv">Ilidža</a>
                                  <a className='singleCent' href="/centri/banja-luka">Banja Luka</a> 
                                  <a className='singleCent' href="/centri/brcko">Brčko</a>
                                  <a className='singleCent' href="/centri/zenica">Zenica</a>
                                  <a className='singleCent' href="/centri/tuzla">Tuzla</a>
                                  <a className='singleCent' href="/centri/doboj">Doboj</a>
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
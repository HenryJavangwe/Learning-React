import React from 'react';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../css/blogs.css';
import AddBlogButton from './AddBlogButton';
import BlogList from "./BlogList";
import useFetch from './useFetch';


const Blogs = () => {
    // using a custom hook, we run a fetch request for all blogs
    const {data: Blogs, loading, err} = useFetch('http://localhost:4000/Blogs')
    
    return ( 
        <Container fluid className="Blogs_Hero py-5 mt-5">
            <div>
                <h1> Blogs </h1>
                <Link to="/new-blog">
                    <AddBlogButton/>
                </Link>
                <div>
                    {/* we use the double && as a logical operator - if the thing on the right evaluates 
                    as true the we display the thing on the right otherwise nothing gets displayed */}
                    {err && <div style={{backgroundColor:"rgba(0, 0, 0, 0.696)", }}> Error: <p>{err}</p></div>}
                </div>
                <div>
                    {loading && <div> <h3>Loading...</h3></div>}
                </div>
                <div>
                    {Blogs && <BlogList Blogs={Blogs}  />}
                    {/* handleDelete={handleDelete} */}
                </div>
            </div>
        </Container>
     );
}
 
export default Blogs;
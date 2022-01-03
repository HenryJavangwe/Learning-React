import React, {useState, useEffect} from 'react';
import { Container } from "react-bootstrap";
import '../css/blogs.css';
import BlogList from "./BlogList";
import useFetch from './useFetch';


const Blogs = () => {

    // const handleDelete = (id ) => {
    //     // console.log("Delete btn clicked has id of " + (idx+1));
    //     const newBlogs = Blogs.filter((Blog)=> Blog.id !== id);
    //     // console.log (idx , Blog.idx)
    //     setData(newBlogs);
    // }

    const {data: Blogs, loading, err} = useFetch(' http://localhost:4000/Blogs')

    return ( 
        <Container fluid className="Blogs_Hero py-5 mt-5">
            <div>
                <h1>
                    Blogs
                </h1>
                <div>
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
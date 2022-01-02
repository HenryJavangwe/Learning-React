import React, {useState} from 'react';
import { Container } from "react-bootstrap";
import '../css/blogs.css';
import BlogList from "./BlogList";

const Blogs = () => {
    const [Blogs, setBlogs]= useState([
        {title:"About Henry", body:"I love building websites, playing a piano, and spending time with my loved loves. Particularly my girlfriend ;) ", author:"Henry J", id: 1},
        {title:"New Year #2022", body:"Grateful to have made it into this brand new year alive and helathy and with all my loved ones. ", author:"Henry J", id:2},
        {title:"Aspirations", body:"This year is gonna be an amazing year filled with blessings and miracles, love, peace, joy, financial success, good health and growth!", author:"Unknown", id:3}
    ])

    const handleDelete = (id ) => {
        // console.log("Delete btn clicked has id of " + (idx+1));
        const newBlogs = Blogs.filter((Blog)=> Blog.id !== id);
        // console.log (idx , Blog.idx)
        setBlogs(newBlogs);
    }

    return ( 
        <Container fluid className="Blogs_Hero py-5 mt-5">
            <div>
                <h1>
                    Blogs
                </h1>
                <div>
                    <BlogList Blogs={Blogs}  handleDelete={handleDelete}/>
                </div>
            </div>
        </Container>
     );
}
 
export default Blogs;
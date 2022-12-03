import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import useFetch from '../utils/useFetch';
import { Button } from 'react-bootstrap';

function BlogDetails() {
    // we destructure the 
    const {id} = useParams();
    const navigate = useNavigate();
   
    const {data: Blogs, loading, err} = useFetch('http://localhost:4000/Blogs/'+id);

    // create function to delete blog
    const handleDelete = () =>{
        fetch('http://localhost:4000/Blogs/'+id, {
            method :"DELETE"
        })
        .then(
            () => {
                navigate('/blogs')
            }
        )
    }

    return (
        <div>
            <div className="Blog_Details" style={{ top:"20px", marginTop:"150px"}}>
                {/* display error message if any */}
                 {err && <div>Error: <p>{err}</p> </div>}
                 {/* display loading while data is being fetched */}
                 {loading && <div> <h3>Loading...</h3></div>}
                 {/* display fetched data */}
                <h3 className="Blog_Title">  
                    {Blogs && Blogs.title} 
                </h3>
                <div>
                    <BsFillArrowLeftCircleFill />
                    <small> 
                        {Blogs && Blogs.author}  
                    </small>
                </div>
                <p> {Blogs && Blogs.body} </p>
                {/* button to delete */}
                <Button className="delete_blog" onClick={handleDelete}>
                    Delete Blog
                </Button>
            </div>
        </div>
    )
}

export default BlogDetails

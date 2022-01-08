import React, { useState } from 'react';
import {Container, Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {useNavigate}  from 'react-router-dom';
function CreateBlog() {
    // set state for the input fields so that you may track what the user types - controlled inputs
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    // importing and now using the history property of the router dom to do redirects
    
    const navigate = useNavigate();
    // set state to show pending message while we save the new blog
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e)=>{
        // prevent default behaviour of for refreshing the page
        e.preventDefault();
        // create the blog object to submit to via the post method
        const Blog ={title, body, author}
        setLoading(true);
        setTimeout(() => {
            // run the fetch function to post to the jsom server
            fetch('http://localhost:4000/Blogs',{
                method: "POST",
                headers:{"content-type": "application/json"},
                body: JSON.stringify(Blog)
            })
            .then(
                ()=>{
                    // .then takes a call back funcion and inside this is where we'll pass any after logic
                    setLoading(false)
                    // console the object to see what data you are getting
                    console.log("New Blog created: ", Blog);
                    navigate('/blogs')
                }
            )
        }, 1000);
    }
    return (
        <div>
            <div style={{marginTop:"150px", minHeight:"70vh"}}>
                <h1>Create Blog</h1>
                <Container>
                    <Form style={{maxWidth:"400px", margin:"auto"}} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="BlogTitle">
                            <Form.Label>Blog Title</Form.Label>
                            <Form.Control type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="BlogBody">
                            <Form.Label>Blog Body</Form.Label>
                             <Form.Control value={body}  as="textarea" aria-label="With textarea" onChange={(e)=>setBody(e.target.value)}/>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="BlogAuthor">
                            <Form.Label>Blog Author</Form.Label>
                            <Form.Control type="text" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
                        </Form.Group>
                        { !loading && <Button className='ms-2' variant="primary" type="submit"> Submit </Button>} 
                        { loading && <Button className='ms-2' variant="warning" disabled> loading </Button>}
                        <br />
                        <Button variant="danger" className='ms-1 mt-2'>
                            <Link to="/blogs" className='text-light'>
                                Cancel
                            </Link>
                        </Button>
                    </Form>
                </Container>
            </div>
        </div>
    )
}

export default CreateBlog


import { Card,Row, Col, Button } from "react-bootstrap";
import '../css/blogs.css'

const BlogList = ({Blogs, handleDelete}) => {
    return ( 
        <>
            <div className="blog_list pb-5">
                <Row className="mt-5">
                    {
                        Blogs.map((Blog)=> (
                            <Col lg={4} md={5} sm={12} key={Blog.id} >
                                <Card className="Blog_Post ">
                                    <Card.Body>
                                        <Card.Title className="mb-2">
                                            <strong>{Blog.title}</strong>
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 subtitle">
                                            Author: {Blog.author}
                                        </Card.Subtitle>
                                        <Card.Text >
                                            {Blog.body}
                                        </Card.Text>
                                        <Button variant="danger" onClick={()=>handleDelete(Blog.id)}>Delete Blog</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </>
     );
}
 
export default BlogList;
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import "../css/blogs.css";
import BlogList from "./BlogList";
import AddBlogButton from "./AddBlogButton";
import useFetch from "../utils/useFetch";

const Blogs = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  // using a custom hook, we run a fetch request for all blogs
  const {
    data: Blogs,
    loading,
    err
  } = useFetch(
    "https://online-backyard-default-rtdb.firebaseio.com/blogs/articles.json"
  );

  return (
    <Container fluid className="Blogs_Hero py-5 mt-5">
      <div>
        <h1> Blogs </h1>
        {isAuthenticated && user.email === "henrysparks1@gmail.com" ? (
          <Link to="/new-blog">
            <AddBlogButton />
          </Link>
        ) : (
          <>
            <p>If you're an admin you'll see a control here to add new blogs</p>
          </>
        )}
        <div>
          {/* we use the double && as a logical operator - if the thing on the right evaluates 
                    as true the we display the thing on the right otherwise nothing gets displayed */}
          {err && (
            <div style={{ backgroundColor: "rgba(0, 0, 0, 0.696)" }}>
              {" "}
              Error: <p>{err}</p>
            </div>
          )}
        </div>
        <div>
          {loading && (
            <div>
              {" "}
              <h3>Loading...</h3>
            </div>
          )}
        </div>
        <div>
          {Blogs && <BlogList Blogs={Blogs} />}
          {/* handleDelete={handleDelete} */}
        </div>
      </div>
    </Container>
  );
};

export default Blogs;

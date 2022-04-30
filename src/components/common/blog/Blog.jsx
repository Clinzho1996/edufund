import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Moment from "react-moment";
import "moment-timezone";
import "./Blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = () => {
    fetch(
      `https://notion-api.splitbee.io/v1/table/${process.env.REACT_APP_NOTION_TABLE_ID}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log(error);
        alert(
          "Unable to fetch blog posts at this time. Please try again later"
        );
      });
  };

  return (
    <main>
      <center>
        <div className="breadcrumb">
          <h2>Blog</h2>
          <p>Bridging the gap between the physical and the digital world</p>
        </div>
      </center>
      <Container className="blog">
        <Row>
          {posts.slice(0, 4).map((post) => (
            <Col key={post.id} xs="6">
              <a target="__blank" className="blog-link" href={post["URL"]}>
                <img
                  src={post.Image && post.Image[0].url}
                  className="featured-blog-image"
                  width={"100%"}
                  alt="blog"
                />
                <p className="category">By {post["Author"][0]}</p>
                <h2>{post["Name"]}</h2>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs="10">
            <div className="swap-update">
              <h2>Swapbase Updates</h2>
              <p>
                Keep up with the latest happenings in swapbase with Swapbase
                updates.
              </p>
            </div>
          </Col>
          {/* <Col xs="2">
            <div className="swap-update">
              <Link to="/" disabled>
                View all
              </Link>
            </div>
          </Col> */}
        </Row>
        <Row className="inner-blog">
          {posts.slice(4, posts.length).map((post) => (
            <Col key={post.id} xs="4">
              <a target="__blank" className="blog-link" href={post["URL"]}>
                <img
                  src={post.Image && post.Image[0].url}
                  width={"100%"}
                  alt="blog"
                />
                <p className="category">By {post["Author"][0]}</p>
                <h2>{post["Name"]}</h2>
                <hr />
                <div className="blog-date">
                  <h6>
                    <Moment format="MMMM DD, YYYY">
                      {post["Publishing/Release Date"]}
                    </Moment>
                  </h6>
                  <h6>
                    <Moment fromNow>{post["Publishing/Release Date"]}</Moment>
                  </h6>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default Blog;

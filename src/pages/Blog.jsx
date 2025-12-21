import React, { useState, useEffect } from "react";
import "./Blog.css";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl =
      "https://public-api.wordpress.com/wp/v2/sites/globalhealthvoyages.wordpress.com/posts?_embed&per_page=10";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching WordPress posts:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="wp-loading-container">
        <div className="wp-loading">Loading blog posts…</div>
      </div>
    );
  }

  return (
    <main className="blog-page">
      {/* Header Section */}
      <header className="blog-header">
        <div className="blog-header-content">
          <h1 className="blog-site-title">Global Health Voyages</h1>
          <p className="blog-tagline">By Doctors on Wheels</p>
          <a
            href="https://globalhealthvoyages.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="blog-link"
          >
            Visit our full blog →
          </a>
        </div>
      </header>

      {/* Blog Posts Container */}
      <div className="wp-container">
        <div className="wp-posts-grid">
          {posts.map((post) => {
            const featuredImage =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

            return (
              <article key={post.id} className="wp-post">
                {featuredImage && (
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wp-featured-link"
                  >
                    <img
                      className="wp-featured"
                      src={featuredImage}
                      alt={post.title.rendered}
                    />
                  </a>
                )}

                <h2 className="wp-title">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                </h2>

                <p className="wp-date">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>

                <div
                  className="wp-excerpt"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />

                <a
                  className="wp-readmore"
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Continue reading →
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Blog;

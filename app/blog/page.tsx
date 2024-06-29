export default function BlogIndex() {
    const posts = [
      { id: 1, title: 'My First Post', slug: 'my-first-post' },
      { id: 2, title: 'Another Post', slug: 'another-post' },
    ];
  
    return (
      <div>
        <h1>My Blog</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <a href={`/blog/${post.slug}`}>{post.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
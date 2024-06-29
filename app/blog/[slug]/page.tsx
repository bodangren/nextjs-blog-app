export default function BlogPost({ params }: { params: { slug: string } }) {
    return (
      <div>
        <h1>Blog Post: {params.slug}</h1>
        <p>This is where the content for {params.slug} would go.</p>
      </div>
    );
  }
const BlogPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-medium mb-6 tracking-tight">Blog Title</h1>
      <span className="text-xl mb-6 block">{new Date().toDateString()}</span>
      <p>Content goes here</p>
    </div>
  );
};

export default BlogPage;

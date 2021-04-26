const BlogList = ({ blogs, title, handleDelete }) => {
    return (
        <div className="blog-list">
            <h1> { title } </h1>
            {blogs.map((blog) => {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <h1> { blog.title } </h1>
                        <p> Written by { blog.author }</p>
                        <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>      
                    </div>
                );
            })}
        </div>
    )
}

export default BlogList;
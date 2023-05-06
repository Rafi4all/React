const BlogList = ({ blogs, titles, deletePost }) => {

    return (

        <div className="blog-list">
            <h2>{titles}</h2>
            {blogs.map((blogs) => (

                <div className="blog-preview" key={blogs.id}>

                    <div>
                        <h2>{blogs.title}</h2>
                        <p> Written by {blogs.id}</p>
                        <button onClick={() => deletePost(blogs.author)}>Delete blog</button>
                    </div>

                </div>
            ))}

        </div>
    );
}

export default BlogList;
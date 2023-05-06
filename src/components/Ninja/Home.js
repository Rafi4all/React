import { useState } from "react";
import '../../index.css'
import BlogList from "./BlogList";
const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Big website', body: 'human', author: 'mario', id: 1 },
        { title: 'Medum website', body: 'Animal', author: 'john', id: 2 },
        { title: 'Small website', body: 'Non-living', author: 'mario2', id: 3 }
    ]);

    const deletePost = (author) => {
        const newBlogs = blogs.filter(blog => blog.author !== author);
        setBlogs(newBlogs);
    }


    return (
        <div className="home">
            <BlogList blogs={blogs} titles='All Blogs' deletePost={deletePost} />
            { /* BlogList blogs={blogs.filter((marioBlog) 
            => marioBlog.author === 'mario')} titles='Mario blogs' /> 
              */}

        </div>

    );
}

export default Home;
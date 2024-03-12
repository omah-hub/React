import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
   
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data)
            })
    });

    return ( 
        <div className="home">
            {/* <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} /> */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'chioma')} title="Chioma's blogs" /> */}
            
        </div>
     );
}
 
export default Home;
import { useState, useEffect } from 'react'
import BlogList from '../components/BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name, setName] = useState("mario");

    const handleDelete = (id) => {
        setBlogs(blogs.filter((blog) => blog.id !== id))
    }

    // runs at every render  
    // usually used to fetch data
    // can add dependecny to th  useEffect
    useEffect(() => {
        console.log('use effect ran for blogs');
        console.log(blogs);
    }, [blogs]);

    useEffect(() => {
        console.log('ran for name')
    }, [name])

    return (  
        <div className="home">
            <BlogList blogs={blogs} 
            title="All Blogs !!!" 
            handleDelete={handleDelete}/>
            <button onClick={() => setName("Tyler")}>Set the Name</button>
        </div>
    );
}
 
export default Home;
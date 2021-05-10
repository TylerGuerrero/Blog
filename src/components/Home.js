import BlogList from '../components/BlogList';
import useFetch  from '../hooks/useFetch';

const Home = () => { 
    const { data, isLoading, error }  = useFetch('http://localhost:8000/blogs');
    
    // need to use conditional renderin  with http request because
    // the BlogList will be rendered before it even has the blogs
    return (  
        <div className="home">
            { isLoading && <div>Loading ...</div> }
            { error && <div> { error } </div>}
            { data && <BlogList blogs={data} title="All Blogs !!!" />}
        </div>
    );
}
 
export default Home;
import useFetch from '../hooks/useFetch';
import { useHistory, useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`)
    const history = useHistory();

    const handleClick = async () => {
        await fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE',
        }).then(() => {
            history.push("/");
        })
    }

    return (
        <div className="blog-details">
            { isLoading && <p>It is Loading...</p> }
            { blog && <article> 
                <h2> { blog.title } </h2>
                <p>Written by { blog.article } </p>
                <div> { blog.body } </div>
                <button onClick={handleClick}> Delete</button>
            </article> }
            { error && <p>There is an error... </p> }
        </div>
    );  
}

export default BlogDetails
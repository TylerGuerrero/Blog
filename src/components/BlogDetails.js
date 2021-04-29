import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`)

    return (
        <div className="blog-details">
            { isLoading && <p>It is Loading...</p> }
            { blog && <article> 
                <h2> { blog.title } </h2>
                <p>Written by { blog.article } </p>
                <div> { blog.body } </div>
            </article> }
            { error && <p>There is an error... </p> }
        </div>
    );  
}

export default BlogDetails
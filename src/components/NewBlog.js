import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const NewBlog = () => {
    const [author, setAuthor] = useState("mario");
    const [body, setBody] = useState("");
    const [title, setTitle] = useState("");
    const [isLoading, setisLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const blog = {author, title, body};
        
        setisLoading(true);

        await fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            setisLoading(false);
            // negtive goes n times
            // positive goes foward n times
            // history.go(-1);
            history.push("/");
            console.log('blog added')
        })
    }

    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:
                    <input type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                </label>
                <label>Blog Body:
                    <textarea required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    />
                </label>

                <label>Blog author:
                    <select 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                    </select>
                </label>
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Adding Blog...</button>}
            </form>
        </div>    
    );
}

export default NewBlog
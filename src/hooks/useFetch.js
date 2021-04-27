import { useState, useEffect } from 'react';    

// a custom hook has to start with use or else it wont work
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // runs at every render  
    // usually used to fetch data
    // can add dependecny to th  useEffect
    useEffect(() => {
        fetch(url)
        .then(res => { 
            if (!res.ok) {
                throw new Error('Could not fetch data for that resource')
            }

            return res.json();
        })
        .then((data) => {
            setData(data);
            setIsLoading(false);
            setError(null);
        })
        .catch(err => {
            setIsLoading(false);
            setError(err.message);
        })
    }, [url]);

    return { data, isLoading, error};
}

export default useFetch;
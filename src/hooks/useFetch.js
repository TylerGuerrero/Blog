import { useState, useEffect } from 'react';    

// a custom hook has to start with use or else it wont work
const useFetch = async (url) => {
    const abortController = new AbortController();

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // runs at every render  
    // usually used to fetch data
    // can add dependecny to the useEffect
    useEffect(() => {
        await fetch(url, {signal: abortController.signal})
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
            if (err.name === 'AbortError') {
                console.log('fetch aborted');
            } else {
                setIsLoading(false);
                setError(err.message);
            }
        })

        // fires only when component gets unmounted
        // just simply have to return a function
        // when running abort it goes to the catch err
        // when running it will still and try to update the state
        // if you dont catch it 
        return () => abortController.abort();
    }, [url]);

    return { data, isLoading, error};
}

export default useFetch;
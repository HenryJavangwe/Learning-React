// import { url } from 'inspector';
import {useState, useEffect} from 'react'

const useFetch = (url) => {
    
    const [data, setData]= useState(null);
    const [loading, setLoading]= useState(true);
    const [err, setErr]= useState(null);

    useEffect(() => {
        // Using an abort controller to stop the fetch. Don't name the const AbortController because then the obj will not function as desired and throw errors.
        const abortCont = new AbortController();

        // Using settimeout to simulate the real world delay in fetch so we can best develop and counter measures
         setTimeout(()=>{
            fetch(url, {signal: abortCont.signal}) //pass the controller as an arguement to associate it with the fetch.
            .then(res => {
                // console.log(res);
                if(!res.ok){
                    throw Error('Could not fetch data for that resource');
                }
                return res.json();
            })
            .then( data =>{
                    // console.log(data);
                    setData(data);
                    setLoading(false);
                    setErr(null);
            })
            .catch(err => {
                // console.log(err.message);
                // We run a conditional statement here. If the error is one caused by us then don't update state, else catch the error and update state
                if(err.name === 'AbortError'){
                    console.log('Fetch Aborted')
                }
                else{
                    setLoading(false);
                    setErr(err.message);
                }
            })
        }, 1000);
        // We'll return the abort in UseEffect to abort the fetch if the component is unmounted 
        return () => abortCont.abort();
    },[url]);

    return {data, loading, err }
}

export default useFetch;

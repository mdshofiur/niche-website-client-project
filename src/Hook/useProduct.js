import {useEffect,useState} from 'react';


const useProduct = () => {
    const [service, setservice] =  useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setservice(data));
    }, [])

    return [service]
};

export default useProduct;
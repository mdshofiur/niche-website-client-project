import {useEffect,useState} from 'react';


const useProduct = () => {
    const [service, setservice] =  useState([]);


    useEffect(() => {
        fetch('https://intense-ridge-65532.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setservice(data));
    }, [])

    return [service]
};

export default useProduct;
import { useEffect, useState } from 'react';

const useFetchCats = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=100&page=1&api_key=${process.env.API_KEY}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setCats(data);
            });
    }, []);

    return { cats };
};

export default useFetchCats;

import { useState, useEffect } from 'react';

interface Housing {
    "id": string,
    "title": string,
    "cover": string,
    "pictures": string[],
    "description": string,
    "host": {
        "name": string,
        "picture": string
    },
    "rating": string | number,
    "location": string,
    "equipments": string[],
    "tags": string[]
};

interface ApiResponse {
    housings?: Housing[],
    error?: Array<{message: string}> | unknown,
    loading: boolean
};


export const useFetchHousing: Function = (): ApiResponse => {
    const [housings, setHousings] = useState<ApiResponse["housings"] | []>([]);
    const [loading, setLoading] = useState<ApiResponse["loading"]>(false);
    const [error, setError] = useState<ApiResponse["error"]>(null);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const response: Response = await fetch("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json");
                const data = await response.json();
                setHousings(data);
            }
    
            catch(err) {
                console.log("Une erreur est survenue", err);
                setError(err);
            }
    
            finally {
                setLoading(false);
            }
        })();
    }, []);

    return {housings, loading, error};
};
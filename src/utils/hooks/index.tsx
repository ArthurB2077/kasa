import { useState, useEffect } from 'react';
import { ApiResponse, Housing } from '../../types';

export const useFetchHousing = (): ApiResponse => {
    const [housings, setHousings] = useState<ApiResponse["housings"] | []>([]);
    const [loading, setLoading] = useState<ApiResponse["loading"]>(false);
    const [error, setError] = useState<ApiResponse["error"]>(null);

    useEffect((): void => {
        (async (): Promise<void> => {
            try {
                setLoading(true);
                const response: Response = await fetch("./logements.json", {
                    headers : { 
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                     }
            
                  });
                const data: Housing[] = await response.json();
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
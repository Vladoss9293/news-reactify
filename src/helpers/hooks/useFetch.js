import { useEffect, useState } from "react";

export const useFetch = (fetchFunction, params) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const stringParams = params ? new URLSearchParams(params).toString() : '';

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const result = await fetchFunction(params);
                setData(result);
                result?.status == 'ok' ? setIsLoading(false) : setIsLoading(true);
            } catch (error) {
                setError(error);
            }
        })();
    }, [fetchFunction, stringParams])

    return {data, isLoading, params}
}
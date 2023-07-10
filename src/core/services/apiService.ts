type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type ApiParams = {
    method: HttpMethod;
    url: string;
    body?: object;
};

const API_URL = "http://localhost:8000/api/v1/";

const apiService = async ({method, url, body}: ApiParams): Promise<object | null> => {
    try {
        const options: RequestInit = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (method !== "GET" && body) {
            options.body = JSON.stringify(body);
        }

        const response = await fetch(API_URL + url, options);
        if (response.ok) {
            return await response.json();
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
    return null;
};

export default apiService;
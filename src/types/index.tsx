export interface Housing {
    "id": string,
    "title": string,
    "cover": string,
    "pictures": string[],
    "description": string,
    "host": {
        "name": string,
        "picture": string
    },
    "rating": string,
    "location": string,
    "equipments": string[],
    "tags": string[]
};

export interface ApiResponse {
    housings: Housing[] | [],
    error: Array<{message: string}> | unknown,
    loading: boolean
};
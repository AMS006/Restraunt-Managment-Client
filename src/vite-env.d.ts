/// <reference types="vite/client" />
type Credentials = {
    email: string;
    password: string;
}

interface User {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    role: string,
    tenant: Tenant
}

interface Tenant {
    id: number,
    name: string,
    address: string
}

interface ErrorResponse {
    errors: {
        location: string;
        message: string;
        path: string;
        type: string;
    }[];
}

interface FilterValues {
    search?: string;
    role?: string;
}

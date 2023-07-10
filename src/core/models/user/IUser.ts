export interface IUser {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    role: string;
    tokens: number;
    is_active: boolean;
    is_accept_terms: boolean;
    created_profile: string;
}
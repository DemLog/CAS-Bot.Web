export interface SearchUserListProps {
    users: {id: number, username: string, role: string}[];
    onSelect: (user: {id: number, username: string, role: string}) => void;
}
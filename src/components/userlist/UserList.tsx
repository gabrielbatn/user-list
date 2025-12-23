import type { User } from "../../types/User";
import { UserItem } from "./UserItem";

interface UserListProps {
    users: User[]
}

export function UserList({ users }: UserListProps) {
    if (users.length === 0) {
        return <p>Nenhum usuário encontrado.</p>
    }

    return(
        <ul style = {{ listStyle: 'none', padding: 0, marginTop: 16 }}>
            {users.map(user => (
                <UserItem user={user}/>
            ))}
        </ul>
    )
}
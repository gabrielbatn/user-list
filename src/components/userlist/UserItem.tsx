import type { User } from "../../types/User";

interface UserItemProps {
    user: User
}

export function UserItem({ user }: UserItemProps) {

    return(
        <li key={user.id} style={{ padding: 12, borderBottom: '1px solid #e0e0e0',}}>
                    <div style={{ fontWeight: 'bold' }}>{user.name}</div>
                    <div style={{ fontSize: 14, color: '#555' }}>{user.email}</div>
                    <div style={{ fontSize: 12, marginTop: 4 }}>Status: {user.status === 'ACTIVE' ? 'Ativo' : 'Inativo'}</div>
                </li>
    )
}
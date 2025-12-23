export type UserStatus = 'ACTIVE' | 'INACTIVE'

export interface User {
    id: number
    name: string
    email: string
    status: UserStatus
}
import type { User } from "../types/User";

export async function fetchUsers(): Promise<User[]> {
    //Chamar Api com algo do tipo:
    // const response = await fetch('/users')

    // if(!response.ok) {
    //     throw new Error("Erro ao recuperar usuários")
    // }

    // return response.json()
    




    await new Promise(resolve => setTimeout(resolve, 2000)) //simular tempo de espera de retorno da API
    return [ 
        { "id": 1, "name": "Maria Silva", "email": "maria@email.com", "status": "ACTIVE" },
        { "id": 2, "name": "José Silva", "email": "jose@email.com", "status": "INACTIVE" },
        { "id": 3, "name": "Antonio Lara", "email": "antoniolara123@email.com", "status": "INACTIVE" },
        { "id": 4, "name": "Gabriel Batista", "email": "gabs@email.com", "status": "ACTIVE" },
        { "id": 5, "name": "Ocimar Soares", "email": "tiko@email.com", "status": "INACTIVE" },
        { "id": 6, "name": "Zayra Nascimento", "email": "janan@email.com", "status": "ACTIVE" }
    ]
}
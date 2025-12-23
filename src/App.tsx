import { useEffect, useMemo, useState } from 'react'
import './App.css'
import type { User } from './types/User'
import { fetchUsers } from './services/userService'
import { UserList } from './components/userlist/UserList'
import { SearchInput } from './components/SearchInput'
import { StatusFilter } from './components/StatusFilter'

type StatusFilter = 'ALL' | 'ACTIVE' | 'INACTIVE'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const [search, setSearch] = useState<string>('')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('ALL')

  useEffect(() => {
    async function loadUsers() {
      try {
        setLoading(true)
        setError(null)

        const data = await fetchUsers()
        setUsers(data) 
      } catch (err) {
        //Adicionaria uma trativa especifica pros possíveis erros. (Componente separado)
        setError('Não foi possível carregar os usuários')
      } finally {
        setLoading(false)
      }
    }
    loadUsers()
  }, [])

  //memo para evitar renderizacoes desnecessarias
  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      const matchSearch = 
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
      
      const matchStatus = statusFilter === 'ALL' || user.status === statusFilter

      return matchSearch && matchStatus
    })
  }, [users, search, statusFilter])

  return (
    <div style={{ minHeight: '100vh', minWidth: '1vw',display: 'flex', justifyContent: 'center', backgroundColor: '#f5f5f5', padding: 40}}>
      <div style = {{ width: '100%', backgroundColor: '#fff', padding: 24, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0.0.1)'}}>
       <h1>Listagem de usuários</h1>

       <div style={{ display: 'flex', justifyContent: 'space-between', padding: 16, gap: '10px'}}>
          <SearchInput
            value={search}
            onChange={setSearch}
          />

          <StatusFilter
            value={statusFilter}
            onChange={setStatusFilter}
          />
       </div>

       {loading && <p>Carregando usuários...</p>}
       {error && <p style={{ color: 'red' }}>{error}</p>}

       {!loading && !error && (
        <UserList users={filteredUsers} />
       )}
      </div>
    </div>
  )
}

export default App

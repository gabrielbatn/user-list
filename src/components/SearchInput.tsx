interface SearchInputProps {
    value: string
    onChange: (value: string) => void
}

export function SearchInput({ value, onChange }: SearchInputProps) {
    return(
        <div style={{ marginBottom: 12, flexGrow: 2}}>
            <label>
                Buscar usuário
                <input
                    type="text"
                    placeholder="Nome ou e-mail"
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    style={{ display: 'block', width: '-webkit-fill-available', marginTop: 4}}
                />
            </label>
        </div> 
    )
}
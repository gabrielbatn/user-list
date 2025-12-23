type StatusFilterValue = 'ALL' | 'ACTIVE' | 'INACTIVE'

interface StatusFilterProps {
    value: StatusFilterValue
    onChange: (value: StatusFilterValue) => void
}

export function StatusFilter({ value, onChange}: StatusFilterProps) {
    return(
        <div style={{ marginBottom: 16}}>
            <label>
                Status
                <select
                    value={value}
                    onChange={e => onChange(e.target.value as StatusFilterValue)}
                    style={{ display: 'block', width: '100%', marginTop: 4}}
                >
                    <option value='ALL'>Todos</option>
                    <option value='ACTIVE'>Ativos</option>
                    <option value='INACTIVE'>Inativos</option>
                </select>
            </label>
        </div>
    )
}
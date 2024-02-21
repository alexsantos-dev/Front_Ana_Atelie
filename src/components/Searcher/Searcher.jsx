import { useState } from 'react'
import { Container } from './Style.jsx'
import { searchProductByKeyWord } from '../../services/Search.service.js'

export function Searcher() {
    const [value, setValue] = useState('')

    function handleChange(event) {
        setValue(event.target.value)
    }

    async function handleSearch() {
        try {
            if (value.trim() !== '') {
                const formattedSearchValue = value.trim().replace(/\s+/g, '+')
                const products = await searchProductByKeyWord(formattedSearchValue)
                console.log(products)
            }
        } catch (error) {
            console.error('Ocorreu um erro ao buscar produtos:', error)
        }
    }

    return (
        <Container type="search" placeholder='O que você procura?' required value={value} onChange={handleChange} onKeyDown={(e) => { if (e.key === 'Enter') { handleSearch() } }} />
    )
}

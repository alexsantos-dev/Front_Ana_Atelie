import axios from 'axios'

const baseUrl = 'http://localhost:3000/api'

export async function searchProductByKeyWord(formattedSearchValue) {
    try {
        const response = await axios.get(`${baseUrl}/products_name?key=${formattedSearchValue}`)
        return response
    } catch (error) {
        console.error('Ocorreu um erro ao buscar produtos:', error)
        throw error
    }
}

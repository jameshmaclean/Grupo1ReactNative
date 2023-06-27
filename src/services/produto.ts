import { api } from './api'

export const listProduct = async () => {
    const lista = await api.get("produto/lista")
    return lista;
}

export const ProductById = async (id : number) => {
    const produto = await api.get("produto/lista/"+id)
    return produto;
}
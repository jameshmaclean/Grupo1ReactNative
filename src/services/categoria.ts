import { api } from './api'

export const listCateg = async () => {
    const lista = await api.get("categoria/lista")
    return lista;
}

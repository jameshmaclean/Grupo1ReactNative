import React from 'react-native'
import { Button } from 'react-native'
import { listProduct } from '../../services/produto'

const TestRequi = () => {

    const requi = async () => {
        const {data} = await listProduct()
        console.log('resposta: ', data)
        return data
    }

    return (
        <Button title='Produto Lista' onPress={requi}></Button>
    )
}

export default TestRequi;
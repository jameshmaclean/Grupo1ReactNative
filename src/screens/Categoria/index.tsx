import React from 'react'
import {View, Text} from 'react-native'
import {Button, ButtonText, Container} from './styles'

const Categoria = () => {
    return (
        <Container>
          <Button>
            <ButtonText>Categoria 1</ButtonText>
          </Button>
          <Button>
            <ButtonText>Categoria 2</ButtonText>
          </Button>
          <Button>
            <ButtonText>Categoria 3</ButtonText>
          </Button>
          <Button>
            <ButtonText>Categoria 4</ButtonText>
          </Button>
        </Container>
      );
    };
    


export default Categoria
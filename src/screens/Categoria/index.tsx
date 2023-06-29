import React from "react";
import { View, Text } from "react-native";
import { Button, ButtonText, Container } from "./styles";
import { api } from "../../services/api";
import { listCateg } from "../../services/categoria";

const Categoria = () => {
  const [categoria, setCategoria] = React.useState([]);

  const listaCategorias = async () => {
    const response = await listCateg();
    setCategoria(response.data);
  };

  React.useEffect(() => {
    listaCategorias();
  }, []);

  return (
    <Container>
      {categoria.map((cat) => {
        return (
          <Button key={cat.categoriaId}>
            <ButtonText>{cat.nome}</ButtonText>
          </Button>
        );
      })}
    </Container>
  );
};

export default Categoria;

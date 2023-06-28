import styled from "styled-components/native"
import global from "../themes/global"

export const ContainerFoto = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 20px;
    height: 80px;
`

export const TextoDrawer = styled.Text`
    font-size: 17px;
    font-weight: 600;
    color: ${global.primary};
`

export const ImagemDrawer = styled.Image`
   width: 70px;
    height: 70px;
    border-radius: 100px;
    margin-left: 20px;
`
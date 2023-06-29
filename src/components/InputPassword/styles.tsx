import styled from "styled-components/native";
import global from "../../themes/global";
import { tt } from "../../themes/themeType";

export const Input = styled.TextInput`
    width: 80%;
    margin-bottom:5%;
    background-color: ${(props : tt) => props.theme.background};
    border-radius: 5px;
    align-self: center;
    padding-left: 5%;
`
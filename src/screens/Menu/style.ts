import styled from 'styled-components/native'

export const MainContainer = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  padding-top: 20%;
  background-color: #EDEDED;
`
export const SearchBox = styled.View`
  height: 45px;
  width: 80%;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  border-radius: 50px;
  background-color: #FFFFFF;
`

export const InputSearch = styled.TextInput`
  height: 45px;
  width: 80%;
  padding-left: 10px;
  justify-content: center;
  background-color: #FFFFFF;
`
export const CarrosselContainer = styled.View`
  margin-top: 7%;
  flex-direction: row;
  align-self: center;
  gap: 20px;
  width: 100%;
`

export const CarrouselImg = styled.Image`
  height: 200px;
  width: 200px;
`
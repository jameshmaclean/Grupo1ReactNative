import React from 'react-native'
import { ReactComponentElement, createContext, useContext, useState } from "react";

export const CurTheme = createContext({})

const CurThemeProvider = ({children} : {children : ReactComponentElement}) => {
    const [light, setLight] = useState(true)

    return(
    <CurTheme.Provider value={{ light, setLight }}>
      {children}
    </CurTheme.Provider>
    )
}

export default CurThemeProvider;
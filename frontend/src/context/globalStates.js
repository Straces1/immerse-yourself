import {createContext, useContext, useState} from 'react';

const GlobalVarsContext = createContext();

export const GlobalVarsProvider = ({children}) => {

    const [menuOpener, setMenuOpener] = useState('closed')

    return (
        <GlobalVarsContext.Provider
            value={{
                menuOpener,
                toggleMenuOpener: () => setMenuOpener(menuOpener === 'closed' ? 'open' : 'closed')
            }}
        >
            {children}
        </GlobalVarsContext.Provider>
    );
};

export const useOpener = () => useContext(GlobalVarsContext);
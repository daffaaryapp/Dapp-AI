import { createContext } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {


    const  onSent = async (prompt) => {
        await run(prompt)
    }

    onSent('buatkan planning umkm')

    const contextValue = {

    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider
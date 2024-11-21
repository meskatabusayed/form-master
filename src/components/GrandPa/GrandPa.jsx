import { createContext } from "react";
import Aunt from "../Aunt/Aunt";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css"

export const assestContext = createContext("Gold Ring");

const GrandPa = ({gift}) => {

    

    return (
        <div className="grandPa">
            <h2>Grand Pa</h2>
            
                <assestContext.Provider value="Gold Ring">
                <section className="flex">
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunt></Aunt>
                </section>
                </assestContext.Provider>
           
        </div>
    );
};

export default GrandPa;
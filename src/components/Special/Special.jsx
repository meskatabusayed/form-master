import { useContext } from "react";
import { assestContext } from "../GrandPa/GrandPa";


const Special = ({name , gift}) => {

    const gift2 = useContext(assestContext);

    return (
        <div>
            {name}
            <p>Peyesi - {gift}</p>
            <p>gf {gift2}</p>
        </div>
    );
};

export default Special;
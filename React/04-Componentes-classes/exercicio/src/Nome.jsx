import PropTypes from "prop-types";
import { useState } from "react";

const estilo = { 
    color: 'blue', 
    borderBotton: 'black solid 2px', 
    textAlign: 'center' ,
    
    
    }; 

function Nome ( { pessoa } )
{
    const [ nome, setNome ] = useState( pessoa );

    return (
        <div style={estilo} className="pessoa">
            <h1>{nome}</h1>
        </div>
    )
}

Nome.propTypes = { pessoa: PropTypes.string };
Nome.defaultProps = { pessoa: "Aluno" };

export default Nome;
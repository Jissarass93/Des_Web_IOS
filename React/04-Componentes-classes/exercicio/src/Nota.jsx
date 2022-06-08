import { Component } from 'react';
const estilo = { 
    color: 'blue', 
    
    backgroundColor: '#E6E6E6',
    margin:'auto',
    textAlign:'center',
        
    }; 
    
function Nota( { notas } ) {

    return (
        <table border={1} style={estilo}>
            <tr>
                <th>Nota</th>
                <th>Media</th>
            </tr>
            <tr>
                <td>{ notas.join(" ") }</td>
                <td>{ notas.reduce( (anterior, atual) => anterior + atual ) / 4 }</td>
            </tr>
            {/* <tr>
                <td>7,9,8,6</td>
                <td>5</td>
            </tr> */}
        </table >
    )

}

export default Nota;
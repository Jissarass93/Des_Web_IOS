import { Component } from 'react';

function Nota( { notas } ) {

    return (
        <table border={1}>
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
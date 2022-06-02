import PropTypes from 'prop-types'

function BoasVindas (props){
    return(
        <section style={{color:'blue',textAlign:'center',fontSize:'40px'}}>
            <h1 >Bem Vindo {props.nome}</h1>
            <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Facere itaque maxime vero doloremque, et possimus! At dignissimos exercitationem autem ullam quam fugiat facilis eius! Delectus vel minima exercitationem fugit voluptates.</p>
        </section>
    )
}

BoasVindas.propTypes = {nome: PropTypes.string}
BoasVindas.defaultProps = {nome:'nome'}

export default BoasVindas



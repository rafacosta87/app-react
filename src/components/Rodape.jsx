function Rodape({
    cor = 'blue',
    corLetra = "white"
}) {

    return (

        <p
            style={{
                height: "60px", backgroundColor: cor, color: corLetra, display: "flex", justifyContent: "center", alignItems: "center", padding: "2px", marginBottom: "0px"
            }}
        >
            Feito por Rafael Costa
        </p>

    )
}

export default Rodape
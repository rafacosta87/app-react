function Cabecalho({
    cor = 'blue',
}) {

    return (
        <div
            style={{
                backgroundColor: cor,
                color: "white"
            }}
        >
            <h1 style={{ marginTop: "0px"}}>Meu Site</h1>
            <p >Seja bem-vindo a nossa plataforma!</p>
            {/* {children} */}
        </div>
    )
}

export default Cabecalho
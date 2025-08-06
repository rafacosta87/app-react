import { useState } from "react"

function Conteudo() {

    const [contador, setContador] = useState(0)

    const eventClickIncrement = () => {
        setContador(contador + 1)
    }

    const eventClickDecrement = () => {
        setContador(contador - 1)
    }

    return (<>
        <button
            /*        style={
                {
                    width: "100px", 
                    height: "70px",
                    backgroundColor: "#8b0000",
                    color: "white",
                    borderRadius: "8px",
                    fontSize: "1.3rem",
                    cursor: "pointer"
                    }
                    }*/

            className="w-[100px] h-[70px] bg-[#8b0000] text-white rounded-sm text-xl cursor-pointer"
            onClick={eventClickDecrement}
        >
            -
        </button>
        <span>{contador}</span>
        <button
            /*        style={
                {
                    width: "100px", 
                    height: "70px",
                    backgroundColor: "#8b0000",
                    color: "white",
                    borderRadius: "8px",
                    fontSize: "1.3rem",
                    cursor: "pointer"
                    }
                    }*/

            className="w-[100px] h-[70px] bg-[#008b00] text-white rounded-sm text-xl cursor-pointer"
            onClick={eventClickIncrement}
        >
            +
        </button>

    </>
    )

}

export default Conteudo
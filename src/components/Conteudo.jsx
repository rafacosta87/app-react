import { useState } from "react"

function Conteudo() {

    const [contador, setContador] = useState(0)
    const eventClickIncrement = () => {
        setContador(contador + 1)
    }
    const eventClickDecrement = () => {
        setContador(contador - 1)
    }
    const [count, setCount] = useState(0.5)
    const eventIncrement = () => setCount(prev => prev + 0.1)                                                       //essa linha e a de baixo é uma outra forma de fazer o que esta sendo feito na linha 6 e 9, ou seja alterando o valor de estadp do count(l 12)
    const eventDecrement = () => setCount(prev => prev - 0.1)
    const tamanhoFonte = count + "rem"
    const [color, setColor] = useState('black')
    const colorChange = () => {
        setColor(color === 'black' ? 'red' : 'black');
    }

    return (<>
     <button                                                                                                        //botão que ira capturar os eventos de onClick(clique mouse botão esquerdo), onContextMenu(clique mouse botão direito) e onKeyDown(clique botão do teclado). E imprimira o evento no console da pagina.
        onClick={e => console.log(e)}
        onContextMenu={e => console.log(e)}
        onKeyDown={(e) => console.log(e)}
      >
        Alarme Evento
      </button>

        <div className="flex flex-row items-center justify-center">

            <button

                className="w-[100px] h-[70px] bg-[#eb1515] text-white rounded-sm text-xl cursor-pointer"
                onClick={eventClickDecrement}
            >
                -
            </button>
            <span className="w-[100px] flex items-center justify-center text-[1.3rem]">{contador}</span>
            <button


                className="w-[100px] h-[70px] bg-[#008b00] text-white rounded-sm text-xl cursor-pointer"
                onClick={eventClickIncrement}
            >
                +
            </button>

        </div> 

        <div className="flex flex-col items-center justify-center">

            <button


                className="w-[100px] h-[70px] bg-[#0b0505] text-white rounded-sm text-xl cursor-pointer"
                onClick={eventDecrement}
            >
                -
            </button>
            <h1 className={`w-[100px] h-[80px] flex items-center justify-center ` }
            style={{fontSize: tamanhoFonte }}>Texto</h1>
            <button


                className="w-[100px] h-[70px] bg-[#83320a] text-white rounded-sm text-xl cursor-pointer"
                onClick={eventIncrement}
            >
                +
            </button>

        </div>

        <div className="flex flex-col items-center justify-center">
            <h1 style={{ color: color, fontSize: "1.3rem" }}>Cor Atual</h1>
            <button className="w-[120px] h-[70px] bg-[hsl(296,88%,52%)] text-white rounded-sm text-xl cursor-pointer p-1"
             onClick={colorChange}>
                Mudar Cor
             </button>
        </div>

    </>
    )

}

export default Conteudo
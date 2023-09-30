import { Link } from "react-router-dom";

export default function Erro(){

    return(

       // Os fragment sao tags geradas dentrop do react para resolver problemas que quero colocar os elementos na tela mas nao quero um container envolvendo a estrutura
       // Cada componente retorna apenas um elemento
       
        <>

        <h1>PÁGINA NÃO ENCONTRADA</h1>
        <p>Voltar para a página inicial : <span> <Link to= "/">VOLTAR</Link>  </span></p>
        
        
        </>
    )
}
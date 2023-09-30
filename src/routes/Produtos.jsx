import {useState, useEffect} from "react"  
import ModalActions from "../components/ModalActions"
export default function Produtos(){


    //Sera um array de produtos o backend que vai dar o formato a esse array
    const [produtosApi, setProdutosApi] = useState([])
    const [open, setOpen] = useState(false);
    const [prodID, setProdID] = useState(0);


    //quero que ele faça uma requisição http
    useEffect(
        ()=>{
            fetch("http://localhost:5000/produtos") 
            .then((resp)=> resp.json())   //transformando esse cara em json
            .then((resp)=> setProdutosApi(resp)) //esse cara recebe todos os dados que pegamos da nossa requisição, dentro do nosso useState
            .catch((error)=> console.log(error)) //se der erro eu quero que me mostre no console 

            //vem via requisição http via navegador e precisamos usar json 

            //requisição para o endereço da nossa api que criamos la no json server 
        },[open]
    )

    const handleDelete = (id)=>{
        fetch(`http://localhost:5000/produtos/${id}`,{method: 'delete'})
        .then(()=> (window.location = '/produtos'))
        .catch((error)=> console.log(error))
    }
    

    const handleEdit = (id)=>{
        setProdID(id);
        setOpen(true);
    }

    return(
        <section>
            <button onClick={()=> setOpen(true)}>Cadastrar Jogo</button>
            <h1>Lista de Jogos</h1>

            {open ? <ModalActions open={open} id={prodID} setOpen={setOpen} /> : ""}

          

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Editar / Excluir</th>
                    </tr>
                </thead>
                <tbody>
                {produtosApi.map((prod)=> (
                    <tr key={prod.id}>
                        <td>{prod.nome}</td>
                        <td>{prod.desc}</td>
                        <td>{prod.preco}</td>
                        <td>
                            <button onClick={handleDelete.bind(this, prod.id)}  >Deletar</button> |   <button onClick={()=>handleEdit(prod.id)}>Editar</button>
                        </td>
                    </tr>
                ))
                }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4">Lista de Jogos em promoção!!!</td>
                    </tr>
                </tfoot>
            </table>
        </section>
    )
}
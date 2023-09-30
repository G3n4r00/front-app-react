
import {useRef} from "react"
import Produtos from "./Produtos";
 
export default function Login(){


    const user = useRef();
    const password = useRef();

    const getUser = sessionStorage.getItem("userData");
    const getPassword = sessionStorage.getItem("senhaData"); 

//funções 

const handleSubmit =() =>{
    if(user.current.value === "Admin" && password.current.value =="123456"){


        //Autenticação com token 
        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);

        sessionStorage.setItem("userData", "Admin");
        sessionStorage.setItem("senhaData", token)

    }else{
        alert("Usuario ou senha invalido!!")
    }
}


    return(
        <section>
            {/* if ternario */}

            {getUser && getPassword ? (
                <Produtos/>

            ):(
                <form onSubmit={handleSubmit}>
                    <label htmlFor="usuario">USUARIO:</label>
                    <input type="text" ref={user} />
                    <label htmlFor="password">SENHA:</label>
                    <input type="password" ref={password} />
                    <input type="submit" value="Login"/>
                </form>

            )}



        </section>
    )
}
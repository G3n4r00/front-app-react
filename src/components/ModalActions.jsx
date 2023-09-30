import styles from "../css/ModalActions.module.css";

export default function ModalActions(props){

    if(props.open){
        return(
            <div className={styles.container}>
                <h1>PRODUTOS</h1>
                <button onClick={()=> props.setOpen(false)}>CLOSE-MODAL</button>

                <div>
                    <form>
                        <fieldset>
                            <legend>Dados do Produto</legend>
                            <div>
                                <label htmlFor="idNome">Nome</label>
                                <input type="text" name="nome" id="idNome"/>

                                <label htmlFor="idDesc">Descrição</label>
                                <input type="text" name="desc" id="iddesc"/>

                                <label htmlFor="idPreco">Preço</label>
                                <input type="number" name="preco" id="idpreco"/>
                            </div>
                            
                            <div>
                                <button>EDITAR</button>
                            </div>

                        </fieldset>
                    </form>
                </div>





            </div>
        )
    }
}

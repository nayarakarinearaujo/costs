import Input from '../form/Input'; 

import styles from './ProjectForm.module.css';

function ProjectForm() {
    return (
        <form className={styles.form}>
            <div>
                <Input 
                    type="text" 
                    text="Nome do Projeto" 
                    name="name" 
                    placeholder="Insira o nome do projeto" 
                />
            </div>
            <div>
                <Input 
                    type="number" 
                    text="Orçamento do Projeto" 
                    name="budget" 
                    placeholder="Insira o orçamento total" 
                />
            </div>
            <div>
                <select name='category_id'>
                    <option disabled selected>Selecione a categoria</option>
                </select>
            </div>
            <div>
                <input type='submit' value='Criar projeto' />
            </div>
        </form>
    );
}

export default ProjectForm;

import { useHistory } from 'react-router-dom';

import ProjectForm from '../projects/ProjectForm';
import styles from './NewProject.module.css';

function NewProject() {

    const history = useHistory();

    function createPost(project) {
        // Inicializar custo e serviços
        project.cost = 0;
        project.services = [];

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(project)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Redirecionar para outra página após a criação do projeto, se necessário
            history.push('/projects');
        })
        .catch(err => console.log(err));
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btnText="Criar Projeto" handleSubmit={createPost} />
        </div>
    );
}

export default NewProject;

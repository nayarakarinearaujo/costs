import React from 'react';
import styles from './Select.module.css';

function Select({ text, name, options, handleOnChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select
                name={name}
                id={name}
                onChange={handleOnChange}
                value={value || ''}  // Certificando-se que o valor do select seja atualizado
            >
                <option value="">Selecione uma opção</option>
                {options && options.length > 0 ? (
                    options.map((option) => (
                        <option value={option.id} key={option.id}>
                            {option.name}
                        </option>
                    ))
                ) : (
                    <option disabled>Carregando categorias...</option> // Exibe somente se as opções estiverem vazias
                )}
            </select>
        </div>
    );
}

export default Select;

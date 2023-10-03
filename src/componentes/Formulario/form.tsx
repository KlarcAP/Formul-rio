import React from 'react';

const Form = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="Tarefa">O que voce vai fazer hoje?</label>
        </div>
        <div>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="Informe a tarefa"
            required
          />
        </div>
        <div>
          <label htmlFor="tempo"></label>
        </div>
        <div>
          <label htmlFor="duracao">Duração</label>
        </div>
        <div>
          <input
            type="time"
            name="time"
            step="1"
            id="time"
            min="00:00"
            max="23:59"
          />
        </div>
        <div>
          <label htmlFor="nomeMae">Nome da Mãe</label>
        </div>
        <div>
          <input type="text" id="nomemae" required />
        </div>
        <label>Macho</label>
        <input type="radio"/>
        <label>Femea</label>
        <input type="radio"/>
      </form>
    </div>
  );
};

export default Form;

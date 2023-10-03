import { FC } from 'react';
import Btn from './componentes/Botao/btn';
import Form from './componentes/Formulario/form';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <Form />
      <Btn />
    </div>
  );
};

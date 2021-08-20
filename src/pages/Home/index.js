import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as style from './styled';

export default function Home() {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);

  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then((response) => {
        const repositories = response.data;
        const repositoriesName = [];

        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem(
          'repositoriesName',
          JSON.stringify(repositoriesName)
        );
        setErro(false);
        history.push('/repositories');
      })
      .catch((err) => {
        setErro(true);
      });
  }

  return (
    <style.Container>
      <style.Content>
        <style.Input
          className='usuarioInput'
          placeholder='Usuário'
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <style.Button type='button' onClick={handlePesquisa}>
          Pesquisar
        </style.Button>
      </style.Content>
      {erro ? (
        <style.ErrorMessage>
          Ocorreu um erro. Tente novamente.
        </style.ErrorMessage>
      ) : (
        ''
      )}
    </style.Container>
  );
}

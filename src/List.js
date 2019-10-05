import React, {useState, useEffect} from 'react';
import Profile from './Profile';
import styled from 'styled-components';
import axios from 'axios';

function List() {
  const [list, setList] = useState(false)
  const [select, setSelect] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://unieloo-sandbox.herokuapp.com/teste')
      const dataFetch = result.data;
      setList(dataFetch);
    };
    if(!list){
      fetchData();
    }
  }, [list]);

  const Wrapper = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    flex-wrap:wrap;
    flex-content:space-around;
    align-content:flex-start;
  `
  return(
    <div>
      <label>Categoria de Profissionais</label>
      <select onChange={(event) => setSelect(event.target.value)}>
          <option value="todos">Todos</option>
          <option value="Dentista">Dentista</option> 
          <option value="Nutricionista">Nutricionista</option>
          <option value="Psicologia">Psicologo</option>
      </select>
      <Wrapper> 
        {
          list?list.data.map(profile=>(<Profile key={profile.id} type ={select} prof={profile}/>)):'montando'
        }
      </Wrapper>
   
    </div>
  )
}

export default List;
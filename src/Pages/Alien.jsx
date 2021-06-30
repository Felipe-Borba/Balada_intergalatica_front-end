import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { api, search } from "../Api/api";
import { getAge } from "../Components/asset";

const Item = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px 0;
  display: flex;
  //justify-content: space-around;
  padding: 10px;
  font-size: 12px;
  min-width: 10cm;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 100px;
  justify-content: flex-start;
  .text {
    font-weight: bold;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1%;
`;

const Btn = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 10px 20px;
  max-width: 200px;
  font-weight: 600;
  border: 2px solid white;
  background: #a7b307;
  color: white;
  cursor: pointer;
`;

function Alien() {
  const [data, setData] = useState([]);
  let history = useHistory();

  useEffect(() => {
    search("/alien", setData);
  }, []);

  return (
    <Container>
      <h1>Aliens cadastrados</h1>

      <Btn href="/addAlien">Adicionar alien</Btn>

      {data.map((item) => {
        const handleClick = async () => {
          api
            .delete(`/alien/${item.alienId}`)
            .then((response) => {
              history.go(0);
            })
            .catch((error) => {
              if (error.response) {
                alert(error.response.data.error);
              }
              console.log(error.config);
            });
        };

        return (
          <Item key={item.alienId}>
            <Text>
              <span className="text">Id: {item.alienId}</span>
              <span>Nome: {item.name}</span>
              <span>Idade: {getAge(item.earthBirthday)}</span>
              <span>{item.banned ? "banido !" : ""}</span>
              <Btn onClick={handleClick}>excluir</Btn>
            </Text>
          </Item>
        );
      })}
    </Container>
  );
}

export default Alien;

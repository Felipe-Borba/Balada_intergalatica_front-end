import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { search } from "../Api/api";

const Item = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
  min-width: 10cm;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
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
`;

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    search("/alien", setData);
  }, []);

  return (
    <Container>
      <h1>Aliens cadastrados</h1>

      <Btn href="/addAlien">Adicionar alien</Btn>

      {data.map((item) => {
        console.log(item);
        return (
          <Item key={item.alienId}>
            <Text>
              <span className="text">Id: {item.alienId}</span>
              <span>Nome: {item.name}</span>
              <span>Idade: {getAge(item.earthBirthday)}</span>
              <span>{item.banned ? "banido !" : ""}</span>
            </Text>
          </Item>
        );
      })}
    </Container>
  );
}

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

export default Home;

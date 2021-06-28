import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { api, search } from "../Api/api";

const Item = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px 0;
  display: flex;
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

function Home() {
  const [data, setData] = useState([]);
  let history = useHistory();

  useEffect(() => {
    search("/register", setData);
  }, []);

  return (
    <Container>
      <h1>Lista de aliens na festa</h1>

      <Btn href="/checkIn">check in</Btn>

      {data.map((item) => {
        const handleClick = async () => {
          api
            .delete(`/register/${item.alienId}`)
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
          <Item key={item.registerId}>
            <Text>
              <span>Id do alien: {item.alienId}</span>
              <span>Id da balada: {item.partyId}</span>
              <span>checkIn: {item.checkIn}</span>
              <Btn onClick={handleClick}>check out</Btn>
            </Text>
          </Item>
        );
      })}
    </Container>
  );
}

export default Home;

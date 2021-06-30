import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { searchBacklog } from "../Api/api";
import { getAge } from "../Components/asset";

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

function Backlog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    searchBacklog(setData);
  }, []);

  return (
    <Container>
      <h1>Backlog</h1>

      {data.map((item) => {
        return (
          <Item key={item.backlogId}>
            <Text>
              <span>Id do alien: {item.alienId}</span>
              <span>Nome do alien: {item.alien.name}</span>
              <span>
                Idade terráquea do alien: {getAge(item.alien.earthBirthday)}
              </span>

              <span>Id da balada: {item.partyId}</span>
              <span>Nome da balada: {item.party.name}</span>

              <span>check in: {item.checkIn}</span>
              <span>check out: {item.checkOut}</span>
            </Text>
          </Item>
        );
      })}
    </Container>
  );
}

export default Backlog;

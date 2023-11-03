import React from "react";
import { Dropdown } from "react-bootstrap";
import styled from "styled-components";
const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  height: 15vh;
`;
const Menus = ({ category, setNow }) => {
  return (
    <MenuBox>
      <Dropdown.Menu
        show
        style={{ width: "100vw", display: "flex", textAlign: "center" }}>
        {category.map((v, i) => (
          <Dropdown.Item
            key={i}
            eventKey="1"
            onClick={(e) => {
              setNow(v);
            }}>
            {v}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </MenuBox>
  );
};

export default Menus;

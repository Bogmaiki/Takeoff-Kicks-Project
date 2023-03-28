import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

function DropdownMenu({ title, items }) {
  return (
    <NavDropdown title={title} id={title}>
      {items.map((item, index) => (
        <NavDropdown.Item key={index}>{item}</NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}

export default DropdownMenu;
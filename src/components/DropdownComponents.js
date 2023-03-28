import React from 'react';
import DropdownMenu from './DropdownMenu';

function DropdownComponents() {
  const menItems = ['Jordan 1', 'Jordan 4', 'Dunks', 'Dunks SB'];
  const womenItems = ['Jordan 1', 'Jordan 4', 'Dunks', 'Dunks SB'];
  const policyItems = ['Privacy Policy', 'Refund Policy', 'Shipping Policy', 'Terms Of Service'];
  
  return (
    <div className="d-flex">
      <DropdownMenu title="Men" items={menItems} />
      <DropdownMenu title="Women" items={womenItems} />
      <DropdownMenu title="Policy" items={policyItems} />
    </div>
  );
}

export default DropdownComponents;
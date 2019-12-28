import React, { useState } from "react";
import { ButtonFloatingAction } from "../../components/Button";
import IconAdd from "../../icons/IconAdd";
import Drawer from "../../components/Drawer";

function TransactionDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ButtonFloatingAction
        Icon={IconAdd}
        label="Add transactions"
        onClick={() => setIsOpen(true)}
      />
      <Drawer
        title="Add transactions"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        Wow, look at this!
      </Drawer>
    </>
  );
}

export default TransactionDrawer;

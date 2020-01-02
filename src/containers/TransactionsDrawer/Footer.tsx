import React from "react";
import IconAdd from "../../icons/IconAdd";
import { ButtonPrimary } from "../../components/Button";

const Footer: React.FC = () => (
  <ButtonPrimary className="budget-drawer--footer" onClick={() => {}}>
    <IconAdd /> Edit transactions
  </ButtonPrimary>
);

export default Footer;

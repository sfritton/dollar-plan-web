import React from "react";
import IconAdd from "../../../icons/IconAdd";
import { LinkPrimary } from "../../../components/Button/Link";

const Footer: React.FC = () => (
  <LinkPrimary to="/new-budget" className="budget-drawer--footer">
    <IconAdd /> Create new budget
  </LinkPrimary>
);

export default Footer;

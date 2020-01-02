import React from "react";
import { getCentString } from "../../util/currency";

interface Props {
  description: string;
  amount: number;
}

const TransactionDetails = ({ description, amount }: Props) => (
  <div className="transaction--details">
    <div>{description}</div>
    <div>${getCentString(amount)}</div>
  </div>
);

export default TransactionDetails;

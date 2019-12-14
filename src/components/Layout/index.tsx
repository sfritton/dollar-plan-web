import React from "react";
import "./layout.css";

const Grid: React.FC = ({ children }) => (
  <div className="layout--grid">{children}</div>
);

const Header: React.FC = ({ children }) => (
  <div className="layout--header">{children}</div>
);

const Content: React.FC = ({ children }) => (
  <div className="layout--content">{children}</div>
);

const Layout = {
  Grid,
  Header,
  Content
};

export default Layout;

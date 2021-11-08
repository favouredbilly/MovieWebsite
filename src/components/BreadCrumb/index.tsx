import React from "react";

import { Link } from "react-router-dom";

import { Wrapper, Content } from "./BreadCrumb.styles";

//types

type Props ={
  moviTitle: string
};
const BreadCrumb: React.FC <Props> = ({ moviTitle }) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{moviTitle}</span>
    </Content>
  </Wrapper>
);

export default BreadCrumb;

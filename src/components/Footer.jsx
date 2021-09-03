import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
const Wrapper = styled.div`
  background-color: #2f343d;
  height: 100%;
  padding: 50px;
`;
const Container = styled.div`
  color: white;
  display: inline-block;
  width: 50%;
  padding-bottom: 150px;
  border-right: 1px solid white;
  p {
    font-size: 30px;
  }
  .icon {
    font-size: 25px;
    margin-right: 20px;
  }
`;
const AsideContainer = styled.div`
  display: inline-block;
  width: 50%;
`;
class Footer extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <Container>
          <p>You can also follow us on :</p>
          <FontAwesomeIcon className="icon" icon={faFacebook} />
          <FontAwesomeIcon className="icon" icon={faInstagram} />
          <FontAwesomeIcon className="icon" icon={faTwitter} />
        </Container>
        <AsideContainer></AsideContainer>
      </Wrapper>
    );
  }
}

export default Footer;

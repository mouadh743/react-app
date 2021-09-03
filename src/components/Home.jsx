import React, { Component } from "react";
import SportBenefits from "./SportBenefits";
import Quote from "./Quote";
import styled from "styled-components";
import "../styles/global.css";
import MohamedKlay from "../images/boxe_med_ali.jpg";
const Wrapper = styled.div`
  padding: 40px;
`;
const Q = styled.q`
  font-family: "TitilliumWeb";
  font-size: 30px;
`;
const Img = styled.img`
  margin: 0 100px;
  width: 15%;
  border-radius: 30%;
`;
const Cite = styled.cite`
  font-size: 20px;
  margin-left: 50%;
`;
class Home extends Component {
  render() {
    return (
      <Wrapper>
        <article>
          <div>
            <Q>
              I don't count my situps,I only start counting once it starts
              hurting
            </Q>{" "}
            <Img src={MohamedKlay} alt="MohamedKlay" />
            <Cite className="blockquote-footer">Mohamed'Ali</Cite>
          </div>
          <p>
            Taking part in sport can help us feel fitter, healthier and mentally
            strong, and that is just the start of it. Sport can also be fun,
            especially when played as part of a team or with family or friends
          </p>
        </article>
        <SportBenefits />
        <Quote />
      </Wrapper>
    );
  }
}

export default Home;

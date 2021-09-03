import React, { Component } from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  justify-content: space-around;
`;
const Container = styled.article`
  box-shadow: 5px 10px 20px 2px black;
  border-radius: 20px;
  width: 30%;
  padding: 20px;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
const Title = styled.h2`
  flex-basis: 100%;
  text-align: center;
`;
class SportBenefits extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Great Benefits of Playing Sport</Title>
        <Container>
          <h3>Better Sleep</h3>
          <p>
            Fast Company suggests that exercise and sport triggers chemicals in
            the brain that can make you feel happier and relaxed.
          </p>
        </Container>
        <Container>
          <h3>A strong heart</h3>
          <p>
            Your heart is a muscle and needs frequent exercise to help it keep
            fit and healthy. A healthy heart can pump blood efficiently around
            your body.
          </p>
        </Container>
        <Container>
          <h3>Reduces Stress</h3>
          <p>
            When you are physically active your mind gets a chance to unplug
            from daily stresses and strains of life.
          </p>
        </Container>
        <Container>
          <h3>Develop Stronger Relationships</h3>
          <p>
            {" "}
            When you are physically active your mind gets a chance to unplug
            from daily stresses and strains of life
          </p>
        </Container>
      </Wrapper>
    );
  }
}

export default SportBenefits;

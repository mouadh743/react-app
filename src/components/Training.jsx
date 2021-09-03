import { React, Component } from "react";
import styled from "styled-components";
import fitnessConsultation from "../images/fitnessConsultation.jpeg";
import teamWorkout from "../images/teamWorkout.jpg";
import personnalTraining from "../images/personnalTraining.jpeg";
import { Link } from "react-router-dom";
const Wrapper = styled.div``;

const ContainerDescription = styled.div`
  text-align: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 50px auto;
`;
const Title = styled.h1``;
const Text = styled.p`
  text-align: left;
  margin: auto 140px;
`;
const Article = styled.div`
  background-color: white;
  box-shadow: 2px 5px 20px 2px black;
  width: 300px;
  height: 500px;
`;
const Capsule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled.img`
  width: 100%;
`;
const TitleHeader = styled.h3`
  text-align: center;
`;
const Description = styled.p`
  padding: 10px;
`;

class Training extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <ContainerDescription>
          <Title>Coaching & Training Services</Title>
          <Text>
            Whether you’re new to working out or a fitness pro, we’re here to
            provide a variety of training options, guidance and friendly support
            to help you stay on track and reach your goals. Get to a healthier
            place today!
          </Text>
        </ContainerDescription>
        <Container>
          <Article>
            <Img src={fitnessConsultation} alt="fitnessConsultation"></Img>
            <Capsule>
              <TitleHeader>Fitness Consultation</TitleHeader>
              <Description>
                Through a short survey, conversation and a movement assessment,
                our team will prescribe the perfect program to get you started
                and on track to meet your fitness goals.
              </Description>
              <Link
                className="btn btn-warning"
                to="/training/fitnessConsultation"
              >
                Learn more
              </Link>
            </Capsule>
          </Article>
          <Article>
            <Img width="275px" src={teamWorkout} alt=" teamWorkout "></Img>
            <Capsule>
              <TitleHeader>Team Workout</TitleHeader>
              <Description>
                Full-body workouts designed to build strength and endurance,
                using the energy of the group and the expertise of the certified
                personal trainer to maximize your results.
              </Description>
              <a href="" className="btn btn-warning ">
                Learn more
              </a>
            </Capsule>
          </Article>
          <Article>
            <Img src={personnalTraining} alt=" personnalTraining "></Img>
            <Capsule>
              <TitleHeader>Personnal training</TitleHeader>
              <Description>
                One-on-one personalized workouts with a certified personal
                trainer designed to make you stronger from the inside out.
              </Description>
              <a href="" className="btn btn-warning mt-5">
                Learn more
              </a>
            </Capsule>
          </Article>
        </Container>
      </Wrapper>
    );
  }
}

export default Training;

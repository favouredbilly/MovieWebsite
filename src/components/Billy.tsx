import React from "react";

//components

import Thumb from "./Thumb";

//image

import PORTRAIT from "./../images/portrait.jpg";
import BILI from "./../images/Bili2.jpg";
//styles

import { Wrapper, Content, Text } from "./Billy.styles";

const Billy: React.FC = () => (
  <Wrapper backdrop={PORTRAIT}>
    <Content>
      <Thumb
        image={BILI}
        clickable={false}
        //alt="movie-thumb"
      />

      <Text>
        <h1>Biliaminu Jimoh</h1>
        <h3>Full stack software developer</h3>
        <p>
          I am a full stack software developer that have developed a great
          understanding in various technologies both in software development and
          embedded software development side. I have a huge drive in deepening
          my knowledge in this field, which is why I have focused a lot of my
          efforts in gaining a professional proficiency as a software developer.
          I am extremely technology-focused person that is AWS cloud practioner
          certified and holds a Master’s degree in Embedded Computing from the
          University of Turku.
        </p>

        <div className="rating-bili">
          <div>
            <h3>Contact me:</h3>
            <h5>biliaminu.jimoh@integrify.io</h5>
          </div>
        </div>
      </Text>
    </Content>
  </Wrapper>
);

export default Billy;

import React from "react";

//styles

import { Wrapper, Content, Text } from "./HeroImage.styles";
//type 

type Props = {

  image: string;
  title : string;
  text: string;
}
;// const HeroImage = (prop) => (
//   <Wrapper image={prop.image}>
//     <Content>
//       <Text>
//         <h1>{prop.title}</h1>
//         <p>{prop.text}</p>
//       </Text>
//     </Content>
//   </Wrapper>
// );

//this is same as above but a better way

const HeroImage: React.FC<Props> = ({ image, title, text }) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);
export default HeroImage;

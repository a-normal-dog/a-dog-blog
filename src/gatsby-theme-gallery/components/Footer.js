import React, { useState } from "react";
import useSiteMetadata from "gatsby-theme-gallery/src/hooks/useSiteMetadata";
import styled from "@emotion/styled";
import add from "@a-normal-cat/add-some-numbers";

const DogContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Button = styled.button`
  border-radius: 6px;
  border: none;
  background: #6E6D70;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 14px;
  font-family: 'Roboto', sans-serif;
  color: #DFDEDF;
`

const Footer = () => {
  const siteMetadata = useSiteMetadata();
  const [dogsLiked, setDogsLiked] = useState(0)

  return (
    <footer>
      <DogContainer>
        <Button onClick={() => {
          setDogsLiked(add(dogsLiked, 1))
        }}>
          Click to like cats
        </Button>
        <span><span role='img' aria-label='dog'>🐈</span>'s liked: {dogsLiked}</span>
      </DogContainer>
      
      <p>{`© ${new Date().getFullYear()} ${siteMetadata.author}`}</p>
    </footer>
  );
};

export default Footer;
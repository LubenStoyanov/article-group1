import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ReactArticle from './assets/ReactArticle/ReactArticle'
import Main from './assets/ReactArticle/Main'
import Carousel from './assets/ReactArticle/Carousel'

import {
  Box,
  Button,
  Center,
  Heading,
  Flex,
  Spacer,
  Text,
  VStack,
  Wrap,
  WrapItem,
  StackDivider,
  Divider,
  Container,
} from "@chakra-ui/react";
import { Transition } from "react-transition-group";
import { Link } from "react-router-dom";
import Article from "./components/Article";

import { useEffect, useRef, useState } from "react";

const duration = 500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

function App() {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    setInProp(true);
  }, []);
  return (

    <Flex
      flexDir="column"
      className="App"
      gap={10}
      color="gray.200"
      as="main"
      height="100vh"
      bg="blue.800"
    >
      <Container maxWidth="120ch">
        <VStack gap={5}>
          <Heading as="h1" size="4xl">
            DevPub
          </Heading>
          <Text fontSize="2xl">Get the latest news of the tech world.</Text>
        </VStack>
        <Divider orientation="horizontal" my={10} />
        <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
          {(state) => (
            <Wrap
              justify="center"
              ref={nodeRef}
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <WrapItem>
                <Article title={"Kingsley"} />
              </WrapItem>
              <WrapItem>
                <Article title={""} />
              </WrapItem>
              <WrapItem>
                <Article title={""} />
              </WrapItem>
              <WrapItem>
                <Article title={""} />
              </WrapItem>
              <WrapItem>
                <Article title={"Luben"} />
              </WrapItem>
            </Wrap>
          )}
        </Transition>
      </Container>
    </Flex>
  );
}

export default App;

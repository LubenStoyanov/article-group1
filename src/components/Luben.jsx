import { Container, Heading, Box, Text } from "@chakra-ui/react";
import React from "react";

export default function ExpressServer() {
  return (
    <Box bg="blue.700" height="100vh">
      <Container color="gray.200" maxWidth="80ch">
        <Heading as="h1" size="2xl" textAlign="center">
          Express Server
        </Heading>
        <Box bg="blue.600" mt={10}>
          <pre>
            <code>
              {`
 1 import express from "express";
 2
 3 const app = express();
 4 const port = 3000;
 5
 6 app.get("/", (req, res) => res.send("Hello there!"));
 7
 8 app.listen(port, () =>
    console.log(\`Server running on http:/\/localhost:3000\`))
          `}
            </code>
          </pre>
        </Box>
        <Text as="p" mt={10}>
          First, you need to initialize your project via{" "}
          <code>npm init -y</code>. The <code>-y</code> indicates that you are
          agree to a basic setup of the package.json file. Then you need to
          install express with <code>npm install express</code>. <br />
          The first line of code imports express, so you can use it in your
          project...
        </Text>
      </Container>
    </Box>
  );
}

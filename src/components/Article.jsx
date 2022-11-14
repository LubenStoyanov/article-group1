import { VStack, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

export default function Article({ title }) {
  return (
    <article>
      <VStack w="xs" h="xs" bg="blue.200" spacing="20" align="center">
        <Heading as="h2" mt={14} size="2xl">
          {title ? title : "Article"}
        </Heading>
        <Link to={`/${title.toLowerCase()}`}>
          <Button size="lg">Read</Button>
        </Link>
      </VStack>
    </article>
  );
}

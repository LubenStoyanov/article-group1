import { VStack, Heading, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

export default function Article({ title }) {
  return (
    <VStack
      w="xs"
      h="xs"
      bg="blue.700"
      spacing="10"
      align="center"
      as="article"
    >
      <Heading as="h2" mt={14} size="xl">
        {title ? title : "Article"}
      </Heading>
      <Text fontSize={18}>Learn about X.</Text>
      <Link to={`/${title.toLowerCase()}`}>
        <Button size="lg" color="blue.600">
          Read
        </Button>
      </Link>
    </VStack>
  );
}

import React from "react";
import { VStack, Text, Box } from "@chakra-ui/react";

const SummaryOutput = ({ summary }) => {
  return (
    <VStack align="start" w="80%" spacing={4}>
      {/* <Heading as="h2" size="xl">
        Summary:
      </Heading> */}
      <Box
        w="100%"
        borderWidth="1px"
        borderRadius="lg"
        p={4}
        borderColor="gray.200"
      >
        {summary ? (
          <Text fontSize="lg">{summary}</Text>
        ) : (
          <Text fontSize="lg">No summary available</Text>
        )}
      </Box>
    </VStack>
  );
};

export default SummaryOutput;

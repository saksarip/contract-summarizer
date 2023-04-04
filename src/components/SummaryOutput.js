import React from "react";
import { VStack, Text, Box } from "@chakra-ui/react";

const SummaryOutput = ({ summaryLines }) => {
  return (
    <VStack align="start" w="80%" spacing={4}>
      <Box
        w="100%"
        borderWidth="1px"
        borderRadius="lg"
        p={4}
        borderColor="gray.200"
      >
        {summaryLines && summaryLines.length > 0 ? (
          summaryLines.map((line, index) => (
            <React.Fragment key={index}>
              {index % 2 === 1 && <Text fontSize="lg">{`\u00A0`}</Text>}
              <Text fontSize="lg">{line}</Text>
            </React.Fragment>
          ))
        ) : (
          <Text fontSize="lg">No summary available</Text>
        )}
      </Box>
    </VStack>
  );
};

export default SummaryOutput;

import React, { useState } from "react";
import TextInput from "./components/TextInput";
import { Box, VStack, Heading, Button } from "@chakra-ui/react";
import SummaryOutput from "./components/SummaryOutput";

function App() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const summarize = async () => {
    const openai = new OpenAIApi(configuration);
    try {
      const response = await openai.createChatCompletion({
        max_tokens: 1024,
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Summarize the following contract in 2 or more paragr: ${text}`,
          },
        ],
      });
      console.log(response.data.choices[0].message.content);
      setSummary(response.data.choices[0].message.content);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <VStack align="center" spacing={7}>
      <Heading as="h1" size="2xl" marginTop={10}>
        Contract Summarizer
      </Heading>
      <Box w="80%">
        <TextInput value={text} onChange={handleChange} />
        <Button colorScheme="blue" onClick={summarize} mt={4}>
          Summarize
        </Button>
      </Box>
      <SummaryOutput summary={summary} />
    </VStack>
  );
}

export default App;

import React, { useState } from "react";
import TextInput from "./components/TextInput";
import { Box, VStack, Heading, Button, Spinner } from "@chakra-ui/react";
import SummaryOutput from "./components/SummaryOutput";
import FollowUpQuestion from "./components/FollowUpQuestion";

function App() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [summaryLines, setSummaryLines] = useState([]);
  const [followUpQuestion, setFollowUpQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleFollowUpChange = (e) => {
    setFollowUpQuestion(e.target.value);
  };

  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const askFollowUp = async () => {
    setLoading(true);
    try {
      const response = await openai.createChatCompletion({
        max_tokens: 1024,
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `The contract: ${text}\nSummary: ${summary}\nQuestion: ${followUpQuestion}`,
          },
        ],
      });

      setLoading(false);
      setSummaryLines([
        ...summaryLines,
        `Q: ${followUpQuestion}`,
        `A: ${response.data.choices[0].message.content}`,
      ]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const summarize = async () => {
    setLoading(true);
    if (followUpQuestion) {
      askFollowUp();
    } else {
      try {
        const response = await openai.createChatCompletion({
          max_tokens: 1024,
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: `Summarize the following contract in 2 or more paragraphs: ${text}`,
            },
          ],
        });
        setLoading(false);
        console.log(response.data.choices[0].message.content);
        setSummary(response.data.choices[0].message.content);
        setSummaryLines([response.data.choices[0].message.content]);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <VStack align="center" spacing={8}>
      <Heading as="h1" size="2xl" marginTop={10}>
        Contract Summarizer
      </Heading>
      <Box w="80%">
        <TextInput value={text} onChange={handleChange} />
        <FollowUpQuestion
          value={followUpQuestion}
          onChange={handleFollowUpChange}
        />
        <Button
          colorScheme="blue"
          onClick={summarize}
          mt={4}
          isLoading={loading}
          spinner={<Spinner />}
        >
          {followUpQuestion ? "Ask Follow-up Question" : "Summarize"}
        </Button>
      </Box>
      <SummaryOutput summaryLines={summaryLines} />
    </VStack>
  );
}

export default App;

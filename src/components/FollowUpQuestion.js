// components/FollowUpQuestion.js
import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const FollowUpQuestion = ({ value, onChange }) => {
  return (
    <FormControl id="follow-up-question" mt={4}>
      <FormLabel>Follow-up Question</FormLabel>
      <Input
        value={value}
        onChange={onChange}
        placeholder="Enter your follow-up question here"
        size="lg"
        borderRadius="md"
      />
    </FormControl>
  );
};

export default FollowUpQuestion;

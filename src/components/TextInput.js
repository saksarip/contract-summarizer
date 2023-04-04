import React from "react";
import { FormControl, Textarea } from "@chakra-ui/react";

const TextInput = ({ value, onChange }) => {
  return (
    <FormControl id="contract-text" mt={4}>
      <Textarea
        value={value}
        onChange={onChange}
        placeholder="Enter your contract text here"
        size="lg"
        resize="none"
        borderRadius="md"
        style={{ height: "400px" }} // Increase the default height
      />
    </FormControl>
  );
};

export default TextInput;

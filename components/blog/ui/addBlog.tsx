import React from "react";
import { Input, Stack, Heading, Box, Textarea, Button } from "@chakra-ui/react";

const AddBlog = () => {
  return (
    <Stack spacing={3} paddingTop="5px">
      <Heading size="lg" fontSize="50px" textAlign="center">
        Add Blog
      </Heading>
      <Box p={4}>
        <Input variant="outline" placeholder="Title" />
      </Box>
      <Box p={4}>
        <Textarea variant="outline" placeholder="Content" className="content" />
      </Box>
      <Box p={4}>
        <Button
          size="md"
          height="48px"
          width="200px"
          border="2px"
          colorScheme="green"
          borderColor="green.300"
        >
          Submit
        </Button>
      </Box>
    </Stack>
  );
};

export default AddBlog;

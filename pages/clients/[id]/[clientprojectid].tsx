import { Box, Heading } from "@chakra-ui/react";
import React from "react";

function SelectedClientProject() {
  return (
    <Box>
      <Heading as={"h1"} fontWeight={"bold"}>
        Hello from Clients/[id]/[clientprojectid]
      </Heading>
    </Box>
  );
}

export default SelectedClientProject;

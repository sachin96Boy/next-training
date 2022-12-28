import { Box, Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

function ClientProjects() {
  

  const router = useRouter();

  const loadProjectsHandler = () => {
    // load data...
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "Max", clientprojectid: "projectA" },
    });
  };
  return (
    <Box>
      <Heading as={"h1"} fontWeight={"bold"}>
        Hello from Clients/[id]
      </Heading>
      <Button onClick={loadProjectsHandler}>Load Projects</Button>
    </Box>
  );
}

export default ClientProjects;

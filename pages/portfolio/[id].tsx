import { Box, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

function ProtafolioId() {
  const router = useRouter();

  const { id } = router.query;

  console.log(id);
  return (
    <Box>
      <Heading as={"h1"} fontWeight={"bold"}>
        Hello from Portfolio/[id]
      </Heading>
    </Box>
  );
}

export default ProtafolioId;

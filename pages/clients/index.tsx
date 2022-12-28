import { Box, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function Clients() {
  const [clients, setClients] = React.useState<any>([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setClients(data));
  }, []);

  return (
    <Box>
      <Heading as={"h1"} fontWeight={"bold"}>
        Hello from Clients
      </Heading>
      <UnorderedList>
        <ListItem>
          <Link href="/clients/Max">Max</Link>
        </ListItem>
        <ListItem>
          <Link href="/clients/Manu">Manu</Link>
        </ListItem>
        {clients.map((client: any) => (
          <ListItem key={client.id}>
            <Link href={`/clients/${client.name}`}>{client.name}</Link>
            {/* <Link href={{
              pathname: '/clients/[id]',
              query: { id: client.name }
            }}>{client.name}</Link> */}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}

export default Clients;

import React from "react";
import {useDisclosure} from "@mantine/hooks";


export default function IndexPage() {

    const [opened, { toggle }] = useDisclosure();

    return (
      <>
          <h1>index</h1>
      </>
  );
}

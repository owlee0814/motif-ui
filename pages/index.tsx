import {AppShell, Burger, Button, Group} from "@mantine/core";
import React, {useState} from "react";
import {useDisclosure} from "@mantine/hooks";
import {HeaderSimple} from "../component/HeaderSimple/HeaderSimple";


export default function IndexPage() {

    const [opened, { toggle }] = useDisclosure();

    return (
      <>
          <h1>index</h1>
      </>
  );
}

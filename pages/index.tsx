import React, {useEffect} from "react";
import {useDisclosure} from "@mantine/hooks";
import {useRouter} from "next/router";

export default function IndexPage() {

    const [opened, { toggle }] = useDisclosure();
    const router = useRouter()

    useEffect(() => {
        router.push('/home')
    }, []);

    return (
      <></>
  );
}

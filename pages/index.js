import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Heading,Box, Text, Input, HStack, Center} from "@chakra-ui/react";

import {useState} from "react";

export default function Home() {

  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadFile = async function() {
    const body = new FormData();
    body.append("file", image);
    const response = await fetch("/api/file", {
      method: "POST",
      body
    });
  };
  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  return (
    <Box>
      <Center bg='grey' h='800px' >
      <Heading>
        <Text>
          MYURL
        </Text>
        {/* <Image src={createObjectURL}></Image> */}
        <img src={createObjectURL} width='300' height='500'/>
        <h4>select Image</h4>
        <HStack>
        <Input size='md' type="file" name="myImage" onChange={uploadToClient} />
        <Button onClick={uploadFile}>
          UPLOAD FILE
        </Button>
        </HStack>
        
      </Heading>
      </Center>
    </Box>
  )
}

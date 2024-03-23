import React, { useState, useEffect } from "react";
import { Box, Text, Button, Image, Link, Heading, Stack, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { FaPlus, FaMinus, FaRandom } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      onOpen();
    }, 5000);
    return () => clearInterval(timer);
  }, [onOpen]);

  return (
    <Box bg="red.500" color="yellow.300" p={4}>
      <Stack spacing={4} align="center">
        <Heading size="3xl" color="purple.500" fontFamily="Comic Sans MS">
          Welcome to the Unusable Website!
        </Heading>
        <Image src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbHV0dGVyZWQlMjB3ZWJzaXRlJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MTEyMjM2OTd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="" width="400px" border="5px solid green" />
        <Text fontSize="xs" color="orange.200">
          This website is designed to be as unusable as possible. Enjoy the terrible user experience!
        </Text>

        <Stack direction="row" spacing={1}>
          <Button leftIcon={<FaMinus />} size="xs" colorScheme="pink" onClick={() => setCount(count - 1)}>
            Decrease
          </Button>
          <Text fontFamily="Impact" fontSize="4xl">
            {count}
          </Text>
          <Button rightIcon={<FaPlus />} size="xs" colorScheme="orange" onClick={() => setCount(count + 1)}>
            Increase
          </Button>
        </Stack>

        <Input placeholder="Search for nothing..." bg="gray.800" />

        <Stack direction="row" spacing={1}>
          <Link href="#" color="teal.200">
            Useless Link 1
          </Link>
          <Link href="#" color="teal.200">
            Useless Link 2
          </Link>
          <Link href="#" color="teal.200">
            Useless Link 3
          </Link>
        </Stack>

        <Button size="lg" colorScheme="green" fontFamily="Papyrus" leftIcon={<FaRandom />}>
          Click me for no reason!
        </Button>
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="purple.900" color="yellow.100">
          <ModalHeader>Annoying Pop-up!</ModalHeader>
          <ModalCloseButton size="xs" />
          <ModalBody>
            <Text>This pop-up serves no purpose but to annoy you!</Text>
            <Button size="sm" colorScheme="red" mt={4} onClick={onOpen}>
              Open Another Pop-up!
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;

import "./App.css";
import {
  Center,
  VStack,
  Box,
  Button,
  Heading,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import FormInput from "./Components/FromInput";
import List from "./Components/List";
import { useState } from "react";

function App() {
  const userDataList = [];
  const [userList, setUserList] = useState(userDataList);

  const [error, setError] = useState(null);

  const submitedDataHandler = (userData) => {
    setUserList((prevState) => {
      return [userData, ...prevState];
    });
  };

  const deletingItemHandler = (key) => {
    setUserList((prevState) => {
      return prevState.filter((obj) => obj.key !== key);
    });
  };

  const invalidAge = (
    <Box w={500}>
      <Heading bg="purple" color="white" m={3}>
        Invalid Input
      </Heading>
      <Flex m={3} bg="white">
        <Box>Please submit a number larger than zero</Box>
        <Button m={3}>Okay</Button>
      </Flex>
    </Box>
  );

  return (
    <Box>
      <ErrorModal error={error} isOpen={error} onClose={() => setError(null)} />
      <Center h="full" w="full" minH={800} bg="black">
        <VStack>
          <FormInput
            onSubmitData={submitedDataHandler}
            onError={(error) => setError(error)}
          />
          {userList.length && (
            <Box w={500} color="black" bg="white" p={3} borderRadius="10px">
              {userList.map((usersInput) => (
                <List
                  onDeleteItem={deletingItemHandler}
                  userName={usersInput.userName}
                  userAge={usersInput.userAge}
                  id={usersInput.key}
                  key={usersInput.key}
                />
              ))}
            </Box>
          )}
        </VStack>
      </Center>
    </Box>
  );
}

function ErrorModal({ isOpen, onClose, error }) {
  if (!error) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{error.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{error.body}</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default App;

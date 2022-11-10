import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const FormInput = (props) => {
  const [userName, setUserName] = useState("");
  const userChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const [userAge, setUserAge] = useState();
  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const submitChangeHandler = () => {
    const userData = {
      userName: userName,
      userAge: userAge,
      key: Math.random(),
    };

    if (
      !userData.userAge ||
      Number.parseInt(userData.userAge) <= 0 ||
      userData.userName.trim().length === 0
    ) {
      setUserName("");
      setUserAge("");

      const erroTitle =
        userData.userName.trim().length === 0
          ? "Invalid User Name"
          : "Invalid User Age";

      const errorBody =
        userData.userName.trim().length === 0
          ? "Invalid user name"
          : "Invalid user age";

      return props.onError({ title: erroTitle, body: errorBody });
    }

    props.onSubmitData(userData);
    setUserName("");
    setUserAge("");
  };

  return (
    <>
      <FormControl w={500} color="black" bg="white" p={3} borderRadius="10px">
        <FormLabel my={3} fontWeight="bold">
          Username
        </FormLabel>
        <Input type="text" value={userName} onChange={userChangeHandler} />
        <FormLabel my={3} fontWeight="bold">
          Age(Years)
        </FormLabel>
        <Input type="number" value={userAge} onChange={ageChangeHandler} />
        <Button
          type="submit"
          bg="purple.600"
          my={3}
          onClick={submitChangeHandler}
        >
          Add User
        </Button>
      </FormControl>
    </>
  );
};

export default FormInput;

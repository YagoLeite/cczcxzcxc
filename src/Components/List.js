import { Box } from "@chakra-ui/react";

const List = (props) => {
  const deleteItemHandler = () => {
    props.onDeleteItem(props.id);
  };

  return (
    <Box
      w={450}
      color="black"
      bg="white"
      p={3}
      border="solid"
      onClick={deleteItemHandler}
      m={2}
    >
      {`${props.userName} (${props.userAge} years old)`}
    </Box>
  );
};

export default List;

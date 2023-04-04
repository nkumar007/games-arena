import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortByOrder = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        OrderBy: Relevence
      </MenuButton>
      <MenuList>
        <MenuItem>jhdcjh</MenuItem>
        <MenuItem>dnbcbwd,c</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortByOrder;

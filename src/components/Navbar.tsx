import { HStack, Image, Link } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/gamer-logo.png";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding="20px">
      <Link href="/">
        <Image
          src={logo}
          boxSize="60px"
          objectFit="cover"
          borderRadius="20px"
        />
      </Link>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;

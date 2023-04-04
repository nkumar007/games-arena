import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <HStack justifyContent="space-between" alignItems="center">
      <Switch
        size="md"
        isChecked={isDark}
        onChange={toggleColorMode}
        colorScheme="teal"
      />
      <Text fontWeight={"bold"} color={isDark ? "cyan" : ""}>
        {isDark ? "Light" : "Dark"}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;

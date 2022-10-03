import { textFormat } from "@/utils";
import { FontAwesome } from "@expo/vector-icons";
import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Input,
  ScrollView,
  Text,
  View,
  VStack,
} from "native-base";
import React, { useState } from "react";

interface RootProps {}

const Root = (props: RootProps) => {
  const [query, setQuery] = useState<string>("");
  return (
    <View flex={1}>
      <ScrollView flex={1} mt={4}>
        <Box borderRadius="md" flex={1} mb={8}>
          <VStack space="4" divider={<Divider />}>
            <Box px="4" pt="4">
              <Text fontWeight={"bold"} fontSize={"md"}>
                Source : {query}
              </Text>
            </Box>
            <Box px="4">
              <Text fontWeight={"bold"}>Uppercase</Text>
              <Text textTransform={"uppercase"}>{query}</Text>
            </Box>
            <Box px="4">
              <Text fontWeight={"bold"}>Alternate style</Text>
              {textFormat.toAlternateUpperAndLower(query)}
            </Box>
          </VStack>
        </Box>
        <HStack alignItems={"center"} justifyContent={"center"}>
          <Input
            flex={1}
            mx="3"
            fontSize={"md"}
            placeholder="Type something..."
            w="100%"
            onChangeText={(e) => setQuery(e)}
          />
          <Button
            size={"sm"}
            mr={3}
            leftIcon={<Icon as={FontAwesome} name="print" />}
            colorScheme="coolGray"
          >
            Generate CSV
          </Button>
          {/* <Icon as={FontAwesome} name="send" /> */}
        </HStack>
      </ScrollView>
    </View>
  );
};

export default Root;

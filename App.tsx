import Root from "@/containers/Root";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import React from "react";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <Root />
    </NativeBaseProvider>
  );
}

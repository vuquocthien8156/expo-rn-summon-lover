import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styled from "styled-components";

export const WhiteSpace = styled(View)({
  height: 8,
});

export const Container = styled(View)(({ center }) => ({
  padding: 20,
  flex: 1,
  backgroundColor: "#fff",
  ...(center
    ? {
        justifyContent: "center",
        alignItems: "center",
      }
    : {}),
}));

export const LabelInput = styled(Text)({
  fontSize: 14,
  color: "#333",
});

export const Input = styled(TextInput)({
  padding: "5px 0px",
  borderBottomWidth: 1,
  borderBottomColor: "#d9d9d9",
  fontSize: 13,
});

export const ButtonConfirm = styled(TouchableOpacity)({
  padding: 10,
  backgroundColor: "#2da8d7",
  borderRadius: 5,
});

export const TextButtonConfirm = styled(Text)({
  fontSize: 15,
  textAlign: "center",
  color: "#fff",
});

export const TitleFunction = styled(Text)({
  fontSize: 16,
  fontWeight: "bold",
  textAlign: "center",
  margin: "10px",
});

export const ContainerFunction = styled(View)({
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignContent: "space-between",
  height: 210,
});

export const ButtonFunction = styled(TouchableOpacity)((props) => ({
  width: "48%",
  height: 100,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 5,
  marginBottom: 16,
  backgroundColor: props?.backgroundColor || "red",
}));

export const TextButtonFunction = styled(Text)({
  fontSize: 16,
  color: "#fff",
  fontWeight: "500",
});

export const LoadingContainer = styled(View)({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "#0000003b",
  justifyContent: "center",
  alignItems: "center",
});

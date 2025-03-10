import { ThemedText } from "@/components/ThemedText";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

const ChatIdScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View style={{ marginHorizontal: 10 }}>
      <ThemedText style={{ fontSize: 25, marginBottom: 10 }}>
        Chat ID screen
      </ThemedText>

      <ThemedText style={{ fontSize: 20, marginBottom: 10 }}>
        Chat ID: {id}
      </ThemedText>
    </View>
  );
};

export default ChatIdScreen;

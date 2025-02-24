import { FlatList, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { usePushNotification } from "@/hooks/usePushNotification";

const PushNotificationApp = () => {
  const { expoPushToken, notifications } = usePushNotification();

  return (
    <View style={{ marginHorizontal: 10, marginTop: 5 }}>
      <ThemedText>Token: {expoPushToken}</ThemedText>

      <ThemedText style={{ marginTop: 10, fontWeight: "bold", fontSize: 25 }}>
        Notificaciones
      </ThemedText>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.request.identifier}
        renderItem={({ item }) => (
          <View>
            <ThemedText style={{ fontWeight: "bold" }}>
              {item.request.content.title}
            </ThemedText>
            <ThemedText>{item.request.content.body}</ThemedText>
            <ThemedText>
              {JSON.stringify(item.request.content.data, null, 2)}
            </ThemedText>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: "gray", opacity: 0.5 }} />
        )}
      />
    </View>
  );
};

export default PushNotificationApp;

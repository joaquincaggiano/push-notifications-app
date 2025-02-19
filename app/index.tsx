import { View } from 'react-native'
import { ThemedText } from '@/components/ThemedText'
import { usePushNotification } from '@/hooks/usePushNotification';

const PushNotificationApp = () => {
  const { expoPushToken, notifications, sendPushNotification } = usePushNotification();
  return (
    <View style={{marginHorizontal: 10, marginTop: 5}}>
      <ThemedText>Token: {expoPushToken}</ThemedText>
    </View>
  )
}

export default PushNotificationApp
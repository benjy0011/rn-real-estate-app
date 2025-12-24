import { Tabs } from "expo-router"
import { Text, View } from "react-native"
const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          borderTopColor: '#0061FF1A',
          borderTopWidth: 1,
          minHeight: 70,
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: () => (
            <View>
              <Text>Home</Text>
            </View>
          )
        }}
      />
    </Tabs>
  )
}
export default TabsLayout
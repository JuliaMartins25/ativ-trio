import { Stack } from "expo-router";

export default function RootLayout() {
    return (

        <Stack screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: '#8C1CD6',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}>

            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="about" options={{ title: 'Sobre' }} />
            <Stack.Screen name="login" options={{ title: 'Login' }} />
            <Stack.Screen name="termos" options={{ title: 'Termos de uso' }} />
        </Stack>
    )
}  
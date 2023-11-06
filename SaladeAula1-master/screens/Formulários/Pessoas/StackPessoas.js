import { createStackNavigator } from '@react-navigation/stack'
import FormPessoas from './FormPessoas'
import ListaPessoas from './ListaPessoas'

const Stack = createStackNavigator()

export default function StackPessoas() {
    return (

        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='ListaPessoas'
        >

            <Stack.Screen name='ListaPessoas' component={ListaPessoas} />

            <Stack.Screen name='FormPessoa' component={FormPessoas} />

        </Stack.Navigator>

    )
}
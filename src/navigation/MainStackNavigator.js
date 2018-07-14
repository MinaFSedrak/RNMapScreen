import { StackNavigator, createStackNavigator } from 'react-navigation';
import { Main } from '../screens/';

const MainStackNavigator = StackNavigator({
    mainScreen: { screen: Main }
},
{
    headerMode: 'none'
}
)

export { MainStackNavigator };
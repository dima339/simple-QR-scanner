import {createStackNavigator} from 'react-navigation';
import Scanner from '../screens/scanner';
import Start from '../screens/start';

const RootNavigator = createStackNavigator({
    Scanner: {
        screen: Scanner
    },
    Start: {
        screen: Start
    }
}, {
    headerMode: 'none',
});

export default RootNavigator;

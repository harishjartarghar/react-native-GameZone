import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import AboutStack from './aboutstack';
import HomeStack from './homestack'


const RootScreens=createDrawerNavigator({
    Home:{
        screen:HomeStack
    },
    About:{
        screen:AboutStack
    }
});

export default createAppContainer(RootScreens);
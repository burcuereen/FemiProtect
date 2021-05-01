import { createDrawerNavigator } from 'react-navigation-drawer' ;
import { createAppContainer } from 'react-navigation' ;
import signupRoute from '../Routes/signupRoute';

const screens = createDrawerNavigator ({

    Signup: {
        screen: signupRoute
    }
    
})

export default createAppContainer(screens);
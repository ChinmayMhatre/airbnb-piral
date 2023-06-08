import * as React from 'react';
import { Notifications,Menu} from 'piral'
import Footer from './Footer';

const App = ({children}) => {
    return (
        <div className='layout'>
            <Notifications />
            <Menu type="general" />
            <div className="container">{children}</div>
            <Footer/>
        </div>
    )
}

export default App
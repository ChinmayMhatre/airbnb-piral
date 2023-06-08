import * as React from 'react'
import {Link} from 'react-router-dom'
import { MenuContainerProps} from 'piral'

const Navbar: React.FC<MenuContainerProps> = ({children}) => {
    const [collapsed, setCollapsed] = React.useState(true);
    return (
        <header>
            <nav className="navbar navbar-light navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Airbnb
                    </Link>
                    <button
                        aria-label="Toggle navigation"
                        type="button"
                        onClick={() => setCollapsed(!collapsed)}
                        className="navbar-toggler mr-2">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className={`collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse ${collapsed ? '' : 'show'}`}
                        aria-expanded={!collapsed}>
                        <ul className="navbar-nav flex-grow">
                            {children}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import home from '../pages/Home';
import bookmarks from '../pages/Bookmarks';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route key="home" path="/" component={home} exact />
                <Route key="bookmarks" path="/bookmarks" component={bookmarks} exact />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
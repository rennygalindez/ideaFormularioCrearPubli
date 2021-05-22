import { Route, Switch } from 'react-router-dom';
import CreatePostContext from '../Contexts/CreatePostContext';
import CreatePost from '../CreatePost/CreatePost';
const Render = () => {
  return (
    <Switch>
      <Route
        path='/'
        render={(routerProps) => (
          <CreatePostContext {...routerProps}>
            <CreatePost />
          </CreatePostContext>
        )}
      ></Route>
    </Switch>
  );
};

export default Render;

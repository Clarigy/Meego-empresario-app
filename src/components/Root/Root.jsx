import React from 'react';
import { AuthContext } from '../../firebase/context';


class Root extends React.Component {
  render() {
    const { children } = this.props;
    const { authReady } = this.context;


    if (!authReady) {
      return <></>;
    }

    return children;
  };
}

Root.contextType = AuthContext;

export default Root;

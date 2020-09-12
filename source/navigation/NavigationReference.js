import * as React from 'react';
export const navigationRef = React.createRef();

export const navigate = (routeName, params) => {
  navigationRef.current.navigate({
    name: routeName,
    params,
  });
};

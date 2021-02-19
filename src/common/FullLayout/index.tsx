import React from 'react';

import Container, { FullLayoutProps } from './container';

const Dashboard: React.FC<FullLayoutProps> = props => {

  return <Container children={props.children} />;
};
export default React.memo(Dashboard);

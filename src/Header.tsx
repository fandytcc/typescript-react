import * as React from 'react';

/*:: define a props interface for each component, no longer need prop-types package */
/*:: must declare an interface for the state of class components */
interface Props {
  name?: string;
}
/*:: ? operator = to mark defaultProps as optional; optional props are union of type undefined | string */

/*:: SFC<P> (Stateless Functional Component), has pre-defined children, defaultProps, displayName.. */

/*:: Don't need to define children?: ReactNode every time on our own. */
const Header: React.SFC<Props> = (props: Props) => (
  <h1>
    Hello, {props.name}! Welcome to React and TypeScript.
  </h1>
);

Header.defaultProps = {
  name: 'world',
};

export default Header;

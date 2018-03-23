import * as React from 'react';

interface Props {
  countBy?: number;
}

interface State {
  count: number;
}

class Description extends React.Component<Props, State> {
  public static defaultProps: Partial<Props> = {
    countBy: 1,
  };

  state: State = {
    count: 0,
  };

 /*:: ! indicates that we know the value will exist and to not throw a potential undefined error */
  increase = () => {
    const countBy: number = this.props.countBy!;
    const count = this.state.count + countBy;
    this.setState({ count });
  }

  render() {
    return (
      <div>
        <p>
          My favourite number is {this.state.count}
        </p>
        <button onClick={this.increase}>
          Increase
        </button>
      </div>
    );
  }
}

export default Description;

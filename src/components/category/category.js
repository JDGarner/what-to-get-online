import React from 'react';

export default class Category extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="category">
          {this.props.name}
      </div>
    );
  }
}

import React from 'react'

const KittenImage = function(props) {
  return <img src={`http://placekitten.com/${props.width}/${props.height}`}
              alt="kitty"
              style={ {border: `2px solid ${props.border}`, padding: '10px'} } />;
};

class HelloUser extends React.Component {

  add(a, b) {
    return a + b;
  }

  render() {
    return (
      <div className="user">
        <h4>Hello, {this.props.name}</h4>
        <KittenImage
          width={ this.props.imgWidth }
          height={ this.props.imgHeight }
          border="green"
        />

        {/* <p>{this.add(2,3)}</p> */}

      </div>
    );
  }
}  // class HelloUser

export default HelloUser;

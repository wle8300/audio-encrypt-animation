import React, { Component } from 'react';

class App extends Component {

  state = {
    isActive: false,
    isButtonHovered: false,
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'black',}}>

        <div style={{position: 'relative', width: 290, height: 290}}>

          {/* square */ }
          <div style={{
            position: 'absolute',
            width: 200,
            height: 200,
            border: '45px solid #2a28e6',
            opacity: 0.5,
            transform: `rotateZ(${this.state.isActive ? '-1080deg' : '0deg'})`,
            transition: 'transform 10s linear',
          }}></div>

          {/* circle */ }
          <div style={{
            position: 'absolute',
            width: 200,
            height: 200,
            border: '45px solid #cb00ff',
            opacity: 0.5,
            borderRadius: '100%',
          }}></div>

          {/* line */ }
          <div style={{
            position: 'absolute',
            left: 123,
            width: 45,
            height: 290,
            background: '#67f153',
            opacity: 0.5,
            transform: `rotateZ(${this.state.isActive ? '1080deg' : '0deg'})`,
            transition: 'transform 10s linear',
          }}></div>

        </div>

        <button
          onClick={() => this.setState({isActive: !this.state.isActive})}
          onMouseOver={() => this.setState({isButtonHovered: true})}
          onMouseOut={() => this.setState({isButtonHovered: false})}
          style={{
            marginTop: '120px',
            background: 'transparent',
            // color: 'rgba(93, 0, 114, 1)',
            color: 'white',
            padding: '14px 24px',
            fontSize: '15px',
            fontWeight: 'bold',
            borderRadius: '7px',
            // border: '2px solid rgba(93, 0, 114, 1)',
            border: '2px solid white',
            outline: 'none',
            opacity: this.state.isButtonHovered ? 0.425 : 0.3,
            cursor: 'pointer',
          }}
        >
          {this.state.isActive ? 'Decrypt audio' : 'Encrypt audio'}
        </button>

      </div>
    );
  }
}

export default App;

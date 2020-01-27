import React from 'react';
import './App.css';

class App extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			modal: false,        
		}
	}

  handlermodal = () => {
    console.log('handlermodal')
    this.setState = {
      modal: !this.state.modal
    }
  }


  rendermodal = () => (
    <div className="Fosco" onClick={this.handlermodal}>
      <div className="Central">
        <p>fala ae, chefe!</p>
        <button>fechar</button>
      </div>
    </div>
  )

	render() {
		return (
			<div className="App">
        <button className="open" onClick={this.handlermodal}>abrir</button>
      {/* {this.rendermodal() && this.rendermodal()} */}
			</div>
		)
	}
}

export default App;


  
  
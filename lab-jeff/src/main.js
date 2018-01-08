import './style/main.scss'
import React from 'react'
import ReactDom from 'react-dom'
import cowsayBrowser from 'cowsay-browser'
import faker from 'faker'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.value = 'What dows the Cow Say?';

    this.cowsayWhat = this.cowsayWhat.bind(this);

  }

  cowsayWhat() {
    let whatCowSays = cowsayBrowser.say({text: faker.lorem.words(3)})
    this.setState({value: whatCowSays})
  }

  render(){
    return (
      <div>
        <h1>Generate Cowsay Lorem</h1>
        <button onClick={this.cowsayWhat}> Click Me</button>
        <pre>this.state.value</pre>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
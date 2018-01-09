import './style/main.scss'
import React from 'react'
import ReactDom from 'react-dom'
import cowsayBrowser from 'cowsay-browser'
import faker from 'faker'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.content = 'What does the Cow Say?';

    this.cowsayWhat = this.cowsayWhat.bind(this);

  }

  cowsayWhat() {
    let whatCowSays = cowsayBrowser.say({text: faker.lorem.words(3)})
    this.setState({content: whatCowSays})
  }

  render(){
    return (
      <div>
        <h1>Generate Cowsay Lorem</h1>
        <button onClick={this.cowsayWhat}> Click Me</button>
        <pre>{this.state.content}</pre>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root'))
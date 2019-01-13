import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';
import * as routes from '../constants/routes';
import './View.css';


const divStyle = {
  margin: 'auto',
  width: '95%',
  height: '80vh',
  border: 'double 10px white',
  padding: '10px',
  backgroundColor: "#2086D3",
  color: "navy"
};

const questions = ['term 1', 'term 2', 'term 3', 'term 4', 'term 5', 'term 6', 'term 7', 'term 8', 'term 9', 'term 10' , 'null'];
const answers = ['defintion 1', 'defintion 2', 'defintion 3', 'defintion 4', 'defintion 5', 'defintion 6', 'defintion 7', 'defintion 8', 'defintion 9', 'defintion 10'];
function getCount() {
  return questions.length;
}
function getQuestion(i) {
  return <div>{questions[i - 1]}</div>;
}
function getAnswer(i) {
  return answers[i - 1];
}

class Deck extends Component {
  constructor() {
    super();
    this.state = {
      question: getQuestion(1),
      answer: getAnswer(1),
      total: getCount(),
      i: 1,
    };
  }
  
  nextQuestion() {
    this.setState({
      question: getQuestion(this.state.i + 1), 
      answer: getAnswer(this.state.i + 1),
      i: this.state.i + 1,
    });
  }

  previousQuestion() {
    this.setState({
      
      question: getQuestion(this.state.i - 1),
      answer: getAnswer(this.state.i - 1),
      i: this.state.i - 1,
    });
  }
  
  render() {

    const isInvalidNext =
      getQuestion(this.state.i) === getQuestion(10) ||
      getAnswer(this.state.i) === getAnswer(10);

    const isInvalidPrevious =
      getQuestion(this.state.i) === getQuestion(1) ||
      getAnswer(this.state.i) === getAnswer(1);

    return (
      <div style={divStyle}>
        {
          this.state.total 
            ? <Count i={this.state.i} total={this.state.total} />
            : null
        }
        <Flashcard 
          question={this.state.question}
          answer={this.state.answer}
        />
        {
          (this.state.total && this.state.i >= this.state.total)
            ? null
            : <button 
                className="nextButton"
                disabled={isInvalidNext} 
                onClick={this.nextQuestion.bind(this)}>
                next...
              </button>
        }

        {
          (this.state.total && this.state.i >= this.state.total)
            ? null
            : <button 
                className="previousButton" 
                disabled={isInvalidPrevious}
                onClick={this.previousQuestion.bind(this)}>
                previous...
              </button>
        }
      </div>
    );
  }
}

class Flashcard extends Component {

  constructor() {
    super();
    this.state = {
      reveal: false,
    };
  }


  componentWillReceiveProps() {
    this.setState({reveal: false});
  }

  flip() {
    this.setState({
      reveal: !this.state.reveal,
    });
  }

  render() {
    const className = "card flip-container" + (this.state.reveal ? ' flip' : '');
    return (
      <div><center>
        <div className={className} onClick={this.flip.bind(this)}>
          <div className="flipper">
            <div className="front" style={{display: this.state.reveal ? 'none' : ''}}>
              {this.props.question}
            </div>
            <div className="back"  style={{display: this.state.reveal ? '' : 'none'}}>
              {this.props.answer}
            </div>
        	</div>
        </div>
        <button className="answerButton" onClick={this.flip.bind(this)}>flip</button>
      </center></div>
    );
  }
}

const Count = ({i, total}) =>
  <div>
    Flashcard {i} / {total - 1} 
  </div>;


const ViewLink = () =>
  <h3>
    <Link to={routes.VIEW} style = {{color: "navy"}}>View</Link>
  </h3>

export default withRouter(Deck, Flashcard);

export {ViewLink};

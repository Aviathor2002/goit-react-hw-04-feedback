import React, { Component } from 'react';

import { Statistics } from './Statistic/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './App.style';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodClick = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  onNeutralClick = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  onBadClick = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let posPercent = Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    );
    return posPercent;
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <h2>Please leave feedback</h2>
          <FeedbackOptions
            good={this.onGoodClick}
            neutral={this.onNeutralClick}
            bad={this.onBadClick}
          />
        </Section>
        <Section title="Statistics">
          <h2>Statistics</h2>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default App;

// class App extends Component {
//   state = {
//     contacts: [],
//     name: '',
//   };
//   // handleNameChange = event => {
//   //   console.log(event.carrentTarget.value);
//   //   this.setState({ inputValue: event.carrentTarget.value });
//   // };
//   render() {
//     return (
//       <div
//         style={{
//           height: '100vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 40,
//           color: '#010101',
//           flexDirection: 'column',
//         }}
//       >
//         <section>
//           <h1>Phonebook</h1>
//           <form
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//             }}
//           >
//             <label
//               style={{ display: 'flex', flexDirection: 'column', marginTop: 5 }}
//             >
//               Name
//               <input
//                 // value={this.state.name}
//                 // onChange={this.handleNameChange}
//                 type="text"
//                 name="name"
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 required
//               />
//             </label>
//             <button type="submit" style={{ marginTop: 20 }}>
//               Add contact
//             </button>
//           </form>
//         </section>
//         <section>
//           <h1>Contacts</h1>
//           <ul></ul>
//         </section>
//       </div>
//     );
//   }
// }

// export default App;
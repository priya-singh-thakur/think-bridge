import React from 'react';

class SecondPage extends React.Component {
  constructor() {
    super();
    this.state = {
      name:'',
      description: '',
      price: '',
      image: '',
    };
  }
  render() {
    return (
     <div>
         <h1>Testing component2</h1>
     </div>
    );
  }
}
export default SecondPage;
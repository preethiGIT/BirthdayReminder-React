import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  // Use of useState Hook .
  //people is the name and setPeople is the function
  //by default usestate sets it to the data array.
  //Now people = data by default. we can use setPeople() to change it
  const [people, setPeople] = useState(data)
  return (<main>
    <section className='container'>
      <h3>{people.length} birthdays today</h3>
      {/* Since people =data , pass it to the list */}
      <List people={people} />
      {/* Use the setPeople function to clear the list */}
      <button onClick={() => setPeople([]) }>Clear All</button>
    </section>
  </main>
  );
}

export default App;

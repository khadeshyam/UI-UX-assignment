import React, { useState } from 'react';
import { fakerDE as faker } from '@faker-js/faker';
import './App.css'; // Import CSS for styling
import Events from './components/Events';
import Header from './components/Header';

console.log(faker.helpers);

function generateRandomEvents() {
  const randomEvents = [];
  for (let i = 0; i < 2; i++) {
    const event = {
      ID: faker.number.int(),
      MessageType: faker.helpers.arrayElement(['A', 'B', 'C', 'D']), // Corrected method
      MessageCategory: faker.helpers.rangeToNumber([1, 2]), // Corrected method
      Text1: faker.lorem.words(),
      Text2: faker.lorem.words()
    };
    randomEvents.push(event);
  }
  return randomEvents;
}

const App = () => {
  const [events, setEvents] = useState(generateRandomEvents());
  console.log(events)

  const handleReload = (e) => {
    e.preventDefault();
    setEvents(generateRandomEvents());
  };

  return (
    <div className="container">
      <Header />
      <Events initialEvents={events} />
      <button className="refresh-button" onClick={handleReload}>ReLoad</button>
    </div>
  );
};

export default App;
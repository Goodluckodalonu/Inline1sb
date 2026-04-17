import React from 'react';
import ProfileCard from './ProfileCard';
import './App.css';

function App() {
  const sampleData = {
    name: 'Goodluck Odalonu',
    bio: 'A passionate frontend engineer with a love for building accessible and responsive web applications. Always learning and excited about new technologies. ',
    avatarUrl: 'avaterMe.png',
    socialLinks: [
      { name: 'GitHub', url: 'https://github.com/Goodluckodalonu' },
      { name: 'Twitter', url: 'https://x.com/OdalonuGoodluck' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/goodluck-odalonu' },
    ],
    hobbies: [
      'Reading about web accessibility',
      'Contributing to open source projects ',
      'Hiking and nature photography ',
      'Gaming and game development',
    ],
    dislikes: [
      'Poor user interfaces',
      'Inaccessible websites',
      'Unnecessary complexity',
      'Slow loading times ',
    ],
  };

  return (
    <div className="app">
      <main className="app__main">
        <ProfileCard {...sampleData} />
      </main>
    </div>
  );
}

export default App;

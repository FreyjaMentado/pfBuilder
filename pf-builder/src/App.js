import bolt from './images/bolt.jpg';
import blast from './images/blast.jpg';
import './App.css';

function App() {
  return (
    <div style={{ 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
      }}>
      <img src={bolt} alt="Bolt" style={{ height: '256px' }} />
      <p style={{ margin: '0 10px' }}>is better than</p>
      <img src={blast} alt="Blast" style={{ height: '256px' }} />
    </div>

  );
}

export default App;

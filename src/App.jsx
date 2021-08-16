import sounds from './data/sounds';
import './App.scss';

function App() {
  const playSound = (e) => {
    const sound = e.target.childNodes[0];
    pauseSound(sound);
    sound.play();
  };

  const pauseSound = (sound) => {
    sound.pause();
    sound.currentTime = 0;
  };

  return (
    <div className="App">
      <div>
        {sounds.length > 0 &&
          sounds.map((sound) => (
            <button
              key={sound.id}
              className="btn"
              onClick={(e) => playSound(e)}
            >
              <audio src={sound.path} />
              {sound.text}
            </button>
          ))}
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './WatchSection.css';

const WatchSection = () => {
  return (
    <section className="watch-section">
      <div className="watch-content">
        <h2>About the Shop</h2>
        <p>Watch our story</p>
        <p className="introduce">
          We carefully select each toy, just to let your children explore through play, grow through creation, and light up their childhood <br />
          with every happy moment.
        </p>
        <div className="movie">
          <img
            src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec4b504f1c4031af32_play-icon-white.svg"
            alt="Play video"
          />
        </div>
      </div>
    </section>
  );
};

export default WatchSection;
import FancyBorder from './FancyBorderLevelUp.js';

function WelcomeDialog() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
    );
  }

  export {
    WelcomeDialog
  }
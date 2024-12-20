import FancyBorder from './FancyBorder.js';

function Dialog(props) {
    return (
      <FancyBorder color={props.color}>
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
      </FancyBorder>
    );
  }

  function DialogTwo(props) {
    return (
      <FancyBorder color={props.color}>
        <div className='card'>
          <h1 className="Dialog-title">{props.title}</h1>
          <small>{props.message}</small>
          {props.children}
        </div>
      </FancyBorder>
    )

  }
  
  function WelcomeDialog() {
    return (
      <Dialog
        title="Welcome"
        message="Thank you for visiting our spacecraft!" />
    );
  }

  export {
    FancyBorder,
    Dialog,
    WelcomeDialog,
    DialogTwo
  }
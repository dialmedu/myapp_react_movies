function FancyBorder(props) {
  return (
    <div
      className={'FancyBorder FancyBorder-' + props.color}
      style={{
        border: '2px solid transparent',
        transition: 'border 0.3s ease-in-out',
      }}
      onMouseEnter={(e) => e.currentTarget.style.border = '2px solid ' + props.color}
      onMouseLeave={(e) => e.currentTarget.style.border = '2px solid transparent'}
    >
      {props.children}
    </div>
  );
}

function FancyBorderDiv(props) {
   // props.children
   return (
    <div style={{border: '2px solid ' + props.color}}> 
      {props.children}
    </div>
   )
}



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
    WelcomeDialog,
    FancyBorderDiv,
    FancyBorder
  }
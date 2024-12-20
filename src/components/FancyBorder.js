function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
        'name user'
      </div>
    );
  }

  export default FancyBorder
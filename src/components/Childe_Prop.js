function Chat() {
    return (
      <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
        <li style={{marginBottom: '10px'}}><div style={{backgroundColor: '#eee', padding: '10px', borderRadius: '10px', color: 'green'}}>Hi</div></li> 
        <li style={{marginBottom: '10px'}}><div style={{backgroundColor: '#eee', padding: '10px', borderRadius: '10px', color: 'green'}}>How are you?</div></li>
        <li style={{marginBottom: '10px'}}><div style={{backgroundColor: '#eee', padding: '10px', borderRadius: '10px', color: 'red'}}>What about you?</div></li>   
      </ul>
    );
}

function Contacts() {
    return (
      <ul>
        <li>Tom</li>
        <li>John</li>
        <li>Mike</li>
      </ul>
    );
}
function SplitPane(props) {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          {props.left}
        </div>
        <div className="SplitPane-right">
          {props.right}
        </div>
      </div>
    );
  }
  
  function SlidePadre() {
    return (
      <SplitPane
        left={
          <Contacts />
        }
        right={
          <Chat />
        } />
    );
  }

  export default SlidePadre
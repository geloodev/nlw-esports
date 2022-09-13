//Create the properties of a component
interface ButtonProps {
  title: string;
}

// Create a component 
function Button(props: ButtonProps) { //use the properties as parameter of the component
  return (
    <button>
      {/* use {} to put a JS code inside html */}
      {props.title}
    </button>
  )
}

function Example() {
  // Calling the component Button
  return (
    <div>
      {/* Every component needs to be inside something, in this case, a div */}
      <Button title="Send 1" />
      <Button title="Send 2" />
      <Button title="Send 3" />
    </div>
  )
}

// export default App

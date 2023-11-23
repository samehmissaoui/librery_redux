import Book from "./component/book";
import PenHook from "./component/hook/penHook";
import Pen from "./component/pen";

function App() {
  return (
    <div className="App">
      {/* <PenHook></PenHook> */}
      
      <Book></Book>
      <Pen></Pen>
    </div>
  );
}

export default App;

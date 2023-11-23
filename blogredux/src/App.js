import Book from "./component/book";
import Pen from "./component/pen";
import PenHook from "./component/hook/penHook"
import BookHook from "./component/hook/bookHook"

function App() {
  return (
    <div className="App">
      <Book></Book>
      <Pen></Pen>
      {/* <PenHook></PenHook>
    <BookHook></BookHook> */}
    </div>
  );
}

export default App;

import Darken from "./modules/Darken/Darken";
import Left from "./modules/left/Left";
import LoginBox from "./modules/LoginBox/LoginBox";
import Nav from "./modules/nav/Nav";
import content from "./modules/content/Content";
import { useState } from "react";
function App() {
  let [state, setState] = useState(false);
  let { renderC } = content();
  let { renderN, navState } = Nav();
  if (navState) {
    setState(true);
    navState = false;
  }
  return (
    <div className="body">
      <LoginBox triggered={state} />
      <Darken />
      <Left />
      <div className="main">
        {renderN}
        {renderC}
      </div>
    </div>
  );
}

export default App;

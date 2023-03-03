import Darken from "./modules/Darken/Darken";
import Left from "./modules/left/Left";
import LoginBox from "./modules/LoginBox/LoginBox";
import Nav from "./modules/nav/Nav";
import content from "./modules/content/Content";
function App() {
  let { renderC } = content();
  let { renderN } = Nav();

  return (
    <div className="body">
      <LoginBox triggered={false} />
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

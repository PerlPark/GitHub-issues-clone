import Detail from "./pages/Detail";
import Issues from "./pages/Issues";

function App() {
  const path = window.location.pathname.split("/");
  const isDetail = path[1] === "detail" && path[2];

  return <main>{isDetail ? <Detail /> : <Issues />}</main>;
}

export default App;

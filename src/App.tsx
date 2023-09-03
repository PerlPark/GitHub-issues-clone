import Detail from "./pages/Detail";
import Issues from "./pages/Issues";
import { useAppSelector } from "./app/hooks";

function App() {
  const { number } = useAppSelector((state) => state.issueDetail);

  return <main>{!!number ? <Detail /> : <Issues />}</main>;
}

export default App;

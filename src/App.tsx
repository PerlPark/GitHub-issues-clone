import Detail from "./pages/Detail";
import Issues from "./pages/Issues";
import { useAppSelector } from "./app/hooks";
import Header from "./components/Header";

function App() {
  const { number } = useAppSelector((state) => state.issueDetail);

  return (
    <main className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow overflow-auto">
        {!!number ? <Detail /> : <Issues />}
      </div>
    </main>
  );
}

export default App;

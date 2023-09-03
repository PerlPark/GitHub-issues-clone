import { useEffect } from "react";
import "./App.css";
import useGetIssues from "./hooks/useGetIssues";

function App() {
  const { data, isError } = useGetIssues();

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isError) {
    return <div className="App">API 호출 오류가 발생했습니다.</div>;
  }

  return <div className="App">TEST</div>;
}

export default App;

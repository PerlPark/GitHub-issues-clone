import { useEffect, useState } from "react";
import "./App.css";
import useGetIssues from "./hooks/useGetIssues";

function App() {
  // 페이지 State
  const [page, setPage] = useState(0);

  // 데이터 호출 훅
  const { data, isError } = useGetIssues({
    page,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isError) {
    return <div className="App">API 호출 오류가 발생했습니다.</div>;
  }

  return <div className="App">TEST</div>;
}

export default App;

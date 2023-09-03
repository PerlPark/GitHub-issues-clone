import { useEffect, useState } from "react";
import "./App.css";
import useGetIssues from "./hooks/useGetIssues";

function App() {
  // 페이지 State
  const [page, setPage] = useState(0);
  const getNextPage = () => {
    setPage((page) => page + 1);
  };

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

  return (
    <div className="App">
      <button type="button" onClick={getNextPage}>
        issue 10개 로딩 시작
      </button>
    </div>
  );
}

export default App;

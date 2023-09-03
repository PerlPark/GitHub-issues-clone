import { useEffect } from "react";
import "./App.css";
import useGetIssues from "./hooks/useGetIssues";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import { useAppSelector } from "./app/hooks";

function App() {
  const { data, page } = useAppSelector((state) => state.issues);

  // 데이터 호출 훅
  const { isError } = useGetIssues({
    page,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isError) {
    return <Layout>API 호출 오류가 발생했습니다.</Layout>;
  }

  return (
    <Layout>
      <Footer />
    </Layout>
  );
}

export default App;

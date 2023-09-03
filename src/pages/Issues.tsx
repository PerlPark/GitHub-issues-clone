import useGetIssues from "../hooks/useGetIssues";
import Footer from "../components/Footer";
import { useAppSelector } from "../app/hooks";
import useScrollDown from "../hooks/useScrollDown";

function Issues() {
  const { data: issues, page } = useAppSelector((state) => state.issues);

  // 데이터 호출 훅
  const { isError } = useGetIssues({
    page,
  });

  // 페이지 로드 시 스크롤 훅
  const { targetRef } = useScrollDown({ deps: [issues] });

  if (isError) {
    return <div>API 호출 오류가 발생했습니다.</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      <ul ref={targetRef} className="flex-grow overflow-auto">
        {issues.map(({ number, title, created_at }) => (
          <li key={number} className="border-t py-3 px-5">
            <h2 className="font-bold text-lg mb-1">{title}</h2>
            <div className="text-sm text-gray-600">
              #{number}, 작성일:{" "}
              {new Intl.DateTimeFormat("ko-KR").format(new Date(created_at))}
            </div>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default Issues;

import useGetIssues from "../hooks/useGetIssues";
import Footer from "../components/Footer";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import useScrollDown from "../hooks/useScrollDown";
import { setNumber } from "../slices/issueDetailSlice";
import React from "react";
import Ad from "../components/Ad";

function Issues() {
  const dispatch = useAppDispatch();
  const { data: issues, page } = useAppSelector((state) => state.issues);

  // 데이터 호출 훅
  const { isError } = useGetIssues({
    page,
  });

  // 페이지 로드 시 스크롤 훅
  const { targetRef } = useScrollDown({ deps: [issues] });

  // 클릭 시 상세로 이동
  const goToDetail = (number: number) => {
    dispatch(setNumber(number));
  };

  if (isError) {
    return <div>API 호출 오류가 발생했습니다.</div>;
  }

  return (
    <div className="flex flex-col h-full">
      <ul ref={targetRef} className="flex-grow overflow-auto">
        {issues.map(({ number, title, created_at }, idx) => (
          <React.Fragment key={number}>
            <li key={number} className="border-t py-3 px-5">
              {(idx + 1) % 10 === 1 && (
                <div className="mx-auto p-4 mb-4 italic bg-sky-100 text-slate-500 rounded text-center">
                  issue 10개 로딩 시작
                </div>
              )}
              <button
                className="text-left"
                type="button"
                onClick={() => goToDetail(number)}
              >
                <h2 className="font-bold text-lg mb-1">{title}</h2>
                <div className="text-sm text-gray-600">
                  #{number}, 작성일:{" "}
                  {new Intl.DateTimeFormat("ko-KR").format(
                    new Date(created_at)
                  )}
                </div>
              </button>
            </li>
            {(idx + 1) % 10 === 0 && <Ad />}
          </React.Fragment>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default Issues;

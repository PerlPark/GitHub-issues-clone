import { useAppSelector } from "../app/hooks";
import useGetIssueDetail from "../hooks/useGetIssueDetail";

function Detail() {
  const number = useAppSelector((state) => state.issueDetail.number);

  const { data } = useGetIssueDetail({ number });

  console.log(data);

  return <div>상세</div>;
}

export default Detail;

import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import { IssueDetail } from "../types/issueDetail";

/**
 * 깃허브 특정 저장소 이슈 상세 가져오기
 * https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#get-an-issue
 * @returns data, isError
 */

interface UseGetIssueDetail {
  number: number;
}

const useGetIssueDetail = ({ number }: UseGetIssueDetail) => {
  const [data, setData] = useState<IssueDetail>();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!number) return;

    const octokit = new Octokit({
      auth: process.env.REACT_APP_GITHUB_TOKEN,
    });

    octokit
      .request(`GET /repos/angular/angular-cli/issues/${number}`, {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      })
      .then((res) => setData(res.data))
      .catch(() => setIsError(true));
  }, [number]);

  return { data, isError };
};

export default useGetIssueDetail;

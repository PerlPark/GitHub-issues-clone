import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { setData } from "../slices/issuesSlice";

/**
 * 깃허브 특정 저장소 이슈 목록 가져오기
 * https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28#list-repository-issues
 * @returns data, isError
 */

interface UseGetIssues {
  page: number;
}

const useGetIssues = ({ page }: UseGetIssues) => {
  const dispatch = useAppDispatch();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!page) return;

    const octokit = new Octokit({
      auth: process.env.REACT_APP_GITHUB_TOKEN,
    });

    octokit
      .request(
        `GET /repos/angular/angular-cli/issues?state=open&sort=comments&direction=desc&per_page=10&page=${page}`,
        {
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        }
      )
      .then((res) => dispatch(setData(res.data)))
      .catch(() => setIsError(true));
  }, [dispatch, page]);

  return { isError };
};

export default useGetIssues;

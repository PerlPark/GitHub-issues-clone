import { Octokit } from "octokit";
import { useEffect, useState } from "react";

const useGetIssues = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const octokit = new Octokit({
      auth: process.env.REACT_APP_GITHUB_TOKEN,
    });

    octokit
      .request(
        "GET /repos/angular/angular-cli/issues?state=open&sort=comments&direction=desc",
        {
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        }
      )
      .then((res) => setData(res.data))
      .catch(() => setIsError(true));
  }, []);

  return { data, isError };
};

export default useGetIssues;

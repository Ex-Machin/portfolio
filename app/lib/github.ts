export type GithubPinnedRepo = {
  id: string;
  name: string;
  description: string | null;
  url: string;
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
};

const query = `query pinnedRepos($login: String!) {
  user(login: $login) {
    pinnedItems(first: 6, types: REPOSITORY) {
      edges {
        node {
          ... on Repository {
            id
            name
            description
            url
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  }
}`;

export async function getPinnedRepos(username: string): Promise<GithubPinnedRepo[]> {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    throw new Error(
      "Missing GITHUB_TOKEN. Add it to .env.local and restart the dev server."
    );
  }

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { login: username } }),
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `GitHub GraphQL error ${response.status}: ${text || response.statusText}`
    );
  }

  const data = await response.json();
  const edges = data?.data?.user?.pinnedItems?.edges;
  if (!Array.isArray(edges)) {
    return [];
  }

  return edges
    .map((edge: any) => edge?.node)
    .filter(Boolean) as GithubPinnedRepo[];
}

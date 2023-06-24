const githubQuery = {
  query: `
        {
            viewer {
            name
            repositories(first: 10) {
                nodes {
                name
                description
                id
                url
                viewerSubscription
                licenseInfo {
                    spdxId
                    }
                }
            }
            }
        }
    `,
};

export default githubQuery;

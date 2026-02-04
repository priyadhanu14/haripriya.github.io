const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repository = process.env.GITHUB_REPOSITORY?.replace(/^[^/]+\//, "") ?? "";
const isUserSite = repository.endsWith(".github.io");

const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const inferredBasePath = isGithubActions && !isUserSite ? `/${repository}` : "";
const basePath = configuredBasePath || inferredBasePath;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix: basePath || undefined
};

export default nextConfig;

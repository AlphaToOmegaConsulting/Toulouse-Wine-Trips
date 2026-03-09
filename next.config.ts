import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const useRepoBasePath = process.env.USE_REPO_BASE_PATH === "true";
const basePath =
  configuredBasePath !== ""
    ? configuredBasePath
    : isGithubActions && useRepoBasePath && repositoryName
      ? `/${repositoryName}`
      : "";
const defaultSiteUrl = "https://toulousewinetrips.com";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl,
  },
};

export default nextConfig;

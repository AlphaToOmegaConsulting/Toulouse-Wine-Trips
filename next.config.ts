import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryOwner = process.env.GITHUB_REPOSITORY?.split("/")[0] ?? "";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const basePath =
  configuredBasePath !== ""
    ? configuredBasePath
    : isGithubActions && repositoryName
      ? `/${repositoryName}`
      : "";
const defaultSiteUrl =
  configuredBasePath === "" && isGithubActions && repositoryOwner && repositoryName
    ? `https://${repositoryOwner}.github.io/${repositoryName}`
    : "https://manaka-japanese.fr";

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

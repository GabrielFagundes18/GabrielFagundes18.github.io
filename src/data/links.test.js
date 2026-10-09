import { GITHUB_USER, links } from "./links";
import { projects } from "./projects";
import { socials } from "./profile";

const siteUrls = [
  ...Object.values(links),
  ...socials.map((social) => social.href),
  ...projects.flatMap((project) => Object.values(project.links)),
];

test("nenhum link é vazio ou aponta para '#'", () => {
  siteUrls.forEach((url) => {
    expect(typeof url).toBe("string");
    expect(url.trim()).not.toBe("");
    expect(url.startsWith("#")).toBe(false);
  });
});

test("links externos usam https", () => {
  siteUrls
    .filter((url) => !url.startsWith("/") && !url.startsWith("mailto:"))
    .forEach((url) => expect(url).toMatch(/^https:\/\//));
});

test("todo link do GitHub aponta para o usuário certo", () => {
  const githubUrls = siteUrls.filter((url) => url.includes("github.com"));

  expect(githubUrls.length).toBeGreaterThan(0);
  githubUrls.forEach((url) => {
    expect(url === `https://github.com/${GITHUB_USER}` || url.startsWith(`https://github.com/${GITHUB_USER}/`)).toBe(true);
  });
});

test("todo projeto tem repositório e exatamente um está em destaque", () => {
  projects.forEach((project) => expect(project.links.repo).toBeTruthy());
  expect(projects.filter((project) => project.featured)).toHaveLength(1);
});

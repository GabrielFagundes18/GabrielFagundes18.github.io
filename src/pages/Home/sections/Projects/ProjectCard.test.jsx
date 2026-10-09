import { render, screen } from "@testing-library/react";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../../../../data/projects";

const withDeploy = projects.find((project) => project.links.deploy);
const withoutDeploy = projects.find((project) => !project.links.deploy);

test("mostra os botões de projeto e de código quando há deploy", () => {
  render(<ProjectCard project={withDeploy} />);

  expect(screen.getByRole("link", { name: /^ver projeto/i })).toHaveAttribute(
    "href",
    withDeploy.links.deploy
  );
  expect(screen.getByRole("link", { name: /^ver código/i })).toHaveAttribute(
    "href",
    withDeploy.links.repo
  );
});

test("esconde 'Ver projeto' quando o projeto não tem deploy", () => {
  render(<ProjectCard project={withoutDeploy} />);

  expect(screen.queryByRole("link", { name: /^ver projeto/i })).not.toBeInTheDocument();
  expect(screen.getByRole("link", { name: /^ver código/i })).toHaveAttribute(
    "href",
    withoutDeploy.links.repo
  );
});

test("links externos abrem em nova aba com rel seguro", () => {
  render(<ProjectCard project={withDeploy} />);

  screen.getAllByRole("link").forEach((link) => {
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});

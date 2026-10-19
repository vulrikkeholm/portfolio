import { expect, test } from "@playwright/test";

test("the page presents the degree and portrait", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Different disciplines. One curious mind.",
    }),
  ).toBeVisible();
  await expect(page.locator(".card-name")).toHaveText("Valdemar Ulrikkeholm");
  await expect(page.locator(".card-degree")).toHaveText(
    "Cyber- og computerteknologi",
  );
  await expect(page.locator("body")).not.toContainText("one course remaining");
  await expect(
    page.getByRole("img", { name: "Portrait of Valdemar Ulrikkeholm" }),
  ).toBeVisible();
});

test("the page links to experience, skills, and education", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("link", { name: "Experience", exact: true }),
  ).toHaveAttribute("href", "#experience");
  await expect(
    page.getByRole("link", { name: "Skills", exact: true }),
  ).toHaveAttribute("href", "#skills");
  await expect(
    page.getByRole("link", { name: "Education", exact: true }),
  ).toHaveAttribute("href", "#education");
  await expect(page.locator(".experience-card")).toHaveCount(3);
  await expect(page.locator(".skill-group")).toHaveCount(4);
  await expect(
    page.getByRole("link", { name: "Watch a performance on YouTube" }),
  ).toHaveAttribute("href", "https://youtu.be/9fh-dtQgBR8?si=7jWuM7_RpLdlxzDz");
});

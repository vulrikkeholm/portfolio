import { expect, test } from "@playwright/test";

test("the page presents the graduate and their degree", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Technology should be secure by design.",
    }),
  ).toBeVisible();
  await expect(page.locator(".card-name")).toHaveText("Valdemar Ulrikkeholm");
  await expect(page.locator(".card-degree")).toHaveText(
    "Bachelor's degree in Cyber- og computerteknologi",
  );
});

test("the page links to interests and education", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("link", { name: "Interests", exact: true }),
  ).toHaveAttribute("href", "#focus");
  await expect(
    page.getByRole("link", { name: "Education", exact: true }),
  ).toHaveAttribute("href", "#education");
  await expect(page.getByRole("listitem")).toHaveCount(3);
});

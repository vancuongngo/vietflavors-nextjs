import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { allDishes, dishImagePath, getSection, menuSections } from "../src/data/menu";
import { site } from "../src/data/site";

describe("menu data", () => {
  it("has unique dish ids and numbers", () => {
    expect(new Set(allDishes.map((d) => d.id)).size).toBe(allDishes.length);
    expect(new Set(allDishes.map((d) => d.no)).size).toBe(allDishes.length);
  });

  it("has a photo on disk for every dish", () => {
    for (const dish of allDishes) {
      expect(existsSync(join("public", dishImagePath(dish))), dish.name).toBe(true);
    }
  });

  it("has sane prices and descriptions", () => {
    for (const dish of allDishes) {
      expect(Number.isInteger(dish.price) && dish.price > 0, dish.name).toBe(true);
      expect(dish.description.length, dish.name).toBeGreaterThan(0);
    }
  });

  it("resolves every section by id", () => {
    for (const section of menuSections) expect(getSection(section.id)).toBe(section);
  });
});

describe("site data", () => {
  it("uses an https order URL", () => {
    expect(site.orderUrl.startsWith("https://")).toBe(true);
  });

  it("only links to known routes in the nav", () => {
    expect(site.nav.map((n) => n.href)).toEqual(["/", "/menu", "/about", "/contact"]);
  });
});

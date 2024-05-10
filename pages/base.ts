import { Page } from "@playwright/test";

export class base {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}

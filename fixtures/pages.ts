export { expect } from "@playwright/test";

import { basePage } from "@pages";
import { test as testBase } from "./data";

type Pages = {
  example: basePage
};

export const test = testBase.extend<Pages>({});

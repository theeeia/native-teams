/**
 * Converts a given title string into a URL-friendly slug.
 *
 * Steps:
 * - Converts the title to lowercase.
 * - Replaces one or more non-alphanumeric characters with a single hyphen.
 * - Removes leading and trailing hyphens.
 *
 * Example:
 *  "Hello World! This is an example." => "hello-world-this-is-an-example"
 *
 * @param {string} title - The input string to convert.
 * @returns {string} The URL-friendly slug.
 */

export const titleToSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

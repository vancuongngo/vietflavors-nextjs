const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a /public asset path with the configured basePath. */
export const asset = (path: string) => `${basePath}${path}`;

// Alt text overrides for a set of shared/reused Sanity stock images whose
// dynamically-computed alt (e.g. `${product.name}`) doesn't describe what the
// image actually shows — these files are category-level fallback photography
// reused across many products, keyed by the stable Sanity asset hash so the
// match holds regardless of requested size/quality query params.
const ALT_TEXT_OVERRIDES: Record<string, string> = {
  "0f08c2480ba1dad0ecba17dddf82fcfe35766557": "aluminium windows dubai by swiftrooms",
  "c528b1624e43652914f04678454e889f1dba51d1": "aluminium doors dubai by Swiftrooms",
  "e4ccccb2214fc4c7374450b3fc5ab74a0edd37ab": "minimal sliding doors by Swiftrooms",
  "026a7381494890bd1c91eb40dbc53e0eaea63a84": "ultra slim sliding doors by Swiftrooms",
  "603ca27910aff7d7c0993addb8f086c716358a6d": "sliding doors uae by Swiftrooms",
  "f706dae35812233b8de59a768139fe0f71cb54c1": "aluminum sliding glass doors by Swiftrooms",
  "04c0121c1f4a1873f25a00783f9ef5b52f7ff692": "garden rooms dubai by Swiftrooms",
  "c44b8860f8a0044c553b6ecae0bb41201a6a183e": "upvc windows dubai by Swiftrooms",
  "3f6a352229108ebe1985467f5c28ee91028fbc67": "upvc doors and windows dubai by Swiftrooms",
  "89aff720d3ebd426834234b2afe82e269113f011": "aluminium doors dubai by Swiftrooms",
  "7d1ac1a2d3474126939aa104a72bdcef865e54c1": "aluminium doors uae by Swiftrooms",
  "6f973b6c6d0e0f3525a6f426b8c37657d4019708": "aluminium doors uae by Swiftrooms",
  "b55dc578f7b4ca322d3c9fbd0bdd67b4de87222c": "aluminum frame curtain wall by Swiftrooms",
  "e2bd927fe269ad54ae7d6d3b6b3dc18dcaea4714": "aluminium sliding windows by Swiftrooms",
  "1afbb365970298b3de4d742b8a081f33943b90e5": "curtain wall systems by Swiftrooms",
  "8ecf66a269191fb6cbd37d4f455acfb70f0a59d9": "curtain wall dubai by Swiftrooms",
  "62650ea086c344d5c48daf0f06cb2767d63de5db": "aluminium facade systems by Swiftrooms",
  "d1b5e7196077df093157e2856f067511b713de16": "aluminium bi fold doors by Swiftrooms",
};

/** Returns the override alt text for a known shared stock image, else the fallback. */
export function altTextFor(imageUrl: string | undefined | null, fallback: string): string {
  if (!imageUrl) return fallback;
  for (const hash in ALT_TEXT_OVERRIDES) {
    if (imageUrl.includes(hash)) return ALT_TEXT_OVERRIDES[hash];
  }
  return fallback;
}

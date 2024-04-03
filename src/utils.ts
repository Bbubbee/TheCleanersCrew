export const getImageUrl = (path: String) => {
  return new URL(`/public/assets/${path}`, import.meta.url).href;
  // meta.url is the base url of our website.
};

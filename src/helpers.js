export const importAll = (path) =>
  require
    .context(path, false, /\.(png|jpe?g|svg)$/)
    .keys()
    .map(r);

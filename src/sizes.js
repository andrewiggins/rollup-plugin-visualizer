export const LABELS = {
  renderedLength: "Size",
  gzipLength: "Gzip",
  brotliLength: "Brotli"
};

export const getAvailableSizeOptions = options => {
  const availableSizeProperties = ["renderedLength"];
  if (options.gzip) {
    availableSizeProperties.push("gzipLength");
  }
  if (options.brotli) {
    availableSizeProperties.push("brotliLength");
  }

  return availableSizeProperties;
};

export default {
  setSourceFile: (_, actions, file) => ({
    sourceFile: file,
  }),
  setDestinationFile: (_, actions, file) => ({
    destinationFile: file,
  }),
};

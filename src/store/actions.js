export default {
  setSourceFile: (_, actions, file) => ({
    sourceFile: file,
  }),
  setDestinationFile: ({ destinationFile }) => ({
    destinationFile,
  }),
};

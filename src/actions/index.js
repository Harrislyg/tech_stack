// When exporting many things, use 'export' not 'export default'
export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  }
}

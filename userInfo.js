function createUserProfiles(names, modifiedNames) {
  let id = 1;
  return names.map((name, index) => ({
    originalName: name,
    modifiedName: modifiedNames[index],
    id: id++,
  }));
}

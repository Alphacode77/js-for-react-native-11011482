function createUserProfiles(names, modifiedNames) {
  let id = 1;
  return names.map((name, index) => ({
    originalName: name,
    modifiedName: modifiedNames[index],
    id: id++,
  }));
}

// Sample data
const names = [];
const modifiedNames = [];

// Create user profiles
const userProfiles = createUserProfiles(names, modifiedNames);
console.log("User Profiles:", userProfiles);

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  const defaultUser: User = {
    name: "Alisa",
    surname: "Novak",
    email: "",
    password: "",
  };
  return { ...defaultUser, ...initialValues };
}

const newUser = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
console.log(newUser);

const postMethod = async ({ type, firstName, lastName, email, password }) => {
  const url = `http://localhost:3030/${
    type === "signup" ? "signup" : `users/${email}/login`
  }`;
  const body =
    type === "singUp"
      ? JSON.stringify({
          firstname: firstName,
          lastname: lastName,
          email: email,
          password: password,
        })
      : JSON.stringify({
          password: password,
        });
  const headers = {
    "Content-Type": "application/json",
  };
  return await fetch(url, { method: "POST", headers, body })
    .then((res) => res.json(), alert("Successful"))
    .catch((err) => alert(err));
};

export { postMethod };

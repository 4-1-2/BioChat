export const sendInfo = (data) => {
  const url =
    "https://getstartedpython-accountable-klipspringer-il.mybluemix.net/diagnosis";

  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return null;
    });
};

export const sendChat = (data) => {
  const url =
    "https://getstartedpython-accountable-klipspringer-il.mybluemix.net/chatbot";

  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};

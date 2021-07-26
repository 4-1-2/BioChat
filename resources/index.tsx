export const sendInfo = async (data) => {
  const url =
    "https://getstartedpython-accountable-klipspringer-il.mybluemix.net/diagnosis";

  return await fetch(url, {
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

export const sendChat = async (data) => {
  const url =
    "https://getstartedpython-accountable-klipspringer-il.mybluemix.net/chatbot";

  return await fetch(url, {
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

export const sendInfo = async (data) => {
  const url = "https://api.inresorts.club/api/dashboard/partnerState/12853";

  return await fetch(url)
    .then((res) => res.json())
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return null;
    });
};

export const sendChat = async () => {
  const url = "https://api.inresorts.club/api/TipoPago/listTipoPago";

  return await fetch(url)
    .then((res) => res.json())
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return null;
    });
};

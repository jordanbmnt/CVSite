const handleSubmit = async (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);
  const urlFormParam = paramCreator(formData);

  await fetch("/contact.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData.toString(),
  })
    .then(async () => {
      await fetch(`/.netlify/functions/dbConnection?${urlFormParam}`).then(
        (response) => {
          if (response.status == 200) {
            window.alert("Sent");
            setTimeout(() => {
              window.open("/", "_self");
            }, 200);
          }
          response.json();
        }
      );
    })
    .catch((error) => alert(error));
};

document.querySelector("form").addEventListener("submit", handleSubmit);

const paramCreator = (data) => {
  let paramStr = "";
  let count = 0;
  for (const [key, value] of data) {
    if (count < 2) paramStr += `${key}=${value}&`;
    else paramStr += `${key}=${value}`;
    count++;
  }
  return paramStr;
};

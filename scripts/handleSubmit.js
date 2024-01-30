const handleSubmit = async (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);
  const urlFormParam = paramCreator(formData);

  const loadingVisibilityOn = {
    zIndex: 100,
    opacity: 1,
  };
  const loadingVisibilityOff = {
    zIndex: 0,
    opacity: 0,
  };

  document
    .getElementsByClassName("loading-send")[0]
    .animate(loadingVisibilityOn, {
      duration: 100,
      fill: "forwards",
    });

  await fetch("/contact.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData.toString(),
  })
    .then(async () => {
      await fetch(`/.netlify/functions/dbConnection?${urlFormParam}`).then(
        (response) => {
          if (response.status == 200) {
            setTimeout(() => {
              document
                .getElementsByClassName("loading-send")[0]
                .animate(loadingVisibilityOff, {
                  duration: 100,
                  fill: "forwards",
                });
              window.alert("Sent");
            }, 900);
            setTimeout(() => {
              window.open("/", "_self");
            }, 900);
          }
          return;
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

document
  .getElementById("file_upload_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fileInput = document.getElementById("file");
    const file = fileInput.files[0];

    if (file && file.type === "application/javascript") {
      const formData = new FormData();

      formData.append("file", file);

      fetch("/u[load", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          document.getElementById("message").textContent = data.message;
        })
        .catch((error) => {
          document.getElementById("message").textContent =
            "Error uploading file...";
          console.error(error);
        });
    } else {
      document.getElementById("message").textContent =
        "Please upload a valid javascript file.";
    }
  });

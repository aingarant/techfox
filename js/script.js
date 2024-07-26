const submitButton = document.querySelector("#submit-button")

const submitForm = async (event) => {
  event.preventDefault()
  const form = document.querySelector("#contact-form")
  let message = ""

  console.log("submitting")

  const formData = new FormData(form)

  const formDataObject = Object.fromEntries(formData.entries())
  console.log(formDataObject)

  try {
    const response = await fetch("http://localhost:3000/api/techfox", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataObject),
    })

    const data = await response.json()
    console.log(data)

    if (response.ok) {
      message = "ok"
      form.reset()

      form.innerHTML = `<div class="form-submit-success">
        <h2>Your message has been sent successfully!</h2>
      </div>`
    } else {
      message = "failed"
    }
  } catch (error) {
    console.error(error)
  }
}

submitButton.addEventListener("click", submitForm)

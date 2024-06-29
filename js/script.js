const submitForm = async (event) => {
  event.preventDefault()
  const form = event.target
  const data = new FormData(form)
  const name = data.get("name")
  const email = data.get("email")
  const phone = data.get("phone")
  const message = data.get("message")

  const payload = {
    name,
    email,
    phone,
    message,
  }

  const response = await fetch("https://6gb.ca/api/techfox", {
    method: "POST",
    body: JSON.stringify(payload),
    // nocors
    cors: "no-cors",
    // headers: {
    //   "Content-Type": "application/json",
    // },
  })

  if (response.ok) {
    form.reset()
    alert("Thank you for your message. We will get back to you soon.")
  } else {
    alert("Something went wrong. Please try again later.")
  }
}

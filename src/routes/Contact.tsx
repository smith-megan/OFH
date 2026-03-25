import { useState } from "react"
import axios from "axios"
import flower from "../assets/images/flwr.jpg"

import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/Contact")({
  component: Contact,
})

function Contact() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: { ok: "", msg: "" },
  })
  const handleServerResponse = (ok: any, msg: any, form: any) => {
    const newServerState = serverState
    newServerState.submitting = false
    newServerState.status = { ok, msg }

    setServerState(newServerState)
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = (e: any) => {
    e.preventDefault()
    const form = e.target
    const newServerState = serverState
    newServerState.submitting = true
    setServerState(newServerState)
    axios({
      method: "post",
      url: "https://formspree.io/f/mblapezz",
      data: new FormData(form),
    })
      .then(() => {
        handleServerResponse(true, "Thanks!", form)
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <div>
      <div
        className="grid w-full grid-cols-1 sm:grid-cols-3 items-center pb-3"
        id="contact"
      >
        <img
          src={flower}
          className="col-span-1 row-start-2 sm:row-start-1 h-20 sm:h-full w-full object-cover object-bottom"
        />
        <div className="bg-[#583F25] h-full p-8 col-span-2 justify-center grid gap-4 items-center">
          <h1 className="text-white">Contact</h1>
          <form
            className="w-full grid gap-1 p-12 bg-white items-center"
            onSubmit={handleOnSubmit}
          >
            <input
              id="name"
              type="name"
              name="name"
              placeholder="Name"
              className="bg-white border-2 border-white border-b-[#583F25] p-2 col-span-2 outline-gray-200"
              required
            />
            <input
              placeholder="Email"
              name="contact"
              type="Text"
              className="bg-white border-2 border-white border-b-[#583F25] p-2 col-span-2 outline-gray-200"
              required
            />
            <input
              placeholder="Phone Number"
              name="phone"
              type="Text"
              className="bg-white border-2 border-white border-b-[#583F25] p-2 col-span-2 outline-gray-200"
              required
            />

            <textarea
              id="message"
              name="message"
              className="bg-white border-2 border-white border-b-[#583F25] p-2 col-span-2 outline-gray-200"
              placeholder="Message"
            ></textarea>

            <button
              type="submit"
              disabled={serverState.submitting}
              className="bg-[#e2ddcc] rounded-2xl mt-3"
            >
              Send
            </button>
            {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

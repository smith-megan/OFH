import lineTree from "../assets/images/lineTree.png"
import notes from "../assets/images/notes.jpg"
import holdPhoto from "../assets/images/holdphoto.jpg"
import lineCouple from "../assets/images/lineCouple.png"

import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/Packages")({
  component: packages,
})

function packages() {
  return (
    <div className="bg-[#fbf9f3]" id="testimonials">
      <h1 className="pt-5">Our Packages</h1>
      <div className="grid md:grid-flow-row gap-7 p-2 place-content-center justify-items-center place-items-center">
        <div className="bg-[#f4f0e2] p-4 rounded-3xl grid md:gap-10 md:grid-cols-5">
          <div className="md:col-span-3 grid place-self-center">
            <img className="w-full place-self-center" src={notes} />
          </div>
          <div className="grid gap-4 md:col-span-2 grid-flow-row place-content-center text-left p-3">
            <img className="w-1/2 place-self-center" src={lineTree} />
            <h2 className="font-special text-3xl">Preservation</h2>
            <h2 className="">
              Whether as a gift to a significant person in your life or as a way
              to document your own experiences, Preservation Packages are
              designed to capture stories at the source.
            </h2>
            <Link
              className="bg-[#583F25] p-2 text-white rounded-2xl text-xl text-center"
              to="/Contact"
            >
              Contact us
            </Link>
          </div>
        </div>
        <div className="bg-[#f4f0e2] p-4 rounded-3xl grid gap-10 md:grid-cols-4">
          <div className="grid md:col-span-2">
            <img className="w-full" src={holdPhoto} />
          </div>
          <div className="grid md:gap-4 md:col-span-2 grid-flow-row place-content-center text-left p-3">
            <img className="w-1/2 place-self-center" src={lineCouple} />
            <h2 className="font-special text-3xl">Legacy360</h2>
            <h2 className="">
              Legacy360 is collaborative storytelling from multi-generational
              perspectives and memories. This package is intended to document
              stories for milestone celebrations like:
            </h2>
            <ul>
              <li>• Milestone Birthdays</li>
              <li>• Anniversaries</li>
              <li>• Reunions</li>
              <li>• Celebrations of Life</li>
            </ul>
            <Link
              className="bg-[#583F25] p-2 text-white rounded-2xl text-xl text-center"
              to="/Contact"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default packages

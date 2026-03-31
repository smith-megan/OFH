// import lineTree from "../assets/images/lineTree.png"
// import notes from "../assets/images/notes.jpg"
// import holdPhoto from "../assets/images/holdphoto.jpg"
// import lineCouple from "../assets/images/lineCouple.png"

import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/Timeline")({
  component: timeline,
})

function timeline() {
  return (
    <div className="bg-black" id="testimonials">
      <p>timeline</p>
      <Link
              className="bg-[#583F25] p-2 text-white rounded-2xl text-xl text-center"
              to="/Contact"
            >
              Contact us
            </Link>
     </div>
  )
}

export default timeline

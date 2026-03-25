import { createRootRoute, Link, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
// import Nav from "./Nav.tsx"
import headerImage from "../assets/ppt images/ofh.jpg"
// import logo from "../assets/logo.png"
// import logo2 from "../assets/logo3.png"
import { Analytics } from "@vercel/analytics/react"

const RootLayout = () => (
  <>
    <Analytics />
    <div className="font-special font-medium text-lg bg-white grid md:grid-flow-col md:grid-cols-7 align-middle sticky top-0 z-20 p-2 shadow-md">
      <Link className="md:col-span-4 flex justify-center items-center" to="/">
        <img src={headerImage} className="self-center w-1/6 pl-4"></img>
      <p>The Old Fire House</p>
        {/* <img src={logo} className="self-center w-1/6 pl-4"></img> */}
        {/* <img src={logo2} className="self-center w-1/2 p-1" /> */}
        {/* <div className="flex justify-center items-center"> */}
        {/* <img src={media} className="  self-center w-1/5 p-1" /> */}
        {/* </div> */}
      </Link>{" "}
      {/* <Link className="self-center" to="/Packages">
        <h2>Packages</h2>
      </Link>
      <Link className="self-center" to="/" hash="brochure">
        <h2>Brochure</h2>
      </Link>
      <Link className="self-center" to="/Contact">
        <h2>Contact</h2>
      </Link> */}
      {/* <Link to="/planning"></Link> */}
      {/* <Link
        className="self-center"
        to="/Index"
        hash="testimonials"
        // params={{ section: "testimonials" }}
      >
        <h2>Testimonials</h2>
      </Link> */}
    </div>
    <Outlet />
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })

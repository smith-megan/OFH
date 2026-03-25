// import { useEffect, useRef } from "react"
// import mainlogo from "../assets/images/Mainlogo.png"
import page from "../assets/ppt images/1.jpg"
import page5 from "../assets/ppt images/5.jpg"
import page6 from "../assets/ppt images/6.jpg"

// import videopic from "./assets/images/videohold.png"
// import write from "../assets/images/write.jpg"
// import rock from "../assets/images/bg.jpg"
// import lineTree from "../assets/images/lineTree.png"
// import lineHands from "../assets/images/lineHands.png"
// import lineCouple from "../assets/images/lineCouple.png"
// import downloadImage from "../assets/download.png"
// import rightImage from "../assets/right.png"
// import leftquote from "../assets/leftquote.png"
// import rightquote from "../assets/rightquote.png"
// import video from "../assets/video/sm.mp4"
import "../App.css"
// import Contact from "../routes/Contact"

import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: Index,
})

function Index() {
  // const testimonialRef = useRef<HTMLDivElement | null>(null)

  // const { section } = Route.useParams()
  // useEffect(() => {
  //   if (testimonialRef.current && section === "testimonials") {
  //     testimonialRef.current.scrollIntoView({ behavior: "smooth" })
  //   }
  // }, [section])

  return (
    <>
      <div
        // className="grid md:grid-cols-2 bg-[#f4f0e2] place-content-center place-items-center p-5"
        // id="intro"
      >
        {/* <img
          className="align-middle justify-self-center"
          src={mainlogo}
          alt="LifeTheater Logo"
        /> */}
        {/* <video
          className="align-middle justify-self-center place-content-center p-2 rounded-3xl"
          controls
        >
          <source
            className="align-middle justify-self-center"
            src={video}
            type="video/mp4"
          /> */}
        {/* </video> */}
        <img className="aligh-middle justify-self-center" src={page}/>
        {/* <img
          className="align-middle justify-self-center"
          src={videopic}
          alt="Lifetheater Logo"
        /> */}
      </div>
      <div>
        <img className="aligh-middle justify-self-center" src={page5}/>
      </div>
      <div>
        <img className="aligh-middle justify-self-center" src={page6}/>
      </div>
      
          {/* <div>
            <div className="bg-[#f4f0e2] p-4 rounded-3xl">
              <img
                src={lineTree}
                alt="Line Drawing of a tree"
                className="self-center justify-self-center w-5/6 rounded-3xl p-3"
              />
              <div className="grid grid-flow-col place-content-center text-center">
                <img
                  src={leftquote}
                  className="w-1/4 self-start justify-self-end"
                />
                <h2 className=" p-1 pt-4 pb-4">
                  Something Different that is longer than just a few words and
                  will be filled in after a minute here
                </h2>
                <img
                  src={rightquote}
                  className="w-1/4 self-end justify-self-start pb-2"
                />
              </div>
              <h2 className="font-special text-xl">-Bob Johnson</h2>
            </div>
          </div>
          <div>
            <div className="bg-[#f4f0e2] p-4 rounded-3xl">
              <img
                src={lineCouple}
                alt="Line Drawing of a tree"
                className="self-center justify-self-center w-full rounded-3xl p-3"
              />
              <div className="grid grid-flow-col place-content-center text-center">
                <img
                  src={leftquote}
                  className="w-1/4 self-start justify-self-end"
                />
                <h2 className="p-1 pt-4 pb-4">
                  I will fill this in later with something great and it will be
                  inspiring
                </h2>
                <img
                  src={rightquote}
                  className="w-1/4 self-end justify-self-start pb-2"
                />
              </div>
              <h2 className="font-special text-xl">-Oprah Winfrey</h2>
            </div>
          </div> */}
      {/* <div id="Contact">
        <Contact />
      </div> */}
      <div className="bg-[#e2ddcc] h-10"></div>
    </>
  )
}

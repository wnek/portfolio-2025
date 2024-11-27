import { useEffect } from "react";

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

export default function Index() {

  const lenis = useLenis(({ scroll }) => {

  })


  return (
    <ReactLenis root>
      <div className="p-8">

        <section className="m-auto max-w-screen-md flex flex-col gap-8">
          <h1 className="text-5xl">Growth by design</h1>

        </section>

        <section className="m-auto max-w-screen-md flex flex-col gap-8">



          <ul className="flex flex-col gap-1">
            <li className="flex gap-4 bg-white p-4 rounded-md">
              Focus on the most critical performance metrics.
            </li>

            <li className="flex gap-4 bg-white p-4 rounded-md">
              Identify and prioritize customer needs and expectations.
            </li>

            <li className="flex gap-4 bg-white p-4 rounded-md">
              Create user experiences that drive conversions and growth.
            </li>
          </ul>
          <h1>Selected Works</h1>
        </section>
      </div >
    </ReactLenis>
  );
}

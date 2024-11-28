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



          <h1>Selected Works</h1>
        </section>
      </div >
    </ReactLenis>
  );
}

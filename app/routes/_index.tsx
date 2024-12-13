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
          <h2>Together</h2>
          <h2>Tagger</h2>
          <h2>Antigro</h2>
          <h2>Theatre.js</h2>
        </section>

        <footer>
          <p>© 2024 Growth by Design</p>
        </footer>
      </div >
    </ReactLenis>
  );
}

import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

import { Canvas } from "@react-three/fiber";
import { CameraControls, SoftShadows } from "@react-three/drei";

export default function Index() {

  const [scope, animate] = useAnimate();



  useEffect(() => {
    animate("li", { y: -5, filter: "blur(10px)" }, { delay: stagger(0.1) })
  }, [])

  return (
    <>
      <div className="bg-white p-8">
        <div className="w-full h-screen border-red-500 border-2">
          <Canvas>
            <CameraControls />
            <SoftShadows />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <mesh>
              <boxGeometry />
              <meshStandardMaterial />
            </mesh>
          </Canvas>
        </div>
        <section className="m-auto max-w-screen-md flex flex-col gap-8">
          <h1 className="~text-[2rem]/[5rem]">Growth by design</h1>

        </section>

        <section className="m-auto max-w-screen-md flex flex-col gap-8">
          <p className="text-sm text-orange-500">Manifesto</p>

          <p>Every new concept appears promising. It's easy to simply follow in the footsteps of competitors, trust your instincts, or optimistically hope for the best. However, our judgment is often clouded by subtle biases, leading to less than rational decision-making.
          </p>

          <p>Impactful design goes beyond just aesthetic appeal. It must directly contribute to business performance. My approach incorporates design, psychology, and technology, with a specific focus on driving product growth.</p>

          <ul ref={scope} className="flex flex-col gap-1">
            <li className="flex gap-4 bg-stone-100 p-4 rounded-md">
              Focus on the most critical performance metrics.
            </li>

            <li className="flex gap-4 bg-stone-100 p-4 rounded-md">
              Identify and prioritize customer needs and expectations.
            </li>

            <li className="flex gap-4 bg-stone-100 p-4 rounded-md">
              Create user experiences that drive conversions and growth.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

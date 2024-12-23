import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  NavLink,
  Outlet,
  LiveReload
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";
import { useLocation, useOutlet } from "@remix-run/react";


import { AnimatePresence, motion, spring } from "framer-motion";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export default function App() {

  const outlet = useOutlet();


  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header className="flex justify-between m-auto max-w-screen-md">
          <p>Mariusz Wnęk</p>
          <a href="https://twitter.com/mariuszwn">Let's talk</a>
          {/* <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/lab">Lab</NavLink>
          </nav> */}
        </header>

        <AnimatePresence initial={false}>
          <motion.main
            key={useLocation().pathname}
            initial={{ y: 19, opacity: 0, filter: 'blur(5px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0)' }}
            transition={{
              duration: 0.1,
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
          >
            {outlet}
          </motion.main>
        </AnimatePresence>


        <ScrollRestoration />
        <Scripts />



      </body>
    </html>
  );
}

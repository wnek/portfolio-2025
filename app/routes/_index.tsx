import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        Home
      </motion.h1>
      <motion.div
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
      >
        <Link to="/about">About</Link>
      </motion.div>
      <motion.div
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
      >
        <Link to="/lab">Lab</Link>
      </motion.div>
    </motion.div>
  );
}

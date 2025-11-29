import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{
        duration: 0.32,
        ease: [0.22, 1, 0.36, 1], // like smooth
      }}
      style={{ height: "100%", width: "100%" }}
    >
      {children}
    </motion.div>
  );
}

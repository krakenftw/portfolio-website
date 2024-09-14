import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

export default function AnimateOnLoad({
  children,
  delay,
}: {
  children: ReactNode;
  delay: number;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <AnimatePresence>
      <motion.div
        animate={isVisible ? "visible" : "hidden"}
        initial="hidden"
        whileInView={"visible"}
        transition={{ duration: 0.3, delay: delay }}
        variants={{
          visible: { opacity: 1, translateY: 0 },
          hidden: { opacity: 0, translateY: 50 },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

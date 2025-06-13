import { motion } from "framer-motion";

export default function SunWithRays({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <div
      className="relative w-64 h-64 flex items-center justify-center"
      onClick={onClick}
    >
      <motion.div
        className="absolute -inset-10 rounded-full bg-yellow-200 blur-[120px] opacity-60 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      {children}
    </div>
  );
}

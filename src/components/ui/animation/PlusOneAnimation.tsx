import { motion } from "framer-motion";

export const PlusOneAnimation = ({
  isVisible,
  onComplete,
}: {
  isVisible: boolean;
  onComplete: () => void;
}) => {
  return (
    <>
      {isVisible && (
        <motion.div
          className="absolute text-2xl font-bold text-green-500 pointer-events-none z-10"
          initial={{
            opacity: 0,
            y: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            y: -80, // улетает на 80px вверх (примерно 20vh)
            scale: 1.2,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          onAnimationComplete={() => {
            // Скрываем элемент после завершения анимации
            onComplete();
          }}
        >
          +1
        </motion.div>
      )}
    </>
  );
};

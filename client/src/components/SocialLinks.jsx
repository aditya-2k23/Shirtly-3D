import { socials } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import { fadeAnimation } from "../config/motion";
import state from "../store";

const SocialLinks = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.div {...fadeAnimation}>
          <div
            className={`flex items-center justify-between w-full h-14 absolute left-96 bottom-0 p-2`}
          >
            <p className="text-center text-sm cursor-default hover:text-base transition-all">
              Made with <span className="text-red-500">❤️</span> by{" "}
              <span className="font-semibold">Aditya</span>
            </p>
            <ul className="flex gap-6 flex-wrap">
              {socials.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  className="flex items-center justify-center text-sm hover:border-b hover:border-gray-700 transition-all duration-100"
                >
                  {item.title}
                </a>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialLinks;

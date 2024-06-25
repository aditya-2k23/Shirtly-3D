import { socials } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import { fadeAnimation } from "../config/motion";
import state from "../store";
import { useState } from "react";
import Modal from "./Modal";

const SocialLinks = () => {
  const snap = useSnapshot(state);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.div {...fadeAnimation}>
          <div className="flex flex-row sm:flex-row items-center justify-center w-full h-14 fixed bottom-0 p-2">
            <div className="sm:hidden flex items-center absolute left-0 mr-10">
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-gray-700 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isModalOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  ></path>
                </svg>
              </button>
            </div>
            <p className="text-center text-sm cursor-default  hover:text-base transition-all">
              Made with <span className="text-red-500 mx-[0.1rem]">❤️</span> by{" "}
              <span className="font-semibold">Aditya</span>
            </p>
            <div className="hidden sm:flex flex-1 justify-center">
              <ul className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center">
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

            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              socials={socials}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialLinks;

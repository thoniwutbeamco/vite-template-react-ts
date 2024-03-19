import { motion, AnimatePresence } from "framer-motion";
import "./index.css";
import { useEffect, useState } from "react";

function AppBar() {
  const arr = [
    {
      imgSrc:
        "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
    },
    {
      imgSrc:
        "https://thumbs.dreamstime.com/b/beagle-dog-isolated-white-background-purebred-103538194.jpg",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAsNlTPZlwFNbgd1BcIIe2QKfvpWRhW4oXHrY3qJleZ7LwMDG3WOA2oGjZRpRKZhBdg68&usqp=CAU",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYEfSWsNivfeBc8nJBpjkWqxQtmMw_-QjffuWs87fLsmkrDZqyFRWFxaxE9wKFTWN__I&usqp=CAU",
    },
    {
      imgSrc:
        "https://dogtime.com/wp-content/uploads/sites/12/2023/09/Screen-Shot-2023-09-09-at-10.53.20-AM.png?w=1024",
    },
  ];
  const [selected, setSelected] = useState<number>(0);

  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    if (isStart) {
      const interval = setInterval(() => {
        setSelected((prevSelected) => prevSelected + 1);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [arr.length, isStart]);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="relative w-full h-full flex flex-col items-center">
        <AnimatePresence>
          {arr.map(
            (item, index) =>
              index === selected && (
                <motion.div
                  className="absolute w-[500px] h-[500px]"
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 1 }}
                >
                  {/* Element {index} */}
                  <img
                    className="w-full h-full object-cover pt-[20px]"
                    src={item.imgSrc}
                    alt="ff"
                  />
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      <button
        className="w-[200px]  fixed bottom-[20px] border-solid border px-[12px] py-[20px] bg-green-600"
        onClick={() => setIsStart(true)}
      >
        Button
      </button>
    </div>
  );
}

export default AppBar;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Dog1Pic from "./../../assets/dog1.jpg";
import Dog2Pic from "./../../assets/dog2.jpg";
import Dog3Pic from "./../../assets/dog3.jpg";
import { ReactFloatingBalloons } from "react-floating-balloons";
import Page2 from "../Page2";

function Page1() {
  const arr1 = useMemo(
    () => [
      {
        image: undefined,
        text: undefined,
      },
      {
        image: Dog1Pic,
      },
      {
        image: Dog2Pic,
      },
      {
        image: Dog3Pic,
        text: "Lum1-3",
      },
      {
        text: "Lum1-4",
      },
    ],
    []
  );
  const arr2 = useMemo(
    () => [
      {
        image: undefined,
        text: undefined,
      },
      {
        image: Dog3Pic,
      },
      {
        text: "Lum2-2",
      },
      {
        image: Dog1Pic,
        text: "Lum2-3",
      },
      {
        text: "Lum2-4",
      },
      {
        image: Dog3Pic,
      },
    ],
    []
  );
  const dataState = useMemo(() => [arr1, arr2], [arr1, arr2]);

  const [step, setStep] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [animState, setAnimState] = useState<boolean>(false);
  const [hideButton, setHideButton] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);

  const [showPage2, setShowPage2] = useState<boolean>(false);

  useEffect(() => {
    if (animState) {
      const interval = setInterval(
        () => {
          if (selectedIndex !== data?.length - 1 || step < dataState.length - 1)
            setSelectedIndex((prev) => prev + 1);
        },
        selectedIndex === 0 ? 0 : 2000
      );

      if (selectedIndex === data?.length - 1) {
        setHideButton(false);
        setAnimState(false);
        if (step < dataState.length - 1) {
          setSelectedIndex(0);
          setData(undefined);
          setStep((prev) => prev + 1);
        }
      }

      return () => clearInterval(interval);
    }
  }, [animState, selectedIndex, data, step, dataState.length]);

  const Balloons = useMemo(() => {
    return (
      <div className="absolute">
        <ReactFloatingBalloons
          count={3}
          msgText=""
          colors={["red", "green"]}
          popVolumeLevel={0.5}
        />
      </div>
    );
  }, []);

  if (showPage2) {
    return <Page2 />;
  }

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="relative w-full h-full flex flex-col items-center">
        <AnimatePresence>
          {data?.map(
            (item: any, index: any) =>
              index === selectedIndex && (
                <motion.div
                  className="absolute w-[calc(100vw-40px)] max-w-[400px] h-[350px] top-[120px] flex flex-col items-center"
                  key={index}
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2.5 }}
                >
                  {item.image && (
                    <img
                      className="w-full h-full object-cover"
                      src={item.image}
                      alt="image"
                    />
                  )}
                  {item.text && (
                    <span className="text-[100px] font-jamjuree font-semibold text-pink-300 w-full text-center">
                      {item.text}
                    </span>
                  )}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {!hideButton && (
        <button
          className="w-[300px] fixed bottom-[20px] border-solid border-2 border-black px-[12px] py-[16px] bg-[#FCE33C] rounded-full text-[28px] font-jamjuree font-semibold"
          onClick={() => {
            if (selectedIndex === 0) {
              setData(dataState[step]);
            } else {
              setShowPage2(true);
            }
            setAnimState(true);
            setHideButton(true);
          }}
        >
          Click!
        </button>
      )}
      {Balloons}
    </div>
  );
}

export default Page1;

import { useState, useEffect, useRef } from "react";
import cn from "clsx";

import "./Banner.scss";
import macbookImg from "#assets/img/shapes/macbook.png";
import macbook2xImg from "#assets/img/shapes/macbook@2x.png";
import jsImg from "#assets/img/pictures/js.svg";
import tsImg from "#assets/img/pictures/ts.svg";
import reactImg from "#assets/img/pictures/react.svg";
import vueImg from "#assets/img/pictures/vue.svg";
import htmlImg from "#assets/img/pictures/html.svg";
import cssImg from "#assets/img/pictures/css.svg";
import sassImg from "#assets/img/pictures/sass.svg";
import muiImg from "#assets/img/pictures/mui.svg";
import npmImg from "#assets/img/pictures/npm.svg";
import viteImg from "#assets/img/pictures/vite.svg";
import vscodeImg from "#assets/img/pictures/vscode.svg";
import gitImg from "#assets/img/pictures/git.svg";
import gptImg from "#assets/img/pictures/gpt.svg";

import { ROUTE } from "#utils/constants";
import { DURATION } from "#styles/theme";
import { Tilt, Section } from "#components/common";

type Timeout = ReturnType<typeof setTimeout>;

export default function Banner() {
  return (
    <Section aside colorful contentClassName="Banner" nextTo={ROUTE.about}>
      <div className="Banner-Content">
        <Tilt el="figure" className="Banner-Figure" speed={DURATION.lingering}>
          <MacScreen />
        </Tilt>
      </div>
    </Section>
  );
}

const MacScreen = () => {
  const [show, setShow] = useState(0);
  const timer = useRef<Timeout | null>(null);

  useEffect(() => {
    const handleAutoShowSet = () => {
      setShow((show) => (show < images.length - 1 ? show + 1 : 0));
      timer.current = setTimeout(handleAutoShowSet, DURATION.longest);
    };
    timer.current = setTimeout(handleAutoShowSet, DURATION.longest);
    return () => {
      if (timer.current !== null) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  return (
    <>
      <img
        className="Banner-Image"
        width={652}
        height={417}
        src={macbookImg}
        srcSet={`${macbook2xImg} 2x`}
        alt="MacBook Pro"
        loading="lazy"
      />
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className={cn(
            "Banner-ScreenImage",
            index === show && "Banner-ScreenImage_show"
          )}
          alt={`Screen technology ${index}`}
          loading="lazy"
        />
      ))}
    </>
  );
};

const images = [
  jsImg,
  tsImg,
  reactImg,
  vueImg,
  htmlImg,
  cssImg,
  sassImg,
  muiImg,
  npmImg,
  viteImg,
  vscodeImg,
  gitImg,
  gptImg,
];

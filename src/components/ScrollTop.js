import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ScrollTop = () => {
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document
          .querySelector(".progress-wrap")
          .classList.add("active-progress");
      } else {
        document
          .querySelector(".progress-wrap")
          .classList.remove("active-progress");
      }
    };

    const handleScrollTop = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const progressCircle = document.querySelector(".progress-wrap path");
    const totalLength = progressCircle.getTotalLength();
    progressCircle.style.transition = progressCircle.style.WebkitTransition =
      "none";
    progressCircle.style.strokeDasharray = totalLength + " " + totalLength;
    progressCircle.style.strokeDashoffset = totalLength;
    progressCircle.getBoundingClientRect();
    progressCircle.style.transition = progressCircle.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";

    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage =
        (scrollTop / (scrollHeight - windowHeight)) * totalLength;
      progressCircle.style.strokeDashoffset = totalLength - scrollPercentage;
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", updateProgress);
    document
      .querySelector(".progress-wrap")
      .addEventListener("click", handleScrollTop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", updateProgress);
      document
        .querySelector(".progress-wrap")
        .removeEventListener("click", handleScrollTop);
    };
  }, []);

  return (
    <>
      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </>
  );
};

export default ScrollTop;

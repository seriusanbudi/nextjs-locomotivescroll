import { useEffect, useId } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useMotionValue, motion, transform } from "framer-motion";

const RevealOnScroll = (props) => {
  const { scroll, isReady } = useLocomotiveScroll();

  const id = useId();

  const opacity = useMotionValue(0);
  const y = useMotionValue(40);

  useEffect(() => {
    if (!isReady) return;

    scroll.on("scroll", (args) => {
      if (typeof args.currentElements[id] === "object") {
        let progress = args.currentElements[id].progress;
        opacity.set(transform([0.2, 0.4], [0, 1])(progress.toFixed(4)));
        y.set(transform([0.2, 0.3], [80, 0])(progress.toFixed(4)));
      }
    });
  }, [isReady]);

  return (
    <div data-scroll data-scroll-id={id}>
      <motion.div style={{ opacity, y }}>{props.children}</motion.div>
    </div>
  );
};

const StaggerTextReveal = (props) => {
  const {
    className,
    separator = " ",
    duration = 1,
    delay = 0.2,
    children,
  } = props;
  const id = useId();

  return (
    <div className={className}>
      {children.split(separator).map((child, i) => (
        <motion.div
          className="inline-block"
          key={`${id}:${i}`}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay * i,
            type: "tween",
            duration: duration,
            ease: "easeOut",
          }}
        >
          {child}&nbsp;
        </motion.div>
      ))}
    </div>
  );
};

const RevealOnCenterScreen = (props) => {
  const { scroll, isReady } = useLocomotiveScroll();
  const opacity = useMotionValue(0);

  let id = useId();
  id = id.replace(/:/g, "");

  useEffect(() => {
    if (!isReady) return;

    scroll.on("scroll", (args) => {
      if (typeof args.currentElements[id] === "object") {
        let progress = args.currentElements[id].progress;
        opacity.set(
          transform([0.45, 0.5, 0.8, 0.9], [0, 1, 1, 0])(progress.toFixed(4))
        );
      }
    });
  }, [isReady]);

  return (
    <div
      id={id}
      data-scroll
      data-scroll-id={id}
      className="h-screen my-[20vh] w-full flex justify-center items-center"
    >
      <motion.div
        style={{ opacity }}
        data-scroll
        data-scroll-sticky
        data-scroll-target={`#${id}`}
      >
        {props.children}
      </motion.div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <section data-scroll-section>
        <div className="flex justify-center h-screen items-center">
          <div className="p-10">
            <StaggerTextReveal className="text-[10vw] text-center">
              Budi Harta Guna
            </StaggerTextReveal>
            <div className="flex justify-center">
              <StaggerTextReveal
                className="text-center max-w-[500px]"
                delay={0.02}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                viverra massa lorem, et congue metus pulvinar ut. Praesent
                vestibulum fermentum turpis ut tristique.
              </StaggerTextReveal>
            </div>
          </div>
        </div>
      </section>

      <section data-scroll-section>
        <div className="flex justify-center h-screen items-center flex-col">
          <div data-scroll data-scroll-speed="2" className="text-[10vw]">
            Here come sticky
          </div>
        </div>
      </section>

      <section data-scroll-section>
        <div id="sticky-section-1" className="grid grid-cols-2">
          <div data-scroll className="px-[5vw]">
            <h2
              data-scroll
              data-scroll-sticky
              data-scroll-target="#sticky-section-1"
              className="text-[5vw] pt-[32vh]"
            >
              Soo Awesome
            </h2>
          </div>
          <div className="px-10">
            <div className="mb-[300px] pt-[32vh]">
              <RevealOnScroll>
                <h2 className="text-4xl md:text-[3vw]">Title 1</h2>
              </RevealOnScroll>
              <RevealOnScroll>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus viverra massa lorem, et congue metus pulvinar ut.
                  Praesent vestibulum fermentum turpis ut tristique.
                </p>
              </RevealOnScroll>
            </div>
            <div className="mb-[300px]">
              <RevealOnScroll>
                <h2 className="text-4xl md:text-[3vw]">Title 2</h2>
              </RevealOnScroll>
              <RevealOnScroll>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus viverra massa lorem, et congue metus pulvinar ut.
                  Praesent vestibulum fermentum turpis ut tristique.
                </p>
              </RevealOnScroll>
            </div>
            <div>
              <RevealOnScroll>
                <h2 className="text-4xl md:text-[3vw]">Title 3</h2>
              </RevealOnScroll>
              <RevealOnScroll>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus viverra massa lorem, et congue metus pulvinar ut.
                  Praesent vestibulum fermentum turpis ut tristique.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
      <section data-scroll-section>
        <div id="sticky-section-2" className="grid grid-cols-2">
          <div className="px-10">
            <div className="mb-[300px] pt-[32vh]">
              <RevealOnScroll>
                <h2 className="text-4xl md:text-[3vw]">Title 1</h2>
              </RevealOnScroll>
              <RevealOnScroll>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus viverra massa lorem, et congue metus pulvinar ut.
                  Praesent vestibulum fermentum turpis ut tristique.
                </p>
              </RevealOnScroll>
            </div>
            <div className="mb-[300px]">
              <RevealOnScroll>
                <h2 className="text-4xl md:text-[3vw]">Title 2</h2>
              </RevealOnScroll>
              <RevealOnScroll>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus viverra massa lorem, et congue metus pulvinar ut.
                  Praesent vestibulum fermentum turpis ut tristique.
                </p>
              </RevealOnScroll>
            </div>
            <div>
              <RevealOnScroll>
                <h2 className="text-4xl md:text-[3vw]">Title 3</h2>
              </RevealOnScroll>
              <RevealOnScroll>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus viverra massa lorem, et congue metus pulvinar ut.
                  Praesent vestibulum fermentum turpis ut tristique.
                </p>
              </RevealOnScroll>
            </div>
          </div>
          <div data-scroll className="px-[5vw]">
            <h2
              data-scroll
              data-scroll-sticky
              data-scroll-target="#sticky-section-2"
              className="text-[5vw] pt-[32vh]"
            >
              Zuper cool!
            </h2>
          </div>
        </div>
      </section>

      <section data-scroll-section className="py-[20vh]">
        <div className="flex justify-center h-[50vh] bg-black items-center flex-col overflow-hidden">
          <div
            data-scroll
            data-scroll-speed="10"
            className="text-[10vw] text-red-500"
          >
            It&apos;s cool right?
          </div>
        </div>
      </section>

      <section data-scroll-section className="relative">
        <div id="section-long-sticky">
          <RevealOnCenterScreen>
            <h2 className="text-[10vw]">Lets count down!</h2>
          </RevealOnCenterScreen>
          <RevealOnCenterScreen>
            <h2 className="text-[10vw]">3</h2>
          </RevealOnCenterScreen>
          <RevealOnCenterScreen>
            <h2 className="text-[10vw]">2</h2>
          </RevealOnCenterScreen>
          <RevealOnCenterScreen>
            <h2 className="text-[10vw]">1</h2>
          </RevealOnCenterScreen>
          <div className="h-screen w-full" />

          {/* background */}
          <div
            data-scroll
            data-scroll-sticky
            data-scroll-target="#section-long-sticky"
            className="absolute inset-0 flex h-screen bg-red-200"
            style={{ zIndex: -1 }}
          />
        </div>
      </section>

      <section data-scroll-section>
        <div className="flex justify-center items-center h-screen">
          <div className="text-4xl md:text-[20vh] font-bold">Timeout!</div>
        </div>
      </section>

      <section data-scroll-section>
        <div className="flex justify-center h-[20vh] items-end">
          End of the page
        </div>
      </section>
    </>
  );
}

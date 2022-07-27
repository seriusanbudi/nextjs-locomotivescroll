import { useRouter } from "next/router";
import { useRef } from "react";
import { LocomotiveScrollProvider as RLSProvider } from "react-locomotive-scroll";

import "locomotive-scroll/dist/locomotive-scroll.css";
import "../styles/globals.css";
import "../styles/locomotive-scroll.css";

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();
  const containerRef = useRef(null);

  return (
    <RLSProvider
      options={{
        smooth: true,
        scrollFromAnywhere: true,
        multiplier: 0.2,
        touchMultiplier: 10,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      }}
      location={asPath}
      onLocationChange={(scroll) =>
        scroll.scrollTo(0, { duration: 0, disableLerp: true })
      }
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <Component {...pageProps} />;
      </div>
    </RLSProvider>
  );
}

export default MyApp;

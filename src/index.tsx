import React from 'react'

interface CustomLoader {
  rows?: Number,
  background?: String,
  foreground?: String,
  elevation?: Number,
  speed?: Number,
  rounded?: String,
  style?: Object,
  size?: {
    height?: Number | String,
    width?: Number | String
  },
  animation?: "wave" | "pulse"
}

const ContentShimmer = ({ rows, background, elevation, speed, size, foreground, rounded, style, animation }: CustomLoader): JSX.Element => {
  let counter = [], i = 0, len = rows ? rows : 1;
  while (++i <= len) counter.push(i);
  const cardLoader = {
    boxShadow: elevation ? `0 1px 2px 1px rgba(0, 0, 0, ${elevation})` : "0 1px 2px 1px rgba(0, 0, 0, 0.08), 0 -1px 3px 0 rgba(0, 0, 0, 0.06);",
    animationDuration: typeof speed === "undefined" ? "1s" : speed + "s",
    borderRadius: rounded ? `${rounded}` : "0px",
    background: `linear-gradient(to right, ${background ? background : "#eeeeee"} 8%, ${foreground ? foreground : "#dddddd"} 18%, ${background ? background : "#eeeeee"} 33%)`,
    height: size?.height ? `${size.height}px` : "50px",
    width: size?.width ? `${size.width}px` : "150px",
  }
  const finalCardLoader = Object.assign(cardLoader, style);
  return (
    <div>
      <style>
        {
          `@keyframes wave {
            0% {
                background-position: -468px 0
            }
            100% {
                background-position: 468px 0
            }
          }
          @keyframes pulse {
            0% {
                opacity: 0.8;
            }
            50% {
              opacity: 0.4;
            }
            100% {
              opacity: 1;
            }
          }
          .defaultProp {
            background-size: 1500px 1000px !important;
            animation-fill-mode: forwards !important;
            animation-iteration-count: infinite !important;
          }
          
          .ShimmerRight {
              animation-name: ${typeof animation === "undefined" ? "wave" : animation};
          }
          `
        }
      </style>
      {counter.map((_, k) => {
        return <div key={k} className="ShimmerRight defaultProp" style={finalCardLoader} ></div>
      })}
    </div>
  )
}

interface profileStyle extends CustomLoader {
  radius?: "xs" | "sm" | "md" | "lg" | "xl"
}

const ProfileShimmer = ({ rows, background, elevation, speed, foreground, rounded, radius, style, animation }: profileStyle): JSX.Element => {
  let counter = [], i = 0, len = rows ? rows : 1;
  while (++i <= len) counter.push(i);
  const height = 50
  const width = 50
  const _rounded = rounded ? rounded : "50%"
  const profileLoader = {
    padding: radius === "sm" ? `0rem` : radius === "md" ? `1rem` : radius === "lg" ? `2rem` : radius === "xl" ? `4rem` : radius === "xs" ? `0.5rem` : '0rem'
  }
  return (<div>
    {counter.map((_, k) => {
      return (<div style={style} key={k}>
        <ContentShimmer background={background} elevation={elevation} speed={speed} foreground={foreground} size={{ height: height, width: width }} animation={animation} rounded={_rounded} style={profileLoader} />
      </div>)
    })}
  </div>)
}

interface SocialPlatFormStyle extends CustomLoader {
  variant?: "default" | "rounded",
}

const SocialShimmer = ({ rows, elevation, speed, background, foreground, variant, style, animation }: SocialPlatFormStyle): JSX.Element => {
  let counter = [], i = 0, len = rows ? rows : 1;
  while (++i <= len) counter.push(i);
  return (
    <div>
      {counter.map((_, k) => {
        return (
          <div style={style} key={k} >
            <div style={{ display: "flex", alignItems: "center" }}>
              <ProfileShimmer animation={animation} elevation={elevation} speed={speed} foreground={foreground} background={background} />
              <div style={{ paddingLeft: "2rem" }}>
                <ContentShimmer animation={animation} style={{ marginBottom: "1rem" }} size={{ height: 7, width: 200 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
                <ContentShimmer animation={animation} size={{ height: 7, width: 100 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              </div>
            </div>
            <ContentShimmer animation={animation} style={{ marginTop: "1rem" }} size={{ height: 500, width: 500 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "20px"} />
          </div>
        )
      })}
    </div>
  )
}

const BulletListShimmer = ({ rows, elevation, speed, background, foreground, variant, style, animation }: SocialPlatFormStyle): JSX.Element => {
  let counter = [], i = 0, len = rows ? rows : 1;
  while (++i <= len) counter.push(i);
  const height = 50
  const width = 50
  return (
    <div>
      {counter.map((_, k) => {
        return (
          <div style={style} key={k}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
              <ContentShimmer animation={animation} background={background} elevation={elevation} speed={speed} foreground={foreground} rounded={variant == "default" ? "0px" : "50%"} size={{ height: height, width: width }} />
              <div>
                <ContentShimmer animation={animation} style={{ marginLeft: "1rem", marginBottom: "0.5rem" }} size={{ height: 16, width: 250 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
                <ContentShimmer animation={animation} style={{ marginLeft: "1rem" }} size={{ height: 9, width: 150 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
              <ContentShimmer animation={animation} background={background} elevation={elevation} speed={speed} foreground={foreground} rounded={variant == "default" ? "0px" : "50%"} size={{ height: height, width: width }} />
              <div>
                <ContentShimmer animation={animation} style={{ marginLeft: "1rem", marginBottom: "0.5rem" }} size={{ height: 16, width: 250 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
                <ContentShimmer animation={animation} style={{ marginLeft: "1rem" }} size={{ height: 9, width: 150 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const CodeShimmer = ({ rows, elevation, speed, background, foreground, variant, style, animation }: SocialPlatFormStyle): JSX.Element => {
  let counter = [], i = 0, len = rows ? rows : 1;
  while (++i <= len) counter.push(i);
  return (
    <div>
      {counter.map((_, k) => {
        return (
          <div style={style} key={k}>
            <div style={{ marginBottom: "1rem" }}>
              <ContentShimmer animation={animation} style={{ padding: "0.5rem" }} size={{ height: 10, width: 70 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
            </div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
              <ContentShimmer animation={animation} style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 130 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              <ContentShimmer animation={animation} style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 80 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              <ContentShimmer animation={animation} style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 200 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
            </div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
              <ContentShimmer animation={animation} style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 130 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              <ContentShimmer animation={animation} style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 200 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              <ContentShimmer animation={animation} style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 80 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
            </div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
              <ContentShimmer animation={animation} style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 80 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              <ContentShimmer animation={animation} style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 130 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              <ContentShimmer animation={animation} style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 200 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
            </div>
            <div >
              <ContentShimmer animation={animation} style={{ padding: "0.5rem" }} size={{ height: 10, width: 70 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

const CardShimmer = ({ rows, elevation, speed, background, foreground, variant, style, animation }: SocialPlatFormStyle): JSX.Element => {
  let counter = [], i = 0, len = rows ? rows : 1;
  while (++i <= len) counter.push(i);
  return (
    <div>
      {counter.map((_, k) => {
        return (
          <div style={style} key={k}>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ContentShimmer animation={animation} size={{ height: 80, width: 80 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
                <div style={{ paddingLeft: "2rem" }}>
                  <ContentShimmer animation={animation} style={{ marginBottom: "0.5rem" }} size={{ height: 15, width: 150 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
                  <ContentShimmer animation={animation} size={{ height: 15, width: 100 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
                </div>
              </div>
              <ContentShimmer animation={animation} style={{ marginTop: "1rem" }} size={{ height: 20, width: 300 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              <ContentShimmer animation={animation} style={{ marginTop: "0.5rem" }} size={{ height: 20, width: 300 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export {
  ProfileShimmer,
  SocialShimmer,
  BulletListShimmer,
  CodeShimmer,
  CardShimmer,
}
export default ContentShimmer
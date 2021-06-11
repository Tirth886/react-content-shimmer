import React from 'react'

interface CustomLoader {
  rows?: Number,
  background?: String,
  forground?: String,
  elevation?: Number,
  speed?: "slow" | "fast" | "xfast",
  rounded?: String,
  style?: Object,
  size?: {
    height?: Number | String,
    width?: Number | String
  }
}

const Shimmer = ({ rows, background, elevation, speed, size, forground, rounded, style }: CustomLoader): JSX.Element => {
  let counter = [], i = 0, len = rows ? rows : 1;
  while (++i <= len) counter.push(i);
  const cardLoader = {
    boxShadow: elevation ? `0 1px 2px 1px rgba(0, 0, 0, ${elevation})` : "0 1px 2px 1px rgba(0, 0, 0, 0.08), 0 -1px 3px 0 rgba(0, 0, 0, 0.06);",
    animationDuration: speed == "slow" ? "1.5s" : speed == "fast" ? "1s" : speed == "xfast" ? "0.5s" : "1s",
    borderRadius: rounded ? `${rounded}` : "0px",
    background: `linear-gradient(to right, ${background ? background : "#eeeeee"} 8%, ${forground ? forground : "#dddddd"} 18%, ${background ? background : "#eeeeee"} 33%)`,
    height: size?.height ? `${size.height}px` : "50px",
    width: size?.width ? `${size.width}px` : "150px",
  }
  const finalCardLoader = Object.assign(cardLoader, style);
  return (
    <div>
      <style>
        {
          `@keyframes loaderAnimationToRight {
            0% {
                background-position: -468px 0
            }
            100% {
                background-position: 468px 0
            }
          }
          .defaultProp {
            background-size: 1500px 1000px !important;
            animation-fill-mode: forwards !important;
            animation-iteration-count: infinite !important;
          }
          
          .ShimmerRight {
              animation-name: loaderAnimationToRight;
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

const ProfileShimmer = ({ rows, background, elevation, speed, forground, rounded, radius, style }: profileStyle): JSX.Element => {
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
        <Shimmer background={background} elevation={elevation} speed={speed} forground={forground} size={{ height: height, width: width }} rounded={_rounded} style={profileLoader} />
      </div>)
    })}
  </div>)
}

interface SocialPlatFormStyle extends CustomLoader {
  variant?: "default" | "rounded",
}

const SocialShimmer = ({ rows, elevation, speed, background, forground, variant, style }: SocialPlatFormStyle): JSX.Element => {
  let counter = [], i = 0, len = rows ? rows : 1;
  while (++i <= len) counter.push(i);
  return (
    <div>
      {counter.map((_, k) => {
        return (
          <div style={style} key={k} >
            <div style={{ display: "flex", alignItems: "center" }}>
              <ProfileShimmer elevation={elevation} speed={speed} forground={forground} background={background} />
              <div style={{ paddingLeft: "2rem" }}>
                <Shimmer style={{ marginBottom: "1rem" }} size={{ height: 7, width: 200 }} elevation={elevation} speed={speed} forground={forground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
                <Shimmer size={{ height: 7, width: 100 }} elevation={elevation} speed={speed} forground={forground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              </div>
            </div>
            <Shimmer style={{ marginTop: "1rem" }} size={{ height: 500, width: 500 }} elevation={elevation} speed={speed} forground={forground} background={background} rounded={variant == "default" ? "0px" : "20px"} />
          </div>
        )
      })}
    </div>
  )
}

const BulletListShimmer = ({ rows, elevation, speed, background, forground, variant, style }: SocialPlatFormStyle): JSX.Element => {
  let counter = [], i = 0, len = rows ? rows : 1;
  while (++i <= len) counter.push(i);
  const height = 60
  const width = 60
  return (
    <div>
      {counter.map((_, k) => {
        return (
          <div style={style} key={k}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
              <Shimmer background={background} elevation={elevation} speed={speed} forground={forground} rounded={variant == "default" ? "0px" : "50%"} size={{ height: height, width: width }} />
              <div>
                <Shimmer style={{ marginLeft: "1rem", marginBottom: "0.5rem" }} size={{ height: 16, width: 250 }} elevation={elevation} speed={speed} forground={forground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
                <Shimmer style={{ marginLeft: "1rem" }} size={{ height: 11, width: 150 }} elevation={elevation} speed={speed} forground={forground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
const CodeShimmer = ({ rows, elevation, speed, background, forground, variant, style }: SocialPlatFormStyle): JSX.Element => {
  let counter = [], i = 0, len = rows ? rows : 1;
  while (++i <= len) counter.push(i);
  return (
    <div>
      {counter.map((_, k) => {
        return (
          <div style={style} key={k}>
            <div style={{ marginBottom: "1rem" }}>
              <Shimmer style={{ padding: "0.5rem" }} size={{ height: 10, width: 70 }} elevation={elevation} speed={speed} forground={forground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
            </div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
              <Shimmer style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 130 }} elevation={elevation} speed={speed} forground={forground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              <Shimmer style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 80 }} elevation={elevation} speed={speed} forground={forground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              <Shimmer style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 200 }} elevation={elevation} speed={speed} forground={forground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
            </div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
              <Shimmer style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 130 }} elevation={elevation} speed={speed} forground={forground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              <Shimmer style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 200 }} elevation={elevation} speed={speed} forground={forground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              <Shimmer style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 80 }} elevation={elevation} speed={speed} forground={forground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
            </div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
              <Shimmer style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 80 }} elevation={elevation} speed={speed} forground={forground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              <Shimmer style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 130 }} elevation={elevation} speed={speed} forground={forground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              <Shimmer style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 200 }} elevation={elevation} speed={speed} forground={forground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
            </div>
            <div >
              <Shimmer style={{ padding: "0.5rem" }} size={{ height: 10, width: 70 }} elevation={elevation} speed={speed} forground={forground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

const ProfileCardShimmer = ({ rows, elevation, speed, background, forground, variant, style }: SocialPlatFormStyle): JSX.Element => {
  let counter = [], i = 0, len = rows ? rows : 1;
  while (++i <= len) counter.push(i);
  return (
    <div>
      {counter.map((_, k) => {
        return (
          <div style={style} key={k}>
            <div style={style}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Shimmer size={{ height: 80, width: 80 }} elevation={elevation} speed={speed} forground={forground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
                <div style={{ paddingLeft: "2rem" }}>
                  <Shimmer style={{ marginBottom: "0.5rem" }} size={{ height: 15, width: 150 }} elevation={elevation} speed={speed} forground={forground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
                  <Shimmer size={{ height: 15, width: 100 }} elevation={elevation} speed={speed} forground={forground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
                </div>
              </div>
              <Shimmer style={{ marginTop: "1rem" }} size={{ height: 20, width: 300 }} elevation={elevation} speed={speed} forground={forground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              <Shimmer style={{ marginTop: "0.5rem" }} size={{ height: 20, width: 300 }} elevation={elevation} speed={speed} forground={forground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
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
  ProfileCardShimmer,
}
export default Shimmer
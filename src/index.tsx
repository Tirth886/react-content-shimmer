import * as React from 'react'

interface CustomLoader {
  rows?: Number,
  background?: String,
  foreground?: String,
  elevation?: Number,
  speed?: "slow" | "fast" | "xfast",
  rounded?: String,
  style?: Object,
  size?: {
    height?: Number,
    width?: Number
  }
}


const ContentLoader = ({ rows, background, elevation, speed, size, foreground, rounded, style }: CustomLoader): JSX.Element => {
  let counter = [], i = 0, len = rows ?? 1;
  while (++i <= len) counter.push(i);
  const cardLoader = {
    boxShadow: `0 1px 2px 1px rgba(0, 0, 0, ${elevation})` ?? "0 1px 2px 1px rgba(0, 0, 0, 0.08), 0 -1px 3px 0 rgba(0, 0, 0, 0.06);",
    animationDuration: speed == "slow" ? "1.5s" : speed == "fast" ? "1s" : speed == "xfast" ? "0.5s" : "1s",
    borderRadius: rounded ? `${rounded}` : "0px",
    background: `linear-gradient(to right, ${background ?? "#eeeeee"} 8%, ${foreground ?? "#dddddd"} 18%, ${background ?? "#eeeeee"} 33%)`,
    height: size?.height ? `${size?.height}px` : "50px",
    width: size?.width ? `${size?.width}px` : "150px",
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
          
          .contentLoaderRight {
              animation-name: loaderAnimationToRight;
          }
          `
        }
      </style>
      {counter.map((_, k) => {
        return <div key={k} className="contentLoaderRight defaultProp" style={finalCardLoader} ></div>
      })}
    </div>
  )
}

interface profileStyle extends CustomLoader {
  radius?: "xs" | "sm" | "md" | "lg" | "xl"
}

const ProfileStyle = ({ rows, background, elevation, speed, foreground, rounded, radius }: profileStyle): JSX.Element => {
  let counter = [], i = 0, len = rows ?? 1;
  while (++i <= len) counter.push(i);
  const height = 50
  const width = 50
  const _rounded = rounded ? rounded : "50%"
  const profileLoader = {
    padding: radius === "sm" ? `0rem` : radius === "md" ? `1rem` : radius === "lg" ? `2rem` : radius === "xl" ? `4rem` : radius === "xs" ? `0.5rem` : '0rem'
  }
  return (<div>
    {counter.map((_, k) => {
      return (<div key={k}>
        <ContentLoader background={background} elevation={elevation} speed={speed} foreground={foreground} size={{ height: height, width: width }} rounded={_rounded} style={profileLoader} />
      </div>)
    })}
  </div>)
}

interface SocialPlatFormStyle extends CustomLoader {
  variant?: "default" | "rounded"
}

const SocialStyle = ({ rows, elevation, speed, background, foreground, variant }: SocialPlatFormStyle): JSX.Element => {
  let counter = [], i = 0, len = rows ?? 1;
  while (++i <= len) counter.push(i);
  return (
    <div>
      {counter.map((_, k) => {
        return (
          <div style={{ padding: "1rem" }} key={k} >
            <div style={{ display: "flex", alignItems: "center" }}>
              <ProfileStyle elevation={elevation} speed={speed} foreground={foreground} background={background} />
              <div style={{ paddingLeft: "2rem" }}>
                <ContentLoader style={{ marginBottom: "1rem" }} size={{ height: 7, width: 200 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
                <ContentLoader size={{ height: 7, width: 100 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              </div>
            </div>
            <ContentLoader style={{ marginTop: "1rem" }} size={{ height: 500, width: 500 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "20px"} />
          </div>
        )
      })}
    </div>
  )
}

const BulletListStyle = ({ rows, elevation, speed, background, foreground, variant }: SocialPlatFormStyle): JSX.Element => {
  let counter = [], i = 0, len = rows ?? 1;
  while (++i <= len) counter.push(i);
  const height = 30
  const width = 30
  return (
    <div>
      {counter.map((_, k) => {
        return (
          <div style={{ padding: "1rem" }} key={k}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ContentLoader background={background} elevation={elevation} speed={speed} foreground={foreground} rounded={variant == "default" ? "0px" : "50%"} size={{ height: height, width: width }} />
              <ContentLoader style={{ marginLeft: "1rem" }} size={{ height: 9, width: 250 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
const CodeStyle = ({ rows, elevation, speed, background, foreground, variant }: SocialPlatFormStyle): JSX.Element => {
  let counter = [], i = 0, len = rows ?? 1;
  while (++i <= len) counter.push(i);
  return (
    <div>
      {counter.map((_, k) => {
        return (
          <div style={{ padding: "1rem" }} key={k}>
            <div style={{ marginBottom: "1rem" }}>
              <ContentLoader style={{ padding: "0.5rem" }} size={{ height: 10, width: 70 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
            </div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
              <ContentLoader style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 130 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              <ContentLoader style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 80 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              <ContentLoader style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 200 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
            </div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
              <ContentLoader style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 130 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              <ContentLoader style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 200 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              <ContentLoader style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 80 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
            </div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
              <ContentLoader style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 80 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              <ContentLoader style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 130 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
              <ContentLoader style={{ marginLeft: "1rem", padding: "0.3rem" }} size={{ height: 12, width: 200 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
            </div>
            <div >
              <ContentLoader style={{ padding: "0.5rem" }} size={{ height: 10, width: 70 }} elevation={elevation} speed={speed} foreground={foreground} background={background} rounded={variant == "default" ? "0px" : "50px"} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export {
  ContentLoader,
  ProfileStyle,
  SocialStyle,
  BulletListStyle,
  CodeStyle
}
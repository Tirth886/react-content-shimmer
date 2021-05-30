import * as React from 'react'
import styles from './styles.module.css'

interface CustomLoader {
  rows?: Number,
  background?: String,
  forground?: String,
  elevation?: Number,
  speed?: Number,
  rounded?: Number,
  style?: Object,
  size?: {
    height?: Number,
    width?: Number
  }
}

const ContentLoader = ({ rows, background, elevation, speed, size, forground, rounded, style }: CustomLoader): JSX.Element => {
  let counter = [], i = 0, len = rows ?? 1;
  while (++i <= len) counter.push(i);

  const cardLoader = {
    boxShadow: `0 1px 2px 1px rgba(0, 0, 0, ${elevation})` ?? "0 1px 2px 1px rgba(0, 0, 0, 0.08), 0 -1px 3px 0 rgba(0, 0, 0, 0.06);",
    animationDuration: speed ? `${speed}s` : "1s",
    borderRadius: rounded ? `${rounded}px` : "0px",
    background: `linear-gradient(to right, ${background ?? "#eeeeee"} 8%, ${forground ?? "#dddddd"} 18%, ${background ?? "#eeeeee"} 33%)`,
    height: size?.height ? `${size?.height}px` : "50px",
    width: size?.width ? `${size?.width}px` : "150px",
  }
  const finalCardLoader = Object.assign(cardLoader, style);
  return (
    <div>
      {counter.map((_, k) => {
        return <div key={k} className={styles.contentLoaderRight + " " + styles.defaultProp} style={finalCardLoader} ></div>
      })}
    </div>
  )
}


interface profileStyle extends CustomLoader {
  radius?: number | Number
}
const ProfileStyle = ({ rows, background, elevation, speed, forground, rounded, radius }: profileStyle): JSX.Element => {
  let counter = [], i = 0, len = rows ?? 1;
  while (++i <= len) counter.push(i);
  const height = 80
  const width = 80
  const _rounded = rounded ? rounded : 50
  const profileLoader = {
    padding: radius ? `${radius}rem` : '0rem'
  }
  return (<div>
    {counter.map((_, k) => {
      return (<div key={k} style={{ padding: "2rem" }}>
        <ContentLoader background={background} elevation={elevation} speed={speed} forground={forground} size={{ height: height, width: width }} rounded={_rounded} style={profileLoader} />
      </div>)
    })}
  </div>)
}

interface SocialPlatFormStyle extends CustomLoader {
  variant?: "default" | "rounded"
}

const FacebookStyle = ({ rows, elevation, speed, background, forground, variant }: SocialPlatFormStyle): JSX.Element => {
  let counter = [], i = 0, len = rows ?? 1;
  while (++i <= len) counter.push(i);
  return (
    <div>
      {counter.map((_, k) => {
        return (
          <div key={k} style={{ padding: "1rem", display: "flex", alignItems: "center" }}>
            <ProfileStyle elevation={elevation} speed={speed} forground={forground} background={background} />
            <div>
              <ContentLoader style={{ marginBottom: "1rem" }} rows={3} size={{ height: 8, width: 250 }} elevation={elevation} speed={speed} forground={forground} background={background} rounded={variant == "default" ? 0 : 50} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export { ContentLoader, ProfileStyle, FacebookStyle }
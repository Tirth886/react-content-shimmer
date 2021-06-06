## React Content Shimmer / Loader

***Content Loader to easily create placeholder loading, image loading, card loading, etc .., free to change the colors, speed, sizes, radius and shadow also have few deafult Loding Componets to use.***
#
![ExampleCode](https://raw.githubusercontent.com/Tirth886/contentLoader/main/ss/customizeLoader.gif)

[![NPM](https://img.shields.io/npm/v/react-content-shimmer.svg)](https://www.npmjs.com/package/react-content-shimmer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Features

- ⚙ **Customizable:** Feel free to change the colors, speed, sizes, radius and shadow;
- ▶ **Plug and play:** with many deafault component to use see the example below.
- 📝**DIY:** create your own custom loaders easily;


## Install

```bash
npm i --save react-content-shimmer
```

# Usage

```jsx
import { ContentLoader } from 'react-content-shimmer'
const CustomLoader = () => {
  return (
   <ContentLoader />
  )
}
```

# Options

| <div style="width:250px">Prop name and type</div>             | Values                | Description                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`rows?: number`** <br/> Defaults to `0`             | - |  It's use to create multiple loader at once in a page |
| **`background?: string`** <br/> Defaults to `#eeeeee` | - | It's is use to change the background of your ContetnLoader|
|  **`forground?: string`** <br/> Defaults to `#dddddd` | - | It's is use to change the forground color of your ContetnLoader|
| **`elevation?: number`** <br /> Defaults to `0.08`    | - | It's is use for background outset shadow to your ContentLoader|
| **`speed?: string`** <br /> Defaults to `fast`     | (`slow - fast - xfast`) | Controll Speed of animation|
| **`rounded?: string`** <br /> Defaults to `0px`       | - | Curve of your Loader Component in px , percentage (%)...<br/>available for use in `<ContentLoader/> , <ProfileStyle />`|
| **`style?: object`**        | - | Give extra styling you want accept all css properties <br/>available for use in `<ContentLoader/>` |
| **`size?: {height? : number, Width? : number}`**  | - | It's use to change the height and width your ContentLoader </br> only props use while creating custom ContentLoader `<ContentLoader />`  |
| **`radius?: string`** <br /> Defaults to `sm`   | (`xs - sm - md - lg - xl`)  | Used as background of animation. |
| **`variant?: string`** <br /> Defaults to `rounded`| (`default - rounded`)| Shape for the define Style like <br/>`<SocialStyle />, <CodeStyle />,<BulletStyle />`|


## Example 
`**Plug and play component**`
#
## 1. **Social Style**
# 
```jsx
import { SocialStyle } from 'react-content-shimmer'
const YourStyleName = () => {
  return (
    <SocialStyle  />
  )
}
```
![ExampleCode](https://raw.githubusercontent.com/Tirth886/contentLoader/main/ss/socialStyle.png)

## 2. **Bullet List Style**
#
```jsx
import { BulletListStyle } from 'react-content-shimmer'
const YourStyleName = () => {
  return (
    <BulletListStyle  />
  )
}
```
![ExampleCode](https://raw.githubusercontent.com/Tirth886/contentLoader/main/ss/bulletStyle.png)

## 3. **Code Style**
#
```jsx
import { CodeStyle } from 'react-content-shimmer'
const YourStyleName = () => {
  return (
    <CodeStyle  />
  )
}
```
![ExampleCode](https://raw.githubusercontent.com/Tirth886/contentLoader/main/ss/codeStyle.png)

## 4. **Profile Style**
#
```jsx
import { ProfileStyle } from 'react-content-shimmer'
const YourStyleName = () => {
  return (
    <ProfileStyle  />
  )
}
```
![ExampleCode](https://raw.githubusercontent.com/Tirth886/contentLoader/main/ss/profileStyle.png)


## 5. **Custom Creation**
`Custom ContentLoader Creation with Css Tricks works Awsome 😎 Live Working Example at the Top`
#
```jsx
import { ContentLoader } from 'react-content-shimmer'
const YourStyleName = () => {
  return (
    <div style={{ padding: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }} >
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <ContentLoader size={{ height: 80, width: 80 }} rounded="10%" />
          <div style={{ paddingLeft: "2rem" }}>
            <ContentLoader style={{ marginBottom: "1rem" }} size={{ height: 15, width: 200 }} />
            <ContentLoader size={{ height: 15, width: 100 }} />
          </div>
        </div>
        <ContentLoader style={{ marginTop: "1rem" }} rounded={"10px"} size={{ height: 15, width: 350 }} />
        <ContentLoader style={{ marginTop: "1rem" }} rounded={"10px"} size={{ height: 15, width: 350 }} />
      </div>
    </div>
  )
}
```
## Contact
<a href="https://www.linkedin.com/in/tirthjain886/"><img src="https://static-exp1.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" height="30" width="30"/></a>
<a href="https://www.instagram.com/tirth.jain886/"><img src="https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png" height="30" width="30"/></a>

## License

MIT © [Tirth886](https://github.com/Tirth886)

## React Content Shimmer / Loader

***<b> Note : New Version Have Breaking Changes Please Refer the docs ... Happy Coding 😀 </b>***
<br/>

***Content Shimmer to easily create placeholder loading, image loading, card loading, etc .., free to change the colors, speed, sizes, radius and shadow also have few deafult Loding Componets to use.***
#
![ExampleCode](https://raw.githubusercontent.com/Tirth886/react-content-shimmer/main/ss/customizeLoader.gif)

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
import ContentShimmer from 'react-content-shimmer'
const YourStyleName = () => {
  return (
   <ContentShimmer />
  )
}
```

# Options

| <div style="width:250px">Prop name and type</div>             | Values                | Description                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`rows?: number`** <br/> Defaults to `1`             | - |  It's use to create multiple loader at once in a page |
| **`background?: string`** <br/> Defaults to `#eeeeee` | - | It's is use to change the background of your ContentShimmer|
| **`forground?: string`** <br/> Defaults to `#dddddd` | - | It's is use to change the forground color of your ContentShimmer|
| **`elevation?: number`** <br /> Defaults to `0.08`    | - | It's is use for background outset shadow to your ContentShimmer|
| **`speed?: number`** <br /> Defaults to `1s`     | - | Controll Speed of animation support value in seconds|
| **`rounded?: string`** <br /> Defaults to `0px`       | - | Curve of your Loader Component in px , percentage (%)...<br/>available for use in `<ContentShimmer/> , <ProfileShimmer />`|
| **`style?: object`**        | - | Give extra styling you want accept all css properties <br/> |
| **`size?: {height? : number, Width? : number}`**  | - | It's use to change the height and width your ContentShimmer </br> only props use while creating custom ContentShimmer `<ContentShimmer />`  |
| **`radius?: string`** <br /> Defaults to `sm`   | (`xs - sm - md - lg - xl`)  | Used as background of animation. |
| **`variant?: string`** <br /> Defaults to `rounded`| (`default - rounded`)| Shape for the define Style like <br/>`<SocialShimmer />, <CodeShimmer />,<BulletListShimmer />`|
| **`animation?: string`** <br /> Defaults to `wave`| (`wave - pulse`)| Change animation for an of you shimmer or loader|

## Example 
`**Plug and play component**`
#
## 1. **Social Style**
# 
```jsx
import { SocialShimmer } from 'react-content-shimmer'
const YourStyleName = () => {
  return (
    <SocialShimmer  />
  )
}
```
![ExampleCode](https://raw.githubusercontent.com/Tirth886/react-content-shimmer/main/ss/socialStyle.png)

## 2. **Bullet List Style**
#
```jsx
import { BulletListShimmer } from 'react-content-shimmer'
const YourStyleName = () => {
  return (
    <BulletListShimmer  />
  )
}
```
![ExampleCode](https://raw.githubusercontent.com/Tirth886/react-content-shimmer/main/ss/bulletStyle.png)

## 3. **Code Style**
#
```jsx
import { CodeShimmer } from 'react-content-shimmer'
const YourStyleName = () => {
  return (
    <CodeShimmer  />
  )
}
```
![ExampleCode](https://raw.githubusercontent.com/Tirth886/react-content-shimmer/main/ss/codeStyle.png)

## 4. **Profile Style**
#
```jsx
import { ProfileShimmer } from 'react-content-shimmer'
const YourStyleName = () => {
  return (
    <ProfileShimmer  />
  )
}
```
![ExampleCode](https://raw.githubusercontent.com/Tirth886/react-content-shimmer/main/ss/profileStyle.png)


## 5. **Custom Creation**
`Custom ContentShimmer workes more well with the css or bootstrap classes Create with this Css Tricks will works Awsome 😎 Live Working Example at the Top`
#
```jsx
import ContentShimmer from 'react-content-shimmer'
const YourStyleName = () => {
  return (
    <div className="p-2 d-flex align-items-center">
      <div>
        <div className="p-2 d-flex align-items-center">
          <ContentShimmer size={{ height: 80, width: 80 }} rounded="10%" />
          <div className="p-3">
            <ContentShimmer style={{ marginBottom: "1rem" }} size={{ height: 15, width: 200 }} />
            <ContentShimmer size={{ height: 15, width: 100 }} />
          </div>
        </div>
        <ContentShimmer style={{ marginTop: "1rem" }} rounded={"10px"} size={{ height: 15, width: 350 }} />
        <ContentShimmer style={{ marginTop: "1rem" }} rounded={"10px"} size={{ height: 15, width: 350 }} />
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

import React from "react";
import ReactDOM from "react-dom";
// regeneratorRuntime
import "regenerator-runtime/runtime";
// import Pet from './Pet';
import SearchParams from "./SearchParams";

// 创建组件，组建名开头大写
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"), // {}希望传递给html元素的属性，例如{id:"my-brand"}
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }), // 从父组件通过props向子组件传递属性
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Sudo",
//       animal: "Dog",
//       breed: "Wheaten Terrier",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me"</h1>
      {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Sudo" animal="Dog" breed="Wheaten Terrier" /> */}
      <SearchParams />
    </div>
  );
};
// 下面的React.createElement是在创建组件的实例
// ReactDOM.render(React.createElement(App), document.getElementById("root")); // App,{},null 后面非必选可省略
ReactDOM.render(<App />, document.getElementById("root"));

/* global React ReactDOM */

const Pet = (props) => {
  console.log("-props-", props);
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};
// 创建组件，组建名开头大写
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"), // {}希望传递给html元素的属性，例如{id:"my-brand"}
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }), // 从父组件通过props向子组件传递属性
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Sudo",
      animal: "Dog",
      breed: "Wheaten Terrier",
    }),
  ]);
};
// 下面的React.createElement是在创建组件的实例
ReactDOM.render(React.createElement(App), document.getElementById("root")); // App,{},null 后面非必选可省略

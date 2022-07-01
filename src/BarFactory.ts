import FooFactory from "./FooFactory.js"

export default class BarFactory extends FooFactory {
  public test() {
      console.log("Hello!")
  }
}
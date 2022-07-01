import FooFactory from "./FooFactory"

export default class BarFactory extends FooFactory {
  public test() {
      console.log("Hello!")
  }
}
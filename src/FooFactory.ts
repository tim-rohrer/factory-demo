import BarFactory from "./BarFactory.js"

export default abstract class FooFactory {
  static BAR = 1
  public abstract test(): void

  public static getFactory(whichFactory: number ) {
    switch (whichFactory) {
      case this.BAR:
          console.log("Here!")
          return new BarFactory()
      default:
          throw new Error(
          "Improper app setup as an undefined data source was requested",
          )
  }
  }
}
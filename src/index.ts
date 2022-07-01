import FooFactory from "./FooFactory"

const myFactory = FooFactory.getFactory(FooFactory.BAR)
myFactory.test()
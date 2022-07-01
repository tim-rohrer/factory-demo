import FooFactory from "./FooFactory.js"

const myFactory = FooFactory.getFactory(FooFactory.BAR)
myFactory.test()
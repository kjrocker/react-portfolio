import connectToFirebase from './connectToFirebase'

const _pipe = (f, g) => (...args) => g(f(...args))
const pipe = (...fns) => fns.reduce(_pipe)

export { connectToFirebase, pipe };

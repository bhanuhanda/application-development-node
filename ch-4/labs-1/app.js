function f (n = 99) {
  if (n === 0) throw Error()
  f(n - 1)
}
f()

// node --inspect-brk ch-4/labs-1/app.js

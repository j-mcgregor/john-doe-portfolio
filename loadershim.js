/*
The webpack compiler can understand modules written as ES2015 modules, CommonJS or AMD. However, some third party libraries may expect global dependencies (e.g. $ for jQuery). The libraries might also create globals which need to be exported. These "broken modules" are one instance where shimming comes into play
 */

global.___loader = {
  enqueue: jest.fn(),
}

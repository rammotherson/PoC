import 'jest';

describe("Demo_TestCase1", () => {  test(" add two numbers ", () => { const result = 1 + 3;
    expect(result).toBe(4); 
  });
}

);
describe("Demo_TestCase2", () => {  test(" Sub two numbers ", () => { const result = 4 - 3;
  expect(result).toBe(1); 
});
}

);
describe("Demo_TestCase3", () => {  test(" Mul two numbers ", () => { const result = 2 * 3;
  expect(result).toBe(6); 
});
}

);
describe("Demo_TestCase4", () => {  test(" Divide two numbers ", () => { const result = 4 / 2;
  expect(result).toBe(2); 
});
}

);
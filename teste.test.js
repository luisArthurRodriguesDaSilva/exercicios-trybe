
const div = require('./script.js');

describe('test', 
() => {
  it('firste', () =>{
    expect(div(1,0)).toThrow(Error);
  })
}
)
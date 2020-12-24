import { add } from '../src/index'

describe('add函数测试', function () {

  it('不传参数报错', function () {
    // @ts-ignore
    expect(add).toThrow()
  })

  it('传null会报错', function () {
    // @ts-ignore
    expect(() => add(1,null)).toThrow()
  })

  it('传布尔类型会报错', function () {
    // @ts-ignore
    expect(() => add(1,true)).toThrow()

  })

  it('传array类型会报错', function () {
    // @ts-ignore
    expect(() => add([],true)).toThrow()
  })


  it('传入字符串也可以兼容', function () {
    // @ts-ignore
    expect(add("1","2")).toBe(3)
  })

  it('正常数字可以算出正确的结果', function () {
    // @ts-ignore
    const a = Math.ceil(Math.random() * 10)
    const b = Math.ceil(Math.random() * 10)
    expect(add(a,b)).toBe(a+b)
  })

})







export const add = (a:number|string,b:number|string) => {

  if(
    typeof a !== 'string' ||
    typeof b !== 'string' ||
    typeof a !== 'number' ||
    typeof b !== 'number'
  ) {
    throw new TypeError('请输入正确的数字类型')
  }

  if(typeof a !== 'number') {
    a = parseInt(a,10)
  }

  if(typeof b !== 'number') {
    b = parseInt(b,10)
  }

  if(Number.isNaN(a) || Number.isNaN(b)) {
    throw new TypeError('输入了非法数字')
  }

  return a+b
}

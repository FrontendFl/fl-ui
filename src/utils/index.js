/**
 * 判断是否为空
 */
export function validatenull(val) {
  if (
    val instanceof Date || ['boolean', 'number', 'function'].includes(typeof val)
  )
    return false
  if (val instanceof Array) {
    if (val.length === 0) return true
  } else if (val instanceof Object) {
    for (var o in val) {
      return false
    }
    return true
  } else {
    return (
      val === 'null' ||
      val == null ||
      val === 'undefined' ||
      val === undefined ||
      val === ''
    )
  }
  return false
}

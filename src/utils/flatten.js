// @flow
import hyphenate from 'fbjs/lib/hyphenateStyleName'

type StaticAndDynamic = Array<string | Function>

export const objToCss = (obj: Object): string => (
  Object.keys(obj).map(k => `${hyphenate(k)}: ${obj[k]};`).join(" ")
)

const flatten = (chunks: Array<Interpolation>) : StaticAndDynamic => (
  chunks.reduce((array, chunk: Interpolation) => {
    /* Remove falsey values */
    if (!chunk) return array
    /* Flatten arrays */
    if (Array.isArray(chunk)) return array.concat(...flatten(chunk))
    /* Defer functions but wrap in a flatten call */
    if (typeof chunk === 'function') return array.concat(chunk)
    /* Handle objects */
    return array.concat(typeof chunk === 'object' ? objToCss(chunk) : chunk.toString())
  }, [])
)

export default flatten

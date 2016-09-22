// @flow
import parse from '../postcss/parse'
import postcssNested from '../postcss/postcss-nested'
import {hashObject} from 'aphrodite/lib/util'
import {StyleSheet}from 'glamor/lib/sheet'
const styleSheet = new StyleSheet()
styleSheet.inject()
const inserted = {}

import type {RuleSet} from "../types"
import flatten from "../utils/flatten"

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */
export default class ComponentStyle {
  rules: RuleSet;

  constructor(rules: RuleSet) {
    this.rules = rules
  }

  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a ._hashName {}
   * Parses that with PostCSS then runs PostCSS-Nested on it
   * Injects that using Glamor's StyleSheet impl.
   * */
  injectStyles(executionContext: Array<any>) {
    const flatCSS = flatten(this.rules, executionContext).join("")
    const hash = '_' + hashObject(flatCSS)
    if (!inserted[hash]) {
      const root = parse(`.${hash} { ${ flatCSS } }`);
      postcssNested(root)
      const result = root.toResult().css;
      styleSheet.insert(result)
      inserted[hash] = true
    }
    return hash
  }
}

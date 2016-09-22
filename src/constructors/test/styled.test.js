import expect from 'expect'
import styled from '../styled'
import element from '../element'
import css from '../css'

describe('styled', () => {
  it('should handle template strings', () => {
    const tagName = 'div'
    expect(styled(tagName)`background-color: blue;`)
    .toEqual(element(tagName, css('background-color: blue')))
  })

  it('should handle tagged template strings', () => {
    const tagName = 'div'
    const bgColor = 'blue'
    expect(styled(tagName)`background-color: ${bgColor};`)
    .toEqual(element(tagName, css`background-color: ${bgColor};`))
  })

  it('should handle CSS in JS', () => {
    const tagName = 'div'
    const styles = {
      backgroundColor: 'blue',
    }
    expect(styled(tagName)(`${styles}`)).toEqual(element(tagName, css`${styles}`))
  })

  it('should have all valid HTML5 elements defined as properties', () => {
    expect(styled.a).toExist()
    expect(styled.abbr).toExist()
    expect(styled.address).toExist()
    expect(styled.area).toExist()
    expect(styled.article).toExist()
    expect(styled.aside).toExist()
    expect(styled.audio).toExist()
    expect(styled.b).toExist()
    expect(styled.base).toExist()
    expect(styled.bdi).toExist()
    expect(styled.bdo).toExist()
    expect(styled.big).toExist()
    expect(styled.blockquote).toExist()
    expect(styled.body).toExist()
    expect(styled.br).toExist()
    expect(styled.button).toExist()
    expect(styled.canvas).toExist()
    expect(styled.caption).toExist()
    expect(styled.cite).toExist()
    expect(styled.code).toExist()
    expect(styled.col).toExist()
    expect(styled.colgroup).toExist()
    expect(styled.data).toExist()
    expect(styled.datalist).toExist()
    expect(styled.dd).toExist()
    expect(styled.del).toExist()
    expect(styled.details).toExist()
    expect(styled.dfn).toExist()
    expect(styled.dialog).toExist()
    expect(styled.div).toExist()
    expect(styled.dl).toExist()
    expect(styled.dt).toExist()
    expect(styled.em).toExist()
    expect(styled.embed).toExist()
    expect(styled.fieldset).toExist()
    expect(styled.figcaption).toExist()
    expect(styled.figure).toExist()
    expect(styled.footer).toExist()
    expect(styled.form).toExist()
    expect(styled.h1).toExist()
    expect(styled.h2).toExist()
    expect(styled.h3).toExist()
    expect(styled.h4).toExist()
    expect(styled.h5).toExist()
    expect(styled.h6).toExist()
    expect(styled.head).toExist()
    expect(styled.header).toExist()
    expect(styled.hgroup).toExist()
    expect(styled.hr).toExist()
    expect(styled.html).toExist()
    expect(styled.i).toExist()
    expect(styled.iframe).toExist()
    expect(styled.img).toExist()
    expect(styled.input).toExist()
    expect(styled.ins).toExist()
    expect(styled.kbd).toExist()
    expect(styled.keygen).toExist()
    expect(styled.label).toExist()
    expect(styled.legend).toExist()
    expect(styled.li).toExist()
    expect(styled.link).toExist()
    expect(styled.main).toExist()
    expect(styled.map).toExist()
    expect(styled.mark).toExist()
    expect(styled.menu).toExist()
    expect(styled.menuitem).toExist()
    expect(styled.meta).toExist()
    expect(styled.meter).toExist()
    expect(styled.nav).toExist()
    expect(styled.noscript).toExist()
    expect(styled.object).toExist()
    expect(styled.ol).toExist()
    expect(styled.optgroup).toExist()
    expect(styled.option).toExist()
    expect(styled.output).toExist()
    expect(styled.p).toExist()
    expect(styled.param).toExist()
    expect(styled.picture).toExist()
    expect(styled.pre).toExist()
    expect(styled.progress).toExist()
    expect(styled.q).toExist()
    expect(styled.rp).toExist()
    expect(styled.rt).toExist()
    expect(styled.ruby).toExist()
    expect(styled.s).toExist()
    expect(styled.samp).toExist()
    expect(styled.script).toExist()
    expect(styled.section).toExist()
    expect(styled.select).toExist()
    expect(styled.small).toExist()
    expect(styled.source).toExist()
    expect(styled.span).toExist()
    expect(styled.strong).toExist()
    expect(styled.style).toExist()
    expect(styled.sub).toExist()
    expect(styled.summary).toExist()
    expect(styled.sup).toExist()
    expect(styled.table).toExist()
    expect(styled.tbody).toExist()
    expect(styled.td).toExist()
    expect(styled.textarea).toExist()
    expect(styled.tfoot).toExist()
    expect(styled.th).toExist()
    expect(styled.thead).toExist()
    expect(styled.time).toExist()
    expect(styled.title).toExist()
    expect(styled.tr).toExist()
    expect(styled.track).toExist()
    expect(styled.u).toExist()
    expect(styled.ul).toExist()
    expect(styled.var).toExist()
    expect(styled.video).toExist()
    expect(styled.wbr).toExist()
    expect(styled.circle).toExist()
    expect(styled.clipPath).toExist()
    expect(styled.defs).toExist()
    expect(styled.ellipse).toExist()
    expect(styled.g).toExist()
    expect(styled.image).toExist()
    expect(styled.line).toExist()
    expect(styled.linearGradient).toExist()
    expect(styled.mask).toExist()
    expect(styled.path).toExist()
    expect(styled.pattern).toExist()
    expect(styled.polygon).toExist()
    expect(styled.polyline).toExist()
    expect(styled.radialGradient).toExist()
    expect(styled.rect).toExist()
    expect(styled.stop).toExist()
    expect(styled.svg).toExist()
    expect(styled.text).toExist()
    expect(styled.tspan).toExist()
  })
})

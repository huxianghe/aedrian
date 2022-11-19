const styles = `
<style>

.content-container #frozen-north td::after {
  position: absolute;
  top: 50%;
  right: 0;
  width: 1px;
  height: 1.6em;
  background-color: rgba(0, 0, 0, 0.06);
  transform: translateY(-50%);
  transition: background-color 0.3s;
  content: "";
}

.content-container #frozen-center td {
  transition: background 0.3s;
}

</style>
`

$(styles).appendTo('head')

const camelizeRE = /-(\w)/g
const camelize = (str) => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))
}

const commonTdStyles = {
  textAlign: 'left',
  lineHeight: 1.5715,
  color: 'rgba(0,0,0,.85)',
  padding: '12px 8px',
//   border: 'none',
//   borderBottomWidth: '1px',
//   borderBottomStyle: 'solid',
//   borderBottomColor: '#f0f0f0'
}

const bodyHeaderTdStyles = {
  position: 'relative',
  fontWeight: 500,
  backgroundColor: '#fafafa'
}

$('.content-container #frozen-north td').each((_, dom) => {
  const styles = $(dom).attr('style')
  if (styles) {
    const nextStyles = styles
      .slice(0, styles.length - 1)
      .split(';')
      .reduce((prev, nextVal) => {
        const [key, value] = nextVal.split(':')
        prev[camelize(key)] = value
        return prev
      }, {})
    const cssStyles = {
      ...commonTdStyles,
      ...bodyHeaderTdStyles
    }
    // 删除默认黑体
    if (nextStyles.color === 'rgb(0,0,0)') {
      delete nextStyles.color
    }
    $(dom).css({
      ...cssStyles,
      ...nextStyles
    })
  }
})

$('.content-container #frozen-center td').each((_, dom) => {
  const styles = $(dom).attr('style')
  if (styles) {
    const nextStyles = styles
      .slice(0, styles.length - 1)
      .split(';')
      .reduce((prev, nextVal) => {
        const [key, value] = nextVal.split(':')
        prev[camelize(key)] = value
        return prev
      }, {})
    // 删除默认黑体
    if (nextStyles.color === 'rgb(0,0,0)') {
      delete nextStyles.color
    }
    $(dom).css({
      ...commonTdStyles,
      ...nextStyles
    })
  }
})

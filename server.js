const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const port = process.env.PORT || 3000
const serialize = require('serialize-javascript')
const { createBundleRenderer } = require('vue-server-renderer')
let rendered

const indexHTML = (() => {
  return fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8')
})()

app.use('/dist', express.static(path.resolve(__dirname, './dist')))

require('./build/dev-server')(app, bundle => {
  rendered = createBundleRenderer(bundle)
})

app.get('*', (req, res) => {
  const context = { url: req.url }
  rendered.renderToString(context, (err, html) => {
    if (err) {
      console.log(err)
      return res.status(500).send('Server Error')
    }
    html = indexHTML.replace('{{ APP }}', html)
    html = html.replace('{{ STATE }}',
      `<script>window.__INITIAL_STATE__=${serialize(context.initialState, { isJSON: true })}</script>`)
    res.write(html)
    res.end()
  })
})

app.listen(port, () => {
  console.log(`server stared at http://localhost:${port}`)
})

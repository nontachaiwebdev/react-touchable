import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom'
import { renderToString } from 'react-dom/server'
import Home from './../app/components/home'
import { match, RouterContext } from 'react-router'
import path from 'path'
import Routes from './../app/components/routes'

const app = express();
const port = 3000;
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,"views"))
app.use(function (req, res) {
  
  match({ routes:Routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      console.log('error')
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      console.log('Redirect Case')
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      console.log('Normal Render')
      // You can also check renderProps.components or renderProps.routes for
      // your "not found" component or route respectively, and send a 404 as
      // below, if you're using a catch-all route.
      const html = renderToString(<RouterContext {...renderProps} />)
      res.status(200).render('index.ejs', {result: html})
      //res.status(200).send(renderToString(<RouterContext {...renderProps} />))
    } else {
      res.status(404).send('Not found')
    }
  })
});
app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})
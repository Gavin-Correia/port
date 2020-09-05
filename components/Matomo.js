import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'
 
const instance = createInstance({
  urlBase: 'https://gavincorreia.ml', 
  siteId: 1, // optional, default value: `1`
  trackerUrl: 'https://gavincorreia.ml/matomo.php', // optional, default value: `${urlBase}matomo.php`
  srcUrl: 'https://gavincorreia.ml/matomo.js', // optional, default value: `${urlBase}matomo.js`
})
 
ReactDOM.render(
  <MatomoProvider value={instance}>
    <MyApp />
  </MatomoProvider>,
)
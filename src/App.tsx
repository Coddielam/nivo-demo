import ScatterPlot from './components/ScatterPlot';
import { fakeMemberPurchaseHistData } from './components/ScatterPlot/scatterData'

const App = () => {
  return <div className="app">
    <ScatterPlot data={fakeMemberPurchaseHistData} />
  </div>
}

export default App;
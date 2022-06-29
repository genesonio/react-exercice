import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PlanetsScreen from './screens/planets'

const ScreenRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" component={PlanetsScreen} />
    </Routes>
  </BrowserRouter>
)

export default ScreenRoutes

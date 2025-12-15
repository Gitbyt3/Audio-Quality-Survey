import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { SurveyProvider } from './contexts/SurveyContext'
import Landing from './pages/Landing'
import Adbuild1 from './pages/Adbuild1'
import Adbuild2 from './pages/Adbuild2'
import Adbuild3 from './pages/Adbuild3'
import Adbuild4 from './pages/Adbuild4'
import Adbuild5 from './pages/Adbuild5'
import Adbuild6 from './pages/Adbuild6'
import Faulty1 from './pages/Faulty1'
import Faulty2 from './pages/Faulty2'
import Real1 from './pages/Real1'
import Real2 from './pages/Real2'
import SamC_perf1 from './pages/SamC_perf1'
import SamC_perf2 from './pages/SamC_perf2'
import SamC1 from './pages/SamC1'
import SamC2 from './pages/SamC2'
import Outro from './pages/Outro'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Landing />} />
        <Route path='/1' element={<Adbuild1 />} />
        <Route path='/2' element={<Adbuild2 />} />
        <Route path='/3' element={<Adbuild3 />} />
        <Route path='/4' element={<Adbuild4 />} />
        <Route path='/5' element={<Adbuild5 />} />
        <Route path='/6' element={<Adbuild6 />} />
        <Route path='/7' element={<Faulty1 />} />
        <Route path='/8' element={<Faulty2 />} />
        <Route path='/9' element={<Real1 />} />
        <Route path='/10' element={<Real2 />} />
        <Route path='/11' element={<SamC_perf1 />} />
        <Route path='/12' element={<SamC_perf2 />} />
        <Route path='/13' element={<SamC1 />} />
        <Route path='/14' element={<SamC2 />} />
        <Route path='/outro' element={<Outro />} />
      </>
    )
  );

  return (
    <SurveyProvider>
      <RouterProvider router={router} />
    </SurveyProvider>
  )
};

export default App
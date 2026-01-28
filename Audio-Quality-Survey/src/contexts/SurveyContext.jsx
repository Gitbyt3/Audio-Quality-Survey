import { createContext, useContext, useState } from 'react';

const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
  const [surveyData, setSurveyData] = useState({
    Landing: {},
    Adbuild1: {},
    Adbuild2: {},
    Adbuild3: {},
    Adbuild4: {},
    Adbuild5: {},
    Adbuild6: {},
    Faulty1: {},
    Faulty2: {},
    Real1: {},
    Real2: {},
    SamC_perf1: {},
    SamC_perf2: {},
    RealScript_Adbuild1: {},
    RealScript_Adbuild2: {}
  });

  const updateSurveyData = (page, data) => {
    setSurveyData(prev => ({ ...prev, [page]: data }));
  };

  return (
    <SurveyContext.Provider value={{ surveyData, updateSurveyData }}>
      {children}
    </SurveyContext.Provider>
  );
};

export const useSurvey = () => useContext(SurveyContext);
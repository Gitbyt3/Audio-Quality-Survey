import { db } from './config.js';
import { ref, push, set, serverTimestamp } from "firebase/database";

export const saveSurveyResponse = async (surveyId, responses) => {
  try {
    const responsesRef = ref(db, 'surveyResponses');
    const newResponseRef = push(responsesRef);
    
    const surveyData = {
      surveyId,
      responses,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      metadata: {
        userAgent: navigator.userAgent,
        timestamp: Date.now(),
        platform: typeof window !== 'undefined' ? 'web' : 'server'
      }
    };
    
    await set(newResponseRef, surveyData);
    return newResponseRef.key; // Returns the unique ID
  } catch (error) {
    console.error("Error saving survey response:", error);
    throw error;
  }
};


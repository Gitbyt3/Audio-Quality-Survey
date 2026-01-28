import React, { useEffect, useState, useRef } from 'react'
import { useSurvey } from '../contexts/SurveyContext'
import { saveSurveyResponse } from '../firebase/database'

const Outro = () => {
    const { surveyData } = useSurvey()
    const [status, setStatus] = useState('saving')
    const hasSaved = useRef(false);

    useEffect(() => {
        if (hasSaved.current) return;

        hasSaved.current = true;

        const submitData = async () => {
            try {
                setStatus('saving');
                const surveyId = 'audio_survey_uk_internal';
                await saveSurveyResponse(surveyId, surveyData);
                setStatus('success');
                hasSaved.current = true;
                console.log("Survey successfully saved!");
            } catch (error) {
                console.error("Submission failed:", error);
                setStatus('error');
            }
        };

        if (surveyData && Object.keys(surveyData).length > 0) {
            submitData();
        } else {
            console.warn("No survey data found to save.");
            setStatus('error');
        }

    }, [surveyData]);

    return (
        <div style={{ padding: '40px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h1>Thank You!</h1>
            
            {status === 'saving' && (
                <div>
                    <p>Submitting your responses...</p>
                </div>
            )}

            {status === 'success' && (
                <div>
                    <h2 style={{ color: '#00fec7ff' }}>Success!</h2>
                    <p>Your responses have been recorded.</p>
                    <p>We appreciate your help in improving our audio models.</p>
                </div>
            )}

            {status === 'error' && (
                <div style={{ color: 'red' }}>
                    <h2>Something went wrong.</h2>
                    <p>We couldn't save your responses automatically.</p>
                </div>
            )}
        </div>
    );
};

export default Outro;
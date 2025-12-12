import React, { useState, useEffect } from 'react'
import PageNavigation from '../components/nav_button'
import { useSurvey } from '../contexts/SurveyContext'
import audio from '../audios/SamC_perf1.mp3'

const SamC_perf1 = () => {
    const { surveyData, updateSurveyData } = useSurvey()

    const [ formData, setFormData ] = useState({Score: '', Comment: ''})

    useEffect(() => {console.log('Survey data:', surveyData), console.log('Form data:', formData)}, [formData])

    const handleSliderChange = (e) => {
        const value = parseInt(e.target.value, 10)
        setFormData({...formData, Score:value})
    }

    const handleSelection = (e) => {
        setFormData({...formData, Comment: e.target.value})}

    const isFormComplete = () => {
        return (formData.Score)}

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Audio 2</h1>
            <audio controls style={{ width: '100%', maxWidth: '600px' }}>
                <source src={audio} type='audio/mpeg' />
            </audio>

            <br/><br/><br/>

            <h2>How would you rate this audio?</h2>
            <h3>Current score:</h3>
            <div style={{ fontSize: '50px', fontWeight: 'bold', marginTop: '10px' }}>
                {formData.Score}
            </div>

            <br/><br/>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '90%', maxWidth: '1000px', margin: '0 auto' }}>
                <span style={{ fontSize: '20px', fontWeight: 'bold', marginRight: '15px' }}>1</span>
                <input type="range" min="1" max="10" value={formData.Score} onChange={handleSliderChange} style={{ flex:1, height:'25px', cursor: 'pointer', accentColor: '#00fec7ff'}} />
                <span style={{ fontSize: '20px', fontWeight: 'bold', marginLeft: '15px' }}>10</span>
            </div>

            <br/><br/>

            <div style={{ width: '90%', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
                <label style={{ fontSize: '18px', fontWeight: 'bold' }}>Comments</label>
                <textarea
                    placeholder="Please describe any issues you heard in the audio..."
                    value={formData.Comment}
                    onChange={handleSelection}
                    style={{ width: '100%', height: '120px', padding: '10px', marginTop: '10px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ccc', fontFamily: 'inherit'}}
                />
            </div>            

            <PageNavigation onNavigate={() => updateSurveyData('SamC_perf1', formData)} nextDisabled={!isFormComplete()} />
        </div>
    )
}

export default SamC_perf1
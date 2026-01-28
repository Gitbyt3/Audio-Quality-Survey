import React, { useState, useEffect } from 'react'
import PageNavigation from '../components/nav_button'
import { useSurvey } from '../contexts/SurveyContext'

const Landing = () => {
    const { surveyData, updateSurveyData } = useSurvey()

    const [ formData, setFormData ] = useState({Name: '', Department: '', Role: ''})

    useEffect(() => {console.log('Survey data:', surveyData), console.log('Form data:', formData)}, [formData])

    const handleSelection = (name, value) => {
        setFormData({...formData, [name]: value})}

    const isFormComplete = () => {
        return (formData.Name && formData.Department && formData.Role)}

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            
            <img src="https://platform.audiostack.ai/_next/static/media/LogoHorizontalBlackText.7e315493.png" alt="AudioStack Logo" style={{ maxWidth:'200px' }} />

            <h2>Ad Quality Survey</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '300px', margin: '20px auto' }}>
                <input type="text" placeholder="Name" value={formData.Name} onChange={(e) => handleSelection('Name', e.target.value)} style={{ padding: '10px', fontSize: '16px' }} />
                <input type="text" placeholder="Department" value={formData.Department} onChange={(e) => handleSelection('Department', e.target.value)} style={{ padding: '10px', fontSize: '16px' }} />
                <input type="text" placeholder="Role" value={formData.Role} onChange={(e) => handleSelection('Role', e.target.value)} style={{ padding: '10px', fontSize: '16px' }} />
            </div>

            <PageNavigation onNavigate={() => updateSurveyData('Landing', formData)} nextDisabled={!isFormComplete()} />
        </div>
    )
}

export default Landing
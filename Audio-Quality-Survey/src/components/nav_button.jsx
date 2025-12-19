import { useNavigate, useLocation } from 'react-router-dom';
import './nav_button.css';
import React from 'react'

function PageNavigation({ onNavigate, isLoading = false, nextDisabled = false, nextLabel =  'Next Page →' }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Define your page order
  const pageOrder = [
    '/',
    '/2',
    '/11',
    '/9',
    '/1',
    '/7',
    '/3',
    '/8',
    '/4',
    '/5',
    '/6',
    '/12',
    '/13',
    '/14',
    '/10',
    '/outro'
  ];

  // Get current page index
  const currentIndex = pageOrder.indexOf(location.pathname);

  // Calculate next and previous paths
  const nextPage = currentIndex < pageOrder.length - 1 ? pageOrder[currentIndex + 1] : null;
  const prevPage = currentIndex > 0 ? pageOrder[currentIndex - 1] : null;

  const handleNextClick = async () => {
    try {
      if (onNavigate) {
        await onNavigate()
      }
      navigate(nextPage)
    }
    catch (error) {
      console.error('Navigation failed', error)
    }
  }

  const handlePreviousClick = async () => {
    try {
      if (onNavigate) {
        await onNavigate()
      }
      navigate(prevPage)
    }
    catch (error) {
      console.error('Navigation failed', error)
    }
  }

  return (
    <div className="page-navigation">
      {prevPage && (
        <button 
          onClick={handlePreviousClick}
          className="nav-button prev-button"
        >
          ← Previous Page
        </button>
      )}
      
      {nextPage && (
        <button 
          onClick={handleNextClick}
          className="nav-button next-button"
          disabled={isLoading || nextDisabled}
        >
          {isLoading ? 'Loading...' : nextLabel}
        </button>
      )}
    </div>
  );
}

export default PageNavigation;
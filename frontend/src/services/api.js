const API_BASE_URL = '/api';

/**
 * Fetch data from API endpoint
 */
const fetchAPI = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
};

/**
 * API service for website data
 */
export const apiService = {
  // Get hero section data
  getHero: () => fetchAPI('/hero/'),
  
  // Get about section data
  getAbout: () => fetchAPI('/about/'),
  
  // Get services list
  getServices: () => fetchAPI('/services/'),
  
  // Get advantages list
  getAdvantages: () => fetchAPI('/advantages/'),
  
  // Get contact information
  getContactInfo: () => fetchAPI('/contact/'),
  
  // Submit contact form
  submitContact: (data) => {
    return fetch(`${API_BASE_URL}/contact/submit/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
  },
  
  // Get SEO settings
  getSEO: () => fetchAPI('/seo/'),
};


// src/apps/neurology/MidasCalculator.js - MIDAS (Migraine Disability Assessment) Calculator
import { BaseInteractiveApp } from '../shared/BaseInteractiveApp.js';

export class MidasCalculator extends BaseInteractiveApp {
  constructor(containerId) {
    super(containerId, {
      title: 'MIDAS - Migraine Disability Assessment',
      specialty: 'neurology',
      description: 'Assess migraine-related disability over the past 3 months',
      showResults: true,
      allowExport: true
    });
  }

  async initializeApp() {
    const formContainer = this.container.querySelector('.app-form');
    
    formContainer.innerHTML = `
      <div class="midas-form">
        <div class="form-intro">
          <p class="text-sm text-gray-300 mb-4">
            Please answer the following questions about headaches you have had over the last 3 months. 
            Write zero if you did not do the activity in the last 3 months.
          </p>
        </div>
        
        <div class="form-questions">
          ${this.createFormField({
            type: 'number',
            name: 'workDaysMissed',
            label: 'On how many days in the last 3 months did you miss work or school because of your headaches?',
            required: true,
            min: 0,
            placeholder: 'Enter number of days'
          })}
          
          ${this.createFormField({
            type: 'number',
            name: 'workDaysReduced',
            label: 'How many days in the last 3 months was your productivity at work or school reduced by half or more because of your headaches? (Do not include days you counted in question 1 where you missed work or school)',
            required: true,
            min: 0,
            placeholder: 'Enter number of days'
          })}
          
          ${this.createFormField({
            type: 'number',
            name: 'houseworkDaysMissed',
            label: 'On how many days in the last 3 months did you not do household work because of your headaches?',
            required: true,
            min: 0,
            placeholder: 'Enter number of days'
          })}
          
          ${this.createFormField({
            type: 'number',
            name: 'houseworkDaysReduced',
            label: 'How many days in the last 3 months was your productivity in household work reduced by half or more because of your headaches? (Do not include days you counted in question 3 where you did not do household work)',
            required: true,
            min: 0,
            placeholder: 'Enter number of days'
          })}
          
          ${this.createFormField({
            type: 'number',
            name: 'familyDaysMissed',
            label: 'On how many days in the last 3 months did you miss family, social or leisure activities because of your headaches?',
            required: true,
            min: 0,
            placeholder: 'Enter number of days'
          })}
          
          <div class="additional-questions mt-6">
            <h4 class="text-lg font-semibold mb-4 text-gray-200">Additional Information</h4>
            
            ${this.createFormField({
              type: 'number',
              name: 'headacheDays',
              label: 'On how many days in the last 3 months did you have a headache? (If a headache lasted more than 1 day, count each day)',
              required: false,
              min: 0,
              placeholder: 'Enter number of days'
            })}
            
            ${this.createFormField({
              type: 'select',
              name: 'painIntensity',
              label: 'On a scale of 0-10, on average, how painful were these headaches? (0 = no pain at all, 10 = pain as bad as it can be)',
              required: false,
              options: [
                { value: '0', label: '0 - No pain' },
                { value: '1', label: '1 - Very mild' },
                { value: '2', label: '2 - Mild' },
                { value: '3', label: '3 - Moderate' },
                { value: '4', label: '4 - Somewhat severe' },
                { value: '5', label: '5 - Severe' },
                { value: '6', label: '6 - Very severe' },
                { value: '7', label: '7 - Extremely severe' },
                { value: '8', label: '8 - Nearly unbearable' },
                { value: '9', label: '9 - Unbearable' },
                { value: '10', label: '10 - Pain as bad as it can be' }
              ]
            })}
          </div>
        </div>
        
        <div class="form-actions mt-6">
          <button type="button" class="calculate-btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold">
            Calculate MIDAS Score
          </button>
        </div>
      </div>
    `;

    // Add calculate button event listener
    const calculateBtn = this.container.querySelector('.calculate-btn');
    calculateBtn.addEventListener('click', () => this.calculate());
  }

  calculate() {
    // Get form data
    this.data = this.getFormData();
    
    // Validate required fields
    const requiredFields = ['workDaysMissed', 'workDaysReduced', 'houseworkDaysMissed', 'houseworkDaysReduced', 'familyDaysMissed'];
    const missing = this.validateRequired(requiredFields);
    
    if (missing.length > 0) {
      this.showError(`Please fill in all required fields: ${missing.join(', ')}`);
      return;
    }

    // Validate numeric fields
    const numericFields = [...requiredFields, 'headacheDays'];
    const invalid = this.validateNumeric(numericFields);
    
    if (invalid.length > 0) {
      this.showError(`Please enter valid numbers for: ${invalid.join(', ')}`);
      return;
    }

    // Calculate MIDAS score
    const workDaysMissed = parseInt(this.data.workDaysMissed) || 0;
    const workDaysReduced = parseInt(this.data.workDaysReduced) || 0;
    const houseworkDaysMissed = parseInt(this.data.houseworkDaysMissed) || 0;
    const houseworkDaysReduced = parseInt(this.data.houseworkDaysReduced) || 0;
    const familyDaysMissed = parseInt(this.data.familyDaysMissed) || 0;

    const midasScore = workDaysMissed + workDaysReduced + houseworkDaysMissed + houseworkDaysReduced + familyDaysMissed;
    
    // Determine disability grade
    const { grade, description, recommendation } = this.getDisabilityGrade(midasScore);
    
    // Additional metrics
    const headacheDays = parseInt(this.data.headacheDays) || null;
    const painIntensity = parseInt(this.data.painIntensity) || null;

    const results = {
      midasScore,
      disabilityGrade: grade,
      disabilityDescription: description,
      recommendation,
      headacheDaysPerMonth: headacheDays ? Math.round(headacheDays / 3) : null,
      averagePainIntensity: painIntensity
    };

    this.showResults(results);
  }

  getDisabilityGrade(score) {
    if (score <= 5) {
      return {
        grade: 'I',
        description: 'Minimal or infrequent disability',
        recommendation: 'Continue current treatment. Monitor headache patterns and consider lifestyle modifications.'
      };
    } else if (score <= 10) {
      return {
        grade: 'II',
        description: 'Mild or infrequent disability',
        recommendation: 'Review current treatment effectiveness. Consider preventive therapy if not already started.'
      };
    } else if (score <= 20) {
      return {
        grade: 'III',
        description: 'Moderate disability',
        recommendation: 'Optimize current treatment. Strongly consider preventive therapy and comprehensive headache management.'
      };
    } else {
      return {
        grade: 'IV',
        description: 'Severe disability',
        recommendation: 'Urgent need for preventive therapy optimization. Consider specialist referral and comprehensive multidisciplinary approach.'
      };
    }
  }

  formatResults(results) {
    return `
      <div class="midas-results">
        <div class="results-header text-center mb-6">
          <h4 class="text-2xl font-bold text-blue-400">MIDAS Score: ${results.midasScore}</h4>
          <div class="grade-badge mt-2">
            <span class="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-lg font-semibold">
              Grade ${results.disabilityGrade}
            </span>
          </div>
        </div>
        
        <div class="results-content">
          <div class="disability-info bg-gray-700 p-4 rounded-lg mb-4">
            <h5 class="font-semibold text-gray-200 mb-2">Disability Level</h5>
            <p class="text-gray-300">${results.disabilityDescription}</p>
          </div>
          
          <div class="recommendation bg-blue-900 p-4 rounded-lg mb-4">
            <h5 class="font-semibold text-blue-200 mb-2">Clinical Recommendation</h5>
            <p class="text-blue-100">${results.recommendation}</p>
          </div>
          
          ${results.headacheDaysPerMonth ? `
            <div class="additional-metrics grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="metric-card bg-gray-700 p-3 rounded">
                <h6 class="font-semibold text-gray-200">Headache Days/Month</h6>
                <p class="text-lg text-gray-300">${results.headacheDaysPerMonth} days</p>
              </div>
              ${results.averagePainIntensity ? `
                <div class="metric-card bg-gray-700 p-3 rounded">
                  <h6 class="font-semibold text-gray-200">Average Pain Intensity</h6>
                  <p class="text-lg text-gray-300">${results.averagePainIntensity}/10</p>
                </div>
              ` : ''}
            </div>
          ` : ''}
          
          <div class="interpretation mt-6 text-sm text-gray-400">
            <h6 class="font-semibold text-gray-300 mb-2">MIDAS Score Interpretation:</h6>
            <ul class="space-y-1">
              <li>• Grade I (0-5): Minimal disability</li>
              <li>• Grade II (6-10): Mild disability</li>
              <li>• Grade III (11-20): Moderate disability</li>
              <li>• Grade IV (21+): Severe disability</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  onReset() {
    // Clear any app-specific state
    console.log('MIDAS Calculator reset');
  }
}
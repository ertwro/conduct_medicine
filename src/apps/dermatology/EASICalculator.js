// src/apps/dermatology/EASICalculator.js - EASI (Eczema Area and Severity Index) Calculator
import { BaseInteractiveApp } from '../shared/BaseInteractiveApp.js';

export class EASICalculator extends BaseInteractiveApp {
  constructor(containerId) {
    super(containerId, {
      title: 'EASI - Eczema Area and Severity Index',
      specialty: 'dermatology',
      description: 'Assess atopic dermatitis severity and affected body surface area',
      showResults: true,
      allowExport: true
    });

    this.bodyRegions = [
      { key: 'head', label: 'Head/Neck', maxArea: 0.1 },
      { key: 'trunk', label: 'Trunk', maxArea: 0.3 },
      { key: 'upperLimbs', label: 'Upper Limbs', maxArea: 0.2 },
      { key: 'lowerLimbs', label: 'Lower Limbs', maxArea: 0.4 }
    ];

    this.severityScores = [
      { value: 0, label: '0 - None' },
      { value: 1, label: '1 - Mild' },
      { value: 2, label: '2 - Moderate' },
      { value: 3, label: '3 - Severe' }
    ];

    this.areaScores = [
      { value: 0, label: '0 - No eruption (0%)' },
      { value: 1, label: '1 - <10% of region affected' },
      { value: 2, label: '2 - 10-29% of region affected' },
      { value: 3, label: '3 - 30-49% of region affected' },
      { value: 4, label: '4 - 50-69% of region affected' },
      { value: 5, label: '5 - 70-89% of region affected' },
      { value: 6, label: '6 - 90-100% of region affected' }
    ];
  }

  async initializeApp() {
    const formContainer = this.container.querySelector('.app-form');
    
    formContainer.innerHTML = `
      <div class="easi-form">
        <div class="form-intro">
          <p class="text-sm text-gray-300 mb-4">
            Assess the severity of atopic dermatitis by evaluating four clinical signs in each body region 
            and the percentage of affected area. Total possible score: 72 points.
          </p>
        </div>
        
        <div class="body-regions">
          ${this.bodyRegions.map(region => this.createRegionForm(region)).join('')}
        </div>
        
        <div class="form-actions mt-6">
          <button type="button" class="calculate-btn bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold">
            Calculate EASI Score
          </button>
        </div>
        
        <div class="easi-reference mt-6 p-4 bg-gray-800 rounded-lg">
          <h5 class="font-semibold text-gray-200 mb-2">Assessment Guide:</h5>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h6 class="font-semibold text-gray-300">Clinical Signs:</h6>
              <ul class="text-gray-400 space-y-1">
                <li>• Erythema (redness)</li>
                <li>• Infiltration/Papulation (thickness)</li>
                <li>• Excoriation (scratching marks)</li>
                <li>• Lichenification (skin thickening)</li>
              </ul>
            </div>
            <div>
              <h6 class="font-semibold text-gray-300">Severity Scale:</h6>
              <ul class="text-gray-400 space-y-1">
                <li>• 0 = Absent</li>
                <li>• 1 = Mild</li>
                <li>• 2 = Moderate</li>
                <li>• 3 = Severe</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;

    // Add calculate button event listener
    const calculateBtn = this.container.querySelector('.calculate-btn');
    calculateBtn.addEventListener('click', () => this.calculate());
  }

  createRegionForm(region) {
    return `
      <div class="region-form bg-gray-700 p-4 rounded-lg mb-4">
        <h4 class="text-lg font-semibold text-gray-200 mb-4">
          ${region.label} (${Math.round(region.maxArea * 100)}% of body surface)
        </h4>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="severity-assessment">
            <h5 class="font-semibold text-gray-300 mb-3">Clinical Signs Severity (0-3 each):</h5>
            
            ${this.createFormField({
              type: 'select',
              name: `${region.key}_erythema`,
              label: 'Erythema (Redness)',
              required: true,
              options: this.severityScores
            })}
            
            ${this.createFormField({
              type: 'select',
              name: `${region.key}_infiltration`,
              label: 'Infiltration/Papulation (Thickness)',
              required: true,
              options: this.severityScores
            })}
            
            ${this.createFormField({
              type: 'select',
              name: `${region.key}_excoriation`,
              label: 'Excoriation (Scratching)',
              required: true,
              options: this.severityScores
            })}
            
            ${this.createFormField({
              type: 'select',
              name: `${region.key}_lichenification`,
              label: 'Lichenification (Thickening)',
              required: true,
              options: this.severityScores
            })}
          </div>
          
          <div class="area-assessment">
            <h5 class="font-semibold text-gray-300 mb-3">Affected Area (0-6):</h5>
            
            ${this.createFormField({
              type: 'select',
              name: `${region.key}_area`,
              label: 'Percentage of Region Affected',
              required: true,
              options: this.areaScores
            })}
          </div>
        </div>
      </div>
    `;
  }

  calculate() {
    // Get form data
    this.data = this.getFormData();
    
    // Validate required fields
    const requiredFields = [];
    this.bodyRegions.forEach(region => {
      requiredFields.push(
        `${region.key}_erythema`,
        `${region.key}_infiltration`,
        `${region.key}_excoriation`,
        `${region.key}_lichenification`,
        `${region.key}_area`
      );
    });
    
    const missing = this.validateRequired(requiredFields);
    if (missing.length > 0) {
      this.showError(`Please complete all assessments for all body regions.`);
      return;
    }

    // Calculate EASI score
    let totalScore = 0;
    const regionScores = {};

    this.bodyRegions.forEach(region => {
      const erythema = parseInt(this.data[`${region.key}_erythema`]) || 0;
      const infiltration = parseInt(this.data[`${region.key}_infiltration`]) || 0;
      const excoriation = parseInt(this.data[`${region.key}_excoriation`]) || 0;
      const lichenification = parseInt(this.data[`${region.key}_lichenification`]) || 0;
      const area = parseInt(this.data[`${region.key}_area`]) || 0;

      // Sum of severity scores (max 12 per region)
      const severitySum = erythema + infiltration + excoriation + lichenification;
      
      // Regional EASI score = Area × Severity Sum × Regional multiplier
      const regionalScore = area * severitySum * region.maxArea;
      
      regionScores[region.key] = {
        label: region.label,
        erythema,
        infiltration,
        excoriation,
        lichenification,
        area,
        severitySum,
        regionalScore: Math.round(regionalScore * 100) / 100
      };
      
      totalScore += regionalScore;
    });

    const easiScore = Math.round(totalScore * 100) / 100;
    const { severity, interpretation, recommendation } = this.interpretEASIScore(easiScore);

    const results = {
      easiScore,
      severity,
      interpretation,
      recommendation,
      regionScores
    };

    this.showResults(results);
  }

  interpretEASIScore(score) {
    if (score <= 7) {
      return {
        severity: 'Mild',
        interpretation: 'Mild atopic dermatitis with limited impact on quality of life',
        recommendation: 'Topical therapy (low-medium potency corticosteroids, calcineurin inhibitors). Focus on skin barrier restoration and trigger avoidance.'
      };
    } else if (score <= 21) {
      return {
        severity: 'Moderate',
        interpretation: 'Moderate atopic dermatitis requiring more intensive management',
        recommendation: 'Optimize topical therapy, consider phototherapy or systemic therapy if inadequate response. Regular follow-up needed.'
      };
    } else if (score <= 50) {
      return {
        severity: 'Severe',
        interpretation: 'Severe atopic dermatitis significantly impacting quality of life',
        recommendation: 'Systemic therapy indicated (dupilumab, JAK inhibitors, or traditional immunosuppressants). Specialist dermatology consultation recommended.'
      };
    } else {
      return {
        severity: 'Very Severe',
        interpretation: 'Very severe atopic dermatitis with extensive disease burden',
        recommendation: 'Urgent specialist consultation required. Consider hospitalization for severe cases. Aggressive systemic therapy and comprehensive management approach needed.'
      };
    }
  }

  formatResults(results) {
    return `
      <div class="easi-results">
        <div class="results-header text-center mb-6">
          <h4 class="text-3xl font-bold text-green-400">EASI Score: ${results.easiScore}</h4>
          <div class="severity-badge mt-2">
            <span class="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-lg font-semibold">
              ${results.severity} Atopic Dermatitis
            </span>
          </div>
        </div>
        
        <div class="results-content">
          <div class="interpretation bg-gray-700 p-4 rounded-lg mb-4">
            <h5 class="font-semibold text-gray-200 mb-2">Clinical Interpretation</h5>
            <p class="text-gray-300">${results.interpretation}</p>
          </div>
          
          <div class="recommendation bg-green-900 p-4 rounded-lg mb-4">
            <h5 class="font-semibold text-green-200 mb-2">Treatment Recommendation</h5>
            <p class="text-green-100">${results.recommendation}</p>
          </div>
          
          <div class="regional-breakdown">
            <h5 class="font-semibold text-gray-200 mb-3">Regional Breakdown</h5>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${Object.entries(results.regionScores).map(([key, region]) => `
                <div class="region-card bg-gray-800 p-3 rounded">
                  <h6 class="font-semibold text-gray-200">${region.label}</h6>
                  <div class="text-sm text-gray-300 space-y-1">
                    <p>Regional Score: <span class="font-medium">${region.regionalScore}</span></p>
                    <p>Area Score: ${region.area}/6</p>
                    <p>Severity Sum: ${region.severitySum}/12</p>
                    <div class="text-xs text-gray-400 mt-2">
                      E:${region.erythema} I:${region.infiltration} Ex:${region.excoriation} L:${region.lichenification}
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          
          <div class="score-interpretation mt-6 text-sm text-gray-400">
            <h6 class="font-semibold text-gray-300 mb-2">EASI Score Categories:</h6>
            <ul class="space-y-1">
              <li>• 0-7: Mild atopic dermatitis</li>
              <li>• 7.1-21: Moderate atopic dermatitis</li>
              <li>• 21.1-50: Severe atopic dermatitis</li>
              <li>• 50.1-72: Very severe atopic dermatitis</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  onReset() {
    console.log('EASI Calculator reset');
  }
}
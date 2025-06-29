// Navigation data module that fetches JSON files from public directory
// JSON files in public/ directory need to be fetched at runtime in Vite

// Cache for navigation data to avoid repeated fetches
const navigationCache = new Map();

export function clearNavigationCache() {
  console.log('🧹 Clearing navigation cache...');
  navigationCache.clear();
}

export async function getNavigationData(specialty, basePath = '') {
  console.log(`📊 Getting navigation data for: ${specialty} with basePath: "${basePath}"`);
  
  // Create cache key that includes base path
  const cacheKey = `${specialty}-${basePath}`;
  
  // Check cache first
  if (navigationCache.has(cacheKey)) {
    console.log(`✅ Using cached navigation data for ${specialty}`);
    return navigationCache.get(cacheKey);
  }
  
  try {
    // Determine the correct file name
    const fileName = specialty === 'index' || !specialty 
      ? 'navigation-menu-index.json' 
      : `navigation-menu-${specialty}.json`;
    
    const url = `${basePath}/assets/data/${fileName}`;
    console.log(`🔍 Fetching navigation data from: ${url}`);
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch navigation data: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Cache the data with the cache key
    navigationCache.set(cacheKey, data);
    
    console.log(`✅ Successfully loaded navigation data for ${specialty}:`, data);
    return data;
    
  } catch (error) {
    console.error(`❌ Failed to load navigation data for ${specialty}:`, error);
    throw error;
  }
}
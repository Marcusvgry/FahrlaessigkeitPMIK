import type { JsPsych } from 'jspsych';
import { experimentConfig } from '../config';

export async function saveExperimentData(jsPsych: JsPsych, devMode: boolean = false) {
  const csv = jsPsych.data.get().csv();
  
  // In dev mode, download the data as a file instead of sending to server
  if (devMode || experimentConfig.dataEndpoint === '/experiment-data') {
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `experiment-data-${Date.now()}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    console.info('[jsPsych] Daten als CSV heruntergeladen (Dev-Modus)');
    
    // Redirect to Prolific after download
    if (experimentConfig.prolificRedirectUrl) {
      window.location.assign(experimentConfig.prolificRedirectUrl);
    }
    return;
  }

  const response = await fetch(experimentConfig.dataEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/csv'
    },
    body: csv
  });

  if (!response.ok) {
    throw new Error(`Server antwortete mit Status ${response.status}`);
  }
  
  // Redirect to Prolific after successful save
  if (experimentConfig.prolificRedirectUrl) {
    window.location.assign(experimentConfig.prolificRedirectUrl);
  }
}

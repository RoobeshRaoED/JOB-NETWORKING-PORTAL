// server/utils/ai.js
// Simple skill matching helper (example)
export function matchJobsBySkills(userSkills = [], jobs = []) {
  // return jobs scored by how many skills match
  return jobs
    .map(job => {
      const jobSkills = job.requiredSkills || [];
      const score = jobSkills.reduce((acc, s) => acc + (userSkills.includes(s) ? 1 : 0), 0);
      return { job, score };
    })
    .sort((a, b) => b.score - a.score)
    .map(x => x.job);
}

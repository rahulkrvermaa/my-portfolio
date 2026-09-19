export interface StudentProfile {
 name: string;
 degree: string;
 year: string;
 college: string;
 location: string;
 role: string;
 bio: string;
 shortBio?: string;
 avatarUrl?: string;
 currentlyLearning: string[];
 interests: string[];
 currentlyBuilding?: {
 project: string;
 version: string;
 description: string;
 };
 careerGoal: string;
 contact: {
 github: string;
 linkedin: string;
 email: string;
 };
}

export interface SkillGroup {
 category: string;
 label: string;
 items: string[];
}

export interface Project {
 id: string;
 number: string;
 title: string;
 subtitle: string;
 description: string;
 problem: string;
 solution: string;
 technicalHighlight: string;
 tech: string[];
 category:'Full-Stack' |'Frontend' |'Utility' | string;
 status:'In Development' |'Complete' | string;
 keyHighlights: string[];
 architectureOverview: string;
 githubUrl: string;
 demoUrl: string;
}

export interface Experiment {
 id: string;
 title: string;
 type: string;
 summary: string;
 tech: string[];
 status:'Prototype' |'Completed' |'Script' |'Research' | string;
 githubPlaceholder: string;
}

export interface Certificate {
 id: string;
 title: string;
 issuer: string;
 issueDate: string;
 credentialId: string;
 credentialUrl: string;
 imageSrc: string;
 fileName: string;
 skills: string[];
 description: string;
 category:'certificate' |'internship';
}

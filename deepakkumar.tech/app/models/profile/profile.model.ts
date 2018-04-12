interface SocialMediaLink {
    userName: string;
    profileLink: string;
    icon: string;
}

interface Hobby {
  icon: string;
  name: string;
}

interface Certificate {
  name: string;
  desc: string;
}

interface Education {
  degree: string;
  uni: string;
}

interface ResumeLink {
    resumePath: string;
    icon: string;
    text: string;
}

interface WorkExp {
    title: string;
    period: string;
    companyUrl: string;
    companyName: string;
    jobDuties: string;
}

interface Skill {
    name: string;
    level: number;
}

interface ProfileData {
  skills: Skill[];
  hobbies: Hobby[];
  certificates: Certificate[];
  education: Education[];
  aboutMe: string;
  socialMediaLinks: SocialMediaLink[];
  resumeLinks: ResumeLink[];
  workEx: WorkExp[];
}
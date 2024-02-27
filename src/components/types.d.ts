type Experience = {
  id: string;
  company: string;
  typeExperience: string;
  dateStart: string;
  dateEnd: string;
  experience: string;
  achievements?: string[];
};

type ExperienceItem = {
  experience: Experience;
};

export type ExperiencesConstantsType = ExperienceItem[];
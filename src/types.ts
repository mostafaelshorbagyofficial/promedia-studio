export type ActiveExperience = 'studio' | 'protech';
export type Language = 'en' | 'ar';

export interface LocationSpec {
  area: string;
  lighting: string;
  acoustics: string;
  capacity: string;
}

export interface StudioLocation {
  id: string;
  name: string;
  nameAr?: string;
  category: string;
  categoryAr?: string;
  shortDesc: string;
  shortDescAr?: string;
  fullDesc: string;
  fullDescAr?: string;
  coverImage: string;
  images: string[];
  specs: LocationSpec;
  specsAr?: LocationSpec;
  features: string[];
  featuresAr?: string[];
}

export interface ProTechProduct {
  id: string;
  title: string;
  titleAr?: string;
  icon: string;
  shortDesc: string;
  shortDescAr?: string;
  whatItIs: string;
  whatItIsAr?: string;
  whatItCanDo: string[];
  whatItCanDoAr?: string[];
  businessValue: string;
  businessValueAr?: string;
  category: 'core' | 'ai' | 'systems' | 'apps' | 'infra';
}

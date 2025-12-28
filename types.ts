export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface Stat {
  id: number;
  label: string;
  value: number;
  suffix: string;
}

export interface ValuePillar {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface NavItem {
  label: string;
  href: string;
}
export interface SlideCardProps {
  title: string; 
  items: ItemType; 
}
type ItemType = string[];

export interface ItemSection {
  title: string;
  items: string[];
}

export interface NavItem2Props {
  searchBtn: boolean;
  setSearchBtn: React.Dispatch<React.SetStateAction<boolean>>;
}
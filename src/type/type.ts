export interface GiftProps{
  url:string;
  title:string;
  content:string;
  price?:number;
  newPrice?:number;
}

export interface IconicProps{
  url:string;
  title:string;
}

export interface ShopProps {
    url: string;
    new: boolean;
    title: string;
    desciption: string;
    price: number;
    newPrice: number;
    gender: string;
    company: string;
    color: string[];
}

export interface ItemSection {
  title: string;
  items: string[];
}

export interface NavItem2Props {
  searchBtn: boolean;
  setSearchBtn: React.Dispatch<React.SetStateAction<boolean>>;
}


export interface ItemProps {
  title: string;
  items: string[];
}
// export interface DataArray {
//   [index: number]: ItemProps;
// }

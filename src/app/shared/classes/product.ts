export interface Product {
  id?: number;
  name?: string;
  slug?: string;
  price?: number;
  sale_price?: number;
  review?: number;
  ratings?: number;
  until?: string;
  stock?: number;
  top?: boolean;
  featured?: boolean;
  new?: boolean;
  short_desc?: boolean;
  categories?: Array<{
    name?: string;
    slug?: string;
  }>;
  pictures?: Array<{
    width?: number;
    height?: number;
    url: string;
  }>;
  sm_pictures?: Array<{
    formats?: {
      small: {
        url?: string;
        name?: string;
      };
      medium: {
        url?: string;
        name?: string;
      };
      thumbnail: {
        url?: string;
        name?: string;
      };
    };
    width?: number;
    height?: number;
    url?: string;
  }>;
  variants?: Array<{
    color?: string;
    color_name?: string;
    price?: number;
    size?: Array<{
      name?: string;
    }>;
  }>;
}

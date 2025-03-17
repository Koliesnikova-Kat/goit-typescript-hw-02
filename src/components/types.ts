export interface PictureCard {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string | null;
  alt_description: string | null;
}

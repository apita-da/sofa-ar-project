export interface Sofa {
  id: number;
  name: string;
  thumbnail: string;
  images: Image[];
  modelPath: string | null;
  price: string;
  description: string;
}

interface Image {
  alt: string,
  path: string
}

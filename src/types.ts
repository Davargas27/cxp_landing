// src/types.ts (o @/types.ts)

export type ImageType = 'LogoCPX' | 'Sabio';
 
export interface ImageProps {
    type: ImageType;
    alt?: string;
    width?: number;
    height?: number;
}

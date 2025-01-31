
import Image from 'next/image';
import { getIcon } from './utils';
import { ImageProps } from "@/types";
 
export default function DynamicImage({
  type = 'LogoCPX',
  alt = '',
  width = 15,
  height = 15,
}: ImageProps) {
  return (
    <Image
      priority
      src={getIcon(type)}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
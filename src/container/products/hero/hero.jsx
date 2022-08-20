import Image from 'src/components/Image';
import { images } from 'src/constants';

export function HeroSection() {
  return (
    <Image src={images.productsHeroEarring} alt="Products hero earring" width={1440} height={535} />
  );
}

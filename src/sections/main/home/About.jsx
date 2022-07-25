import Image from 'next/image';

import Button from 'src/components/Button';
import { images } from 'src/constants';

export function AboutSection() {
  return (
    <section className="flex gap-42-px mt-120-px container">
      <div className="flex flex-col gap-8 w-2/4 max-w-544-px">
        <h2 className="heading-2">Về chúng tôi</h2>
        <q className="heading leading-58-px">Ngày mai phải tốt hơn ngày hôm nay</q>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <Button primary internalLink="/about" className="mt-66-px py-2 px-46-px">
          Tìm hiểu thêm
        </Button>
      </div>
      <div>
        <Image
          src={images.homeAbout}
          alt="Picture of Miki about"
          width={548}
          height={537}
          priority
          objectFit="cover"
          placeholder="blur"
          className="rounded-secondary"
        />
      </div>
    </section>
  );
}
import Image from 'next/image';

const lists = [
  {
    id: 1,
    name: 'comingsoon',
    descri: ``,
    src: '/busi/comingsoon.webp',
  },
  {
    id: 2,
    name: 'comingsoon',
    descri: ``,
    src: '/busi/comingsoon.webp',
  },
  {
    id: 3,
    name: 'comingsoon',
    descri: ``,
    src: '/busi/comingsoon.webp',
  },
  {
    id: 4,
    name: 'comingsoon',
    descri: ``,
    src: '/busi/comingsoon.webp',
  },
];

const Committee = () => {
  return (
    <>
      <section className="committee my-16 md:my-20">
        <h2 className="sectionTitle text-center items-center Montserrat">
          <div className="relative w-max">
            <Image
              src={'/busi/business_title_circle.svg'}
              width={128}
              height={128}
              alt=""
              className="absolute -top-3 -left-8 md:-top-8 md:-left-16 w-16 h-16 md:w-32 md:h-32"
            />
            <p className="relative break-all">Committee</p>
          </div>
          <span className="relative mt-2 md:mt-6">審査委員会</span>
        </h2>
        <div className="container px-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center mt-10 gap-5">
          {lists.map((list, index) => (
            <div key={index} className="item flex flex-col items-center justify-center">
              <Image src={list.src} alt={''} width={200} height={200} />
              <p className="mt-2 text-center">{list.name}</p>
              <p className="mt-2 text-center">{list.descri}</p>
            </div>
          ))}

          <div className="item"></div>
        </div>
      </section>
    </>
  );
};

export default Committee;

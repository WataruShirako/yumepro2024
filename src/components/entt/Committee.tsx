import Image from 'next/image';

const Committee = ({ committee }: any) => {
  return (
    <section id="committee" className={''}>
      <h2 className="secTitle">
        <span className={'block'}>committee</span>
        審査委員
      </h2>
      <div className="container m-auto max-w-[92%] lg:max-w-5xl">
        {committee.map((committee: any, index: any) => (
          <div
            className="list flex flex-col md:flex-row justify-between items-start mt-12"
            key={index}
          >
            <Image
              className={'prizeImg mx-auto md:ml-0 w-52 md:w-[30%] rounded-full'}
              src={committee.src}
              alt={committee.name}
              width={300}
              height={300}
              loading="lazy"
            />
            <div className={'m-auto mt-4 md:mt-0 md:mr-0 md:w-[60%] max-w-full'}>
              <h4 className={'text-2xl pb-4 md:pb-6 ShipporiMincho text-center md:text-left'}>
                {committee.name}
              </h4>
              <h5 className={'text-lg pb-4 md:pb-6 ShipporiMincho text-center md:text-left'}>
                {committee.pro}
              </h5>
              <p className={'text-sm leading-loose pb-4 md:pb-6'}>{committee.text}</p>
              {committee.hp !== '' && (
                <div className={'flex items-center justify-start gap-4 text-sm mb-2 md:mb-4'}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.997"
                    height="17.785"
                    viewBox="0 0 19.997 17.785"
                  >
                    <g id="homeicon" transform="translate(0 -28.324)">
                      <path
                        id="パス_427"
                        data-name="パス 427"
                        d="M16.919,35.244l-2.706-2.7-2.148-2.145L10,28.324,0,38.318,1.481,39.8,10,31.285,18.516,39.8,20,38.318Z"
                        transform="translate(0 0)"
                        fill="#485757"
                      />
                      <path
                        id="パス_428"
                        data-name="パス 428"
                        d="M78.8,141.877v6.7h5.28V144.07h3.281v4.509h5.28v-6.7l-6.917-6.918Z"
                        transform="translate(-75.723 -102.47)"
                        fill="#485757"
                      />
                    </g>
                  </svg>
                  <a href={committee.hp} className={'text-xs md:text-base hover:opacity-50'}>
                    {committee.hp}
                  </a>
                </div>
              )}
              {committee.twitter !== '' && (
                <div className={'flex items-center justify-start gap-4 text-sm mb-2 md:mb-4'}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.997"
                    height="16.258"
                    viewBox="0 0 19.997 16.258"
                  >
                    <path
                      id="icon_twitter"
                      d="M17.95,4.047c.012.176.012.353.012.531A11.6,11.6,0,0,1,6.289,16.258v0A11.61,11.61,0,0,1,0,14.414a8.343,8.343,0,0,0,.976.059,8.235,8.235,0,0,0,5.1-1.761A4.108,4.108,0,0,1,2.239,9.862a4.088,4.088,0,0,0,1.852-.071A4.1,4.1,0,0,1,.8,5.768V5.716a4.075,4.075,0,0,0,1.862.514A4.111,4.111,0,0,1,1.392.749,11.642,11.642,0,0,0,9.848,5.037a4.107,4.107,0,0,1,6.991-3.744,8.23,8.23,0,0,0,2.605-1,4.12,4.12,0,0,1-1.8,2.27A8.155,8.155,0,0,0,20,1.921,8.337,8.337,0,0,1,17.95,4.047Z"
                      fill="#485757"
                    />
                  </svg>
                  <a
                    href={`https://twitter.com/${committee.twitter}/`}
                    className={'text-xs md:text-base hover:opacity-50'}
                  >
                    {committee.twitter}
                  </a>
                </div>
              )}
              {committee.insta !== '' && (
                <div className={'flex items-center justify-start gap-4 text-sm mb-2 md:mb-4'}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.997"
                    height="19.997"
                    viewBox="0 0 19.997 19.997"
                  >
                    <g
                      id="グループ_726"
                      data-name="グループ 726"
                      transform="translate(-6388 -3044)"
                    >
                      <path
                        id="長方形_462"
                        data-name="長方形 462"
                        d="M4.555-1h8.888A5.561,5.561,0,0,1,19,4.555v8.888A5.561,5.561,0,0,1,13.442,19H4.555A5.561,5.561,0,0,1-1,13.442V4.555A5.561,5.561,0,0,1,4.555-1Zm8.888,17.775a3.337,3.337,0,0,0,3.333-3.333V4.555a3.337,3.337,0,0,0-3.333-3.333H4.555A3.337,3.337,0,0,0,1.222,4.555v8.888a3.337,3.337,0,0,0,3.333,3.333Z"
                        transform="translate(6389 3045)"
                        fill="#485757"
                      />
                      <path
                        id="楕円形_32"
                        data-name="楕円形 32"
                        d="M3.444-1A4.444,4.444,0,1,1-1,3.444,4.449,4.449,0,0,1,3.444-1Zm0,6.666A2.222,2.222,0,1,0,1.222,3.444,2.224,2.224,0,0,0,3.444,5.666Z"
                        transform="translate(6394.555 3050.555)"
                        fill="#485757"
                      />
                      <path
                        id="線_144"
                        data-name="線 144"
                        d="M.111,1.223A1.111,1.111,0,1,1,1.222.111h0A1.111,1.111,0,0,1,.111,1.223Z"
                        transform="translate(6402.887 3048.888)"
                        fill="#485757"
                      />
                    </g>
                  </svg>
                  <a
                    href={`https://instagram.com/${committee.insta}/`}
                    className={'text-xs md:text-base hover:opacity-50'}
                  >
                    @{committee.insta}
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Committee;

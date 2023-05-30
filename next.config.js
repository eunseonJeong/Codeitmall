/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        //객체를 배열로 리턴하기
        source: "/products/:id", //리다이렉트를 할 대상
        destination: "/items/:id", //이동시킬 주소
        permanent: true, //responce statuscode 정하기
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/codeitmall/**",
      },
    ],
  },
};

module.exports = nextConfig;

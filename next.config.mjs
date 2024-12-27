/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

const nextConfig = {};

export default withPWA({
  ...nextConfig,
  pwa: {
    dest: "public", // manifest.json과 서비스 워커 파일 위치
    register: true,
    skipWaiting: true,
  },
});

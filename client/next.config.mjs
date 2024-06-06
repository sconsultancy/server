/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/auth/google/:path*",
        destination: "http://localhost:5000/auth/google/:path*",
      },
    ];
  },
  output: "export",
};

export default nextConfig;

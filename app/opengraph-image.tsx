import { ImageResponse } from "next/og";


export const alt = "Abhishek Jha - Full Stack Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  // Load local avatar image for Edge runtime
  const avatarData = await fetch(
    new URL("../assets/images/abhishek.png", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #09090b 0%, #18181b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "200px",
            height: "200px",
            borderRadius: "100px",
            overflow: "hidden",
            border: "4px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            marginBottom: "40px",
          }}
        >
          <img
            src={avatarData as unknown as string}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.05em",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Abhishek Jha
        </div>

        <div
          style={{
            fontSize: "32px",
            fontWeight: 500,
            color: "#a1a1aa",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Full Stack Software Engineer
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

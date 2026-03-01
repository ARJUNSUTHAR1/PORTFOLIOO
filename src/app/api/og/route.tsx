import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {


  return new ImageResponse(
    (
      <div tw=" bg-[#09090b] text-white w-full p-4 h-full flex items-center justify-center flex-col">
        <img
          tw="flex items-center justify-center border-black w-[20%] mb-6 p-2"
          src="https://res.cloudinary.com/dxjm0u3vj/image/upload/v1772364112/ChatGPT_Image_Mar_1_2026_01_31_17_PM_ejlmru.png"
        />
        <div tw="text-[3rem]">Arjun Suthar</div>
        <div tw="">Passionate Frontend Developer</div>
        <div tw="text-[1rem] absolute bottom-4 opacity-50">
          Reachout : arjunsuthar2112@gmail.com
        </div>
        <div
          style={{
            background: "linear-gradient(135deg, #667eea  0%, #ffff 40%)",
            width: "20rem",
            height: "20rem",
            filter: "blur(130px)",
            borderRadius: "50%",
            display: "flex",
            position: "absolute",
            opacity: "0.5",
            top: "-100px",
            right: "-40px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "main",
          }}
        ></div>
        <div
          style={{
            background: "linear-gradient(135deg, #667eea  0%, #ffff 40%)",
            width: "20rem",
            height: "20rem",
            filter: "blur(130px)",
            borderRadius: "50%",
            display: "flex",
            position: "absolute",
            bottom: "-100px",
            left: "-40px",
            flexDirection: "column",
            alignItems: "center",
            opacity: "0.5",
            justifyContent: "center",
            fontFamily: "main",
          }}
        ></div>
      </div>
      // {
      //   fonts: [
      //     {
      //       name: "main",
      //       data: fontData,
      //       style: "normal",
      //     },
      //   ],
      // }
    )
  );
}

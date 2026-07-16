import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Florencia Quiroga · Técnica Universitaria en Química | Buenos Aires";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const portrait = await readFile(
    join(process.cwd(), "public/florencia-portrait.jpg")
  );
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #0D1B2A 55%, #123a44 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Text block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "0 40px 0 80px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: "#0E9F8E",
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 9999,
                background: "#0E9F8E",
              }}
            />
            Disponible para trabajar
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "white",
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.05,
              marginBottom: 24,
            }}
          >
            <span>Florencia</span>
            <span style={{ color: "#0E9F8E" }}>Quiroga</span>
          </div>
          <div
            style={{
              display: "flex",
              color: "rgba(255,255,255,0.75)",
              fontSize: 34,
              marginBottom: 20,
            }}
          >
            Técnica Universitaria en Química
          </div>
          <div
            style={{
              display: "flex",
              color: "rgba(255,255,255,0.45)",
              fontSize: 24,
            }}
          >
            Laboratorio analítico · Control de calidad · Buenos Aires
          </div>
        </div>

        {/* Portrait */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingRight: 70,
          }}
        >
          <img
            src={portraitSrc}
            alt=""
            width={380}
            height={506}
            style={{
              borderRadius: 24,
              objectFit: "cover",
              border: "3px solid rgba(14,159,142,0.5)",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}

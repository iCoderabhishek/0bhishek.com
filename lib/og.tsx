export const COLORS = {
  ink: "#12140c",
  cream: "#fdf4ee",
  sand: "#f4e6da",
  lime: "#d4e02f",
  mint: "#a0ef82",
  sun: "#fbd63a",
  muted: "#5c5a52",
};

export const SITE_HOST = "0bhishek.com";

const CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .,:;!?&·—-–/()+%$'\"*№→";

async function loadGoogleFont(family: string, weight: number): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}&text=${encodeURIComponent(CHARSET)}`
    ).then((r) => r.text());
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

type Font = { name: string; data: ArrayBuffer; weight: 400 | 700; style: "normal" };

export async function loadFonts(): Promise<Font[]> {
  const [oswald, mono, monoBold] = await Promise.all([
    loadGoogleFont("Oswald", 700),
    loadGoogleFont("JetBrains Mono", 400),
    loadGoogleFont("JetBrains Mono", 700),
  ]);
  const fonts: Font[] = [];
  if (oswald) fonts.push({ name: "Oswald", data: oswald, weight: 700, style: "normal" });
  if (mono) fonts.push({ name: "JetBrains Mono", data: mono, weight: 400, style: "normal" });
  if (monoBold) fonts.push({ name: "JetBrains Mono", data: monoBold, weight: 700, style: "normal" });
  return fonts;
}

export const DISPLAY = "Oswald, sans-serif";
export const MONO = "'JetBrains Mono', monospace";

export function OgBadge({ size, label = ["FULL", "STACK"] }: { size: number; label?: string[] }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: size,
        background: COLORS.ink,
        border: `${Math.round(size * 0.06)}px solid ${COLORS.lime}`,
        color: COLORS.lime,
        fontFamily: DISPLAY,
        fontWeight: 700,
        fontSize: size * 0.22,
        lineHeight: 1.02,
      }}
    >
      {label.map((l) => (
        <div key={l} style={{ display: "flex" }}>
          {l}
        </div>
      ))}
    </div>
  );
}

export function PageCard({ index, title, line }: { index: string; title: string; line: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: COLORS.cream,
        color: COLORS.ink,
        padding: 64,
        fontFamily: MONO,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 3, color: COLORS.muted }}>
        <div style={{ display: "flex" }}>({index}) {SITE_HOST.toUpperCase()}</div>
        <div style={{ display: "flex" }}>KOLKATA, IN</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontFamily: DISPLAY, fontWeight: 700, fontSize: 200, lineHeight: 0.9 }}>
          {title.toUpperCase()}
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 30, maxWidth: 900, lineHeight: 1.35 }}>{line}</div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <OgBadge size={84} label={["A", "J"]} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontFamily: DISPLAY, fontWeight: 700, fontSize: 44, lineHeight: 1 }}>
              ABHISHEK JHA
            </div>
            <div style={{ display: "flex", marginTop: 6, fontSize: 20, letterSpacing: 2, color: COLORS.muted }}>
              FULL STACK ENGINEER
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            background: COLORS.lime,
            border: `3px solid ${COLORS.ink}`,
            borderRadius: 999,
            padding: "14px 28px",
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: 2,
          }}
        >
          OPEN TO FULL-TIME & CONTRACT
        </div>
      </div>
    </div>
  );
}

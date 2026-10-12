import { ImageResponse } from 'next/og';

export const alt = 'Kameel Kasumu — Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '80px',
        backgroundColor: '#12141b',
        backgroundImage:
          'radial-gradient(circle at 90% 0%, rgba(90,109,192,0.55), rgba(18,20,27,0) 55%)',
        color: '#eaeefb',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          fontSize: 28,
          color: '#a6acc8',
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: 3,
            background: '#8da1ec',
          }}
        />
        kkasumu.vercel.app
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            fontSize: 120,
            fontWeight: 700,
            letterSpacing: '-0.05em',
            lineHeight: 1,
          }}
        >
          Kameel Kasumu
        </div>
        <div style={{ fontSize: 40, marginTop: 24, color: '#a6acc8' }}>
          Software engineer · Calgary, AB
        </div>
      </div>
    </div>,
    size
  );
}

import { ImageResponse } from 'next/og';

export const alt = 'Queenan Capital';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          background: '#111111',
          color: '#f6f3ed',
          fontFamily: 'Georgia, Times New Roman, serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 22,
            background: '#7a2330',
          }}
        />

        <div
          style={{
            width: '100%',
            padding: '74px 82px 68px 92px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
            <div
              style={{
                width: 210,
                height: 210,
                border: '1px solid rgba(246,243,237,.34)',
                display: 'flex',
                position: 'relative',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#111111',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 14,
                  background: '#7a2330',
                }}
              />
              <div
                style={{
                  fontSize: 132,
                  lineHeight: 1,
                  fontStyle: 'italic',
                  transform: 'translateY(-2px)',
                }}
              >
                Q
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: 24,
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  color: '#b5aea6',
                  marginBottom: 18,
                }}
              >
                QUEENAN CAPITAL LLC
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontWeight: 700,
                  letterSpacing: '-0.055em',
                  lineHeight: 0.82,
                }}
              >
                <span style={{ fontSize: 108, color: '#f6f3ed' }}>QUEENAN</span>
                <span style={{ fontSize: 108, color: '#7a2330', marginLeft: 48 }}>CAPITAL</span>
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              borderTop: '1px solid rgba(246,243,237,.28)',
              paddingTop: 24,
              fontFamily: 'Arial, Helvetica, sans-serif',
            }}
          >
            <div
              style={{
                fontSize: 27,
                letterSpacing: '-0.015em',
                color: '#f6f3ed',
              }}
            >
              Independent holding company
            </div>
            <div
              style={{
                fontSize: 17,
                fontWeight: 700,
                letterSpacing: '0.11em',
                color: '#8f8881',
                textTransform: 'uppercase',
              }}
            >
              Chicago, Illinois · Founded 2026
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}

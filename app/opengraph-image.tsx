import { ImageResponse } from 'next/og'

export const alt = 'LaunchKaro — Websites for Local Businesses in Latur, Maharashtra'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#fbfaf8',
          padding: '64px 80px',
          fontFamily: 'sans-serif',
          color: '#1c1b18',
        }}
      >
        {/* Top Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#1c1b18',
            }}
          />
          <span
            style={{
              fontSize: '24px',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#1c1b18',
            }}
          >
            LaunchKaro
          </span>
          <span
            style={{
              marginLeft: 'auto',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              color: '#78756e',
              textTransform: 'uppercase',
            }}
          >
            DIGITAL AGENCY — LATUR, MAHARASHTRA
          </span>
        </div>

        {/* Hero Copy */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '900px' }}>
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: '-0.035em',
              color: '#1c1b18',
              margin: 0,
            }}
          >
            Websites that make local businesses impossible to ignore.
          </h1>
          <p
            style={{
              fontSize: '24px',
              lineHeight: 1.4,
              color: '#66635c',
              margin: 0,
            }}
          >
            Web design, development & local SEO for shops, clinics & service businesses.
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #e6e3dc',
            paddingTop: '28px',
          }}
        >
          <div style={{ display: 'flex', gap: '24px', fontSize: '18px', color: '#78756e' }}>
            <span>Starter: INR 9,999</span>
            <span>•</span>
            <span>Pro: INR 17,999</span>
            <span>•</span>
            <span>Premium: INR 24,999</span>
          </div>
          <span
            style={{
              fontSize: '20px',
              fontWeight: 600,
              color: '#1c1b18',
            }}
          >
            launchkaro.online
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

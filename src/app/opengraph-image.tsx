import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = "Kameel Kasumu's initials, KK";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  const image = await readFile(join(process.cwd(), 'src/images/dark-kk.jpeg'));
  const src = `data:image/jpeg;base64,${image.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1d1d1f',
        }}
      >
        <img src={src} width={630} height={630} alt="" />
      </div>
    ),
    { ...size },
  );
}

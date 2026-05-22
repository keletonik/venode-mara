/**
 * Self-contained MD5 implementation (RFC 1321) operating on UTF-8 bytes.
 * Web Crypto does not provide MD5, but it remains common for legacy
 * checksums, so the Hash Generator tool needs its own implementation.
 */

const S = [
  7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22,
  5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20,
  4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23,
  6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21,
];

const K = (() => {
  const k = new Int32Array(64);
  for (let i = 0; i < 64; i++) {
    k[i] = Math.floor(Math.abs(Math.sin(i + 1)) * 4294967296) | 0;
  }
  return k;
})();

function rotl(x: number, c: number): number {
  return (x << c) | (x >>> (32 - c));
}

export function md5Bytes(input: Uint8Array): string {
  const msgLen = input.length;
  const totalLen = (((msgLen + 8) >> 6) << 6) + 64;
  const bytes = new Uint8Array(totalLen);
  bytes.set(input);
  bytes[msgLen] = 0x80;

  const bitLen = msgLen * 8;
  bytes[totalLen - 8] = bitLen & 0xff;
  bytes[totalLen - 7] = (bitLen >>> 8) & 0xff;
  bytes[totalLen - 6] = (bitLen >>> 16) & 0xff;
  bytes[totalLen - 5] = (bitLen >>> 24) & 0xff;

  let a0 = 0x67452301;
  let b0 = 0xefcdab89;
  let c0 = 0x98badcfe;
  let d0 = 0x10325476;

  const M = new Int32Array(16);
  for (let off = 0; off < totalLen; off += 64) {
    for (let i = 0; i < 16; i++) {
      const j = off + i * 4;
      M[i] =
        bytes[j] |
        (bytes[j + 1] << 8) |
        (bytes[j + 2] << 16) |
        (bytes[j + 3] << 24);
    }

    let A = a0;
    let B = b0;
    let C = c0;
    let D = d0;

    for (let i = 0; i < 64; i++) {
      let F: number;
      let g: number;
      if (i < 16) {
        F = (B & C) | (~B & D);
        g = i;
      } else if (i < 32) {
        F = (D & B) | (~D & C);
        g = (5 * i + 1) % 16;
      } else if (i < 48) {
        F = B ^ C ^ D;
        g = (3 * i + 5) % 16;
      } else {
        F = C ^ (B | ~D);
        g = (7 * i) % 16;
      }
      F = (F + A + K[i] + M[g]) | 0;
      A = D;
      D = C;
      C = B;
      B = (B + rotl(F, S[i])) | 0;
    }

    a0 = (a0 + A) | 0;
    b0 = (b0 + B) | 0;
    c0 = (c0 + C) | 0;
    d0 = (d0 + D) | 0;
  }

  const word = (n: number): string => {
    let s = "";
    for (let i = 0; i < 4; i++) {
      s += (((n >>> (i * 8)) & 0xff).toString(16)).padStart(2, "0");
    }
    return s;
  };

  return word(a0) + word(b0) + word(c0) + word(d0);
}

export function md5(text: string): string {
  return md5Bytes(new TextEncoder().encode(text));
}

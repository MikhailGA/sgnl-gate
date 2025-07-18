export function simulateResponseDelay({
  fileSizeBytes,
  speedBytesPerSec,
}: {
  fileSizeBytes: number;
  speedBytesPerSec: number;
}) {
  const delayMs = (fileSizeBytes / speedBytesPerSec) * 1000;

  return new Promise((resolve) => {
    console.log(
      `Simulating response delay for file size: ${fileSizeBytes} bytes`,
    );
    console.log(
      `Speed: ${speedBytesPerSec} B/s → Delay: ${delayMs.toFixed(0)} ms`,
    );
    setTimeout(() => {
      resolve(`Done after ${delayMs.toFixed(0)} ms`);
    }, delayMs);
  });
}

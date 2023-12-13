export function throttleHelper(callback: () => void, waitTime: number): () => void {
  let timerId: ReturnType<typeof setTimeout> | null = null;

  return function () {
    if (timerId === null) {
      timerId = setTimeout(() => {
        callback();
        timerId = null;
      }, waitTime);
    }
  };
}
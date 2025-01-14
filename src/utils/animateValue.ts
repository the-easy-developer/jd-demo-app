
// found this code from https://css-tricks.com/animating-number-counters/
export default function animateValue(obj: HTMLDivElement, start: number, end: number, duration: number) {
  let startTimestamp: number | null = null;
  
  const step = (timestamp: number) => {
    if (!startTimestamp) {
      startTimestamp = timestamp;
    }
    
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);

    obj.children[0].innerHTML = `${Math.floor(progress * (end - start) + start)}`;

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  
  window.requestAnimationFrame(step);
  
}

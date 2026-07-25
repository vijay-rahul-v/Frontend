// twoFingerSwipe.js

export function initTwoFingerSwipe(onSwipeHome) {
  let accumulatedDeltaX = 0;
  let swipeTimeout = null;
  
  // Higher threshold = harder swipe required. 300-400 works great for trackpads.
  const SWIPE_THRESHOLD = -350; 

  const handleWheel = (e) => {
    // e.deltaX catches horizontal trackpad scrolling
    // A two-finger swipe right on a trackpad produces NEGATIVE deltaX values
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      
      // Stop the browser from triggering its own history "back" page animation
      e.preventDefault(); 
      
      accumulatedDeltaX += e.deltaX;

      // Debugging: Watch the values pile up in your console
      console.log(`Trackpad X movement: ${accumulatedDeltaX}px`);

      if (accumulatedDeltaX < SWIPE_THRESHOLD) {
        onSwipeHome();
        
        // Reset immediately after triggering so it doesn't fire twice
        accumulatedDeltaX = 0; 
      }

      // Reset the counter if the user stops swiping for 200 milliseconds
      clearTimeout(swipeTimeout);
      swipeTimeout = setTimeout(() => {
        accumulatedDeltaX = 0;
      }, 200);
    }
  };

  // MUST set { passive: false } or e.preventDefault() will be ignored by the browser
  window.addEventListener('wheel', handleWheel, { passive: false });

  return () => {
    window.removeEventListener('wheel', handleWheel);
    clearTimeout(swipeTimeout);
  };
}

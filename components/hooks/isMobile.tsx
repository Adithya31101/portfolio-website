const isMobile = (): boolean => {
   return Math.min(window.screen.width, window.screen.height) < 600;
}

export default isMobile;
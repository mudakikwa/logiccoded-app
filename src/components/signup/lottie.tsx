import React, { useEffect, createRef } from 'react';
import lottie from 'lottie-web';

const LottieWrapper = () => {
  const animationContainer = createRef<HTMLDivElement>();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets1.lottiefiles.com/packages/lf20_pyawb2b1.json',
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, [animationContainer]);

  return (
    <div
      style={{ position: 'absolute', width: '100%', height: '100vh' }}
      ref={animationContainer}
    />
  );
};

export default LottieWrapper;

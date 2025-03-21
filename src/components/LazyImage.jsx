import { useState } from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  position: relative;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${props => props.objectFit || 'cover'};
  opacity: ${props => props.isLoaded ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
`;

const LoadingSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: var(--text-primary);
  animation: spin 1s ease-in-out infinite;
  display: ${props => props.isLoading ? 'block' : 'none'};

  @keyframes spin {
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

export default function LazyImage({ src, alt, width, height, objectFit, className }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <ImageWrapper width={width} height={height} className={className}>
      <StyledImage
        src={src}
        alt={alt}
        onLoad={handleLoad}
        isLoaded={isLoaded}
        objectFit={objectFit}
      />
      <LoadingSpinner isLoading={!isLoaded} />
    </ImageWrapper>
  );
}
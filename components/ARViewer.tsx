
import React, { useState, useRef, useEffect } from 'react';

interface ARViewerProps {
  imageUrl: string;
  onClose: () => void;
  productName?: string;
}

const ARViewer: React.FC<ARViewerProps> = ({ imageUrl, onClose, productName = "NK-ALPHA-PROTO" }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shoeTransform, setShoeTransform] = useState({ x: 0, y: 0, scale: 1, rotation: -12 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: 'environment' }, 
          audio: false 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsCameraActive(true);
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
        setError("Camera Access Denied. Protocol Halted.");
      }
    }
    startCamera();
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        (videoRef.current.srcObject as MediaStream).getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDragStart({ x: clientX - shoeTransform.x, y: clientY - shoeTransform.y });
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setShoeTransform(prev => ({
      ...prev,
      x: clientX - dragStart.x,
      y: clientY - dragStart.y
    }));
  };

  const handleWheel = (e: React.WheelEvent) => {
    const delta = e.deltaY * -0.001;
    setShoeTransform(prev => ({
      ...prev,
      scale: Math.max(0.2, Math.min(3, prev.scale + delta))
    }));
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col overflow-hidden font-mono">
      {/* Camera Feed */}
      <video 
        ref={videoRef} 
        autoPlay 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-blueprint opacity-20 pointer-events-none"></div>

      {/* HUD Elements */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <div className="flex items-center gap-2 bg-primary px-3 py-1">
              <span className="size-2 bg-white rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">AR_PROTOCOL_ACTIVE</span>
            </div>
            <div className="text-[9px] text-primary/80 bg-black/40 p-2 backdrop-blur-sm border border-primary/20 uppercase">
              ID: {productName}<br/>
              LAT: 34.0522° N<br/>
              LONG: 118.2437° W<br/>
              ALT: 89.2m
            </div>
          </div>
          <button 
            onClick={onClose}
            className="pointer-events-auto size-12 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all bg-black/40 backdrop-blur-md"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex justify-center items-center">
          <div className="size-64 border border-primary/40 relative">
            <div className="absolute -top-1 -left-1 size-4 border-t-2 border-l-2 border-primary"></div>
            <div className="absolute -top-1 -right-1 size-4 border-t-2 border-r-2 border-primary"></div>
            <div className="absolute -bottom-1 -left-1 size-4 border-b-2 border-l-2 border-primary"></div>
            <div className="absolute -bottom-1 -right-1 size-4 border-b-2 border-r-2 border-primary"></div>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/20"></div>
            <div className="absolute left-1/2 top-0 w-[1px] h-full bg-primary/20"></div>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="text-[9px] text-white/40 space-y-1">
            <p>SENSORS: STABLE</p>
            <p>SYNC: 0.04ms</p>
            <p>OBJECT: 1:1 SCALE</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="text-[9px] font-bold text-primary uppercase">Drag to Position // Scroll to Scale</span>
            <div className="w-48 h-1 bg-white/10 relative overflow-hidden">
               <div className="absolute inset-y-0 left-0 bg-primary animate-pulse" style={{ width: `${shoeTransform.scale * 33}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-50">
          <div className="text-center p-8 border border-red-500 bg-red-500/10">
            <span className="material-symbols-outlined text-red-500 text-5xl mb-4">videocam_off</span>
            <p className="text-red-500 font-bold uppercase tracking-widest">{error}</p>
            <button onClick={onClose} className="mt-6 px-6 py-2 bg-red-500 text-white text-xs font-bold uppercase">Return to Lab</button>
          </div>
        </div>
      )}

      {/* AR Object (The Shoe) */}
      <div 
        className={`absolute cursor-grab active:cursor-grabbing transition-shadow ${isDragging ? 'shadow-[0_0_50px_rgba(19,19,236,0.3)]' : ''}`}
        style={{
          transform: `translate(${shoeTransform.x}px, ${shoeTransform.y}px) scale(${shoeTransform.scale}) rotate(${shoeTransform.rotation}deg)`,
          left: '50%',
          top: '50%',
          marginLeft: '-150px',
          marginTop: '-150px'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={() => setIsDragging(false)}
        onWheel={handleWheel}
      >
        <img 
          src={imageUrl} 
          alt="AR Shoe" 
          className="w-[300px] h-[300px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          draggable="false"
        />
        {/* Scanning Line Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent h-1 w-full animate-scanline pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ARViewer;

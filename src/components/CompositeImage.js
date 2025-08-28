import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const imageTransition = { duration: 0.5, ease: "easeInOut" };

function CompositeImage({ backgroundColor, images }) {
  console.log(images);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.div
      style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gap: "5px",
        width: "100%",
        height: "0",
        paddingBottom: "52.6%",
        backgroundColor,
        overflow: "hidden",
      }}
    >
      {images.map((image) => (
        <div key={image} style={{ position: "relative" }}>
          {selectedImage !== image && (
            <motion.img
              layoutId={image}
              src={image}
              alt={image}
              transition={imageTransition}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
                cursor: "pointer",
              }}
              onClick={() => setSelectedImage(image)}
            />
          )}
        </div>
      ))}

      {/* Fullscreen overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 10,
              backgroundColor: backgroundColor,
            }}
          >
            <motion.img
              layoutId={selectedImage}
              src={selectedImage}
              alt={selectedImage}
              transition={imageTransition}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
                cursor: "pointer",
              }}
              onClick={() => setSelectedImage(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default CompositeImage;

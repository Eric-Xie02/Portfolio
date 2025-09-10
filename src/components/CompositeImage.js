import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const imageTransition = { duration: 0.5, ease: "easeInOut" };

function CompositeImage({ backgroundColor, images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.div
      style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
        gridTemplateRows: "repeat(2, 1fr)", // 2 rows
        width: "100%",
        height: "0",
        paddingBottom: "52.6%", // maintain aspect ratio
        backgroundColor,
        overflow: "hidden",
        gap: 0, // remove spacing
      }}
    >
      {images.map((image) => (
        <div
          key={image}
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          {selectedImage !== image && (
            <motion.img
              layoutId={image}
              src={image}
              alt={image}
              transition={imageTransition}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // fill cell completely
                cursor: "pointer",
                display: "block",
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
              backgroundColor,
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
                objectFit: "cover",
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

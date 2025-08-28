import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Fade,
  MobileStepper,
  useTheme,
  CssBaseline
} from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

// Import your local images from src/assets
import slide1 from "../assets/large-image-template.jpg";
import slide2 from "../assets/3361eea4-843d-4ad4-ae2e-3abead2762e9.jpg";
import slide3 from "../assets/6195552.jpg";

const IMAGES = [slide1, slide2, slide3]; // <— add/remove your files here

export default function Slider() {
  return (
    <>
      <CssBaseline />
     

      {/* Spacer to push content below the fixed AppBar */}
      <Toolbar />

      {/* Slider container */}
      <Box sx={{ p: { xs: 1.5, sm: 2, md: 3 } }}>
        <ImageCarousel images={IMAGES} interval={1000} />
      </Box>
    </>
  );
}

function ImageCarousel({ images, interval = 3000 }) {
  const theme = useTheme();
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const timerRef = React.useRef(null);

  const next = React.useCallback(
    () => setActive((i) => (i + 1) % images.length),
    [images.length]
  );
  const prev = React.useCallback(
    () => setActive((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );

  // Auto-play
  React.useEffect(() => {
    if (paused || images.length <= 1) return;
    timerRef.current = setInterval(next, interval);
    return () => clearInterval(timerRef.current);
  }, [next, paused, interval, images.length]);

  if (!images?.length) return null;

  return (
    <Box
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 220, sm: 320, md: 420 }, // responsive height
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 3,
        bgcolor: "grey.200"
      }}
    >
      {images.map((src, idx) => (
        <Fade
          in={idx === active}
          key={idx}
          timeout={600}
          mountOnEnter
          unmountOnExit
        >
          <Box
            component="img"
            src={src}
            alt={`slide-${idx + 1}`}
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block"
            }}
          />
        </Fade>
      ))}

      {/* Left arrow */}
      <IconButton
        aria-label="previous slide"
        onClick={prev}
        size="small"
        sx={{
          position: "absolute",
          top: "50%",
          left: 8,
          transform: "translateY(-50%)",
          bgcolor: "rgba(0,0,0,0.4)",
          color: "common.white",
          "&:hover": { bgcolor: "rgba(0,0,0,0.6)" }
        }}
      >
        <ArrowBackIosNew fontSize="small" />
      </IconButton>

      {/* Right arrow */}
      <IconButton
        aria-label="next slide"
        onClick={next}
        size="small"
        sx={{
          position: "absolute",
          top: "50%",
          right: 8,
          transform: "translateY(-50%)",
          bgcolor: "rgba(0,0,0,0.4)",
          color: "common.white",
          "&:hover": { bgcolor: "rgba(0,0,0,0.6)" }
        }}
      >
        <ArrowForwardIos fontSize="small" />
      </IconButton>

      {/* Dots */}
      <MobileStepper
        variant="dots"
        steps={images.length}
        position="static"
        activeStep={active}
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: "transparent",
          justifyContent: "center",
          p: 1,
          "& .MuiMobileStepper-dot": { bgcolor: "rgba(255,255,255,0.6)" },
          "& .MuiMobileStepper-dotActive": { bgcolor: "primary.main" }
        }}
        nextButton={null}
        backButton={null}
      />
    </Box>
  );
}

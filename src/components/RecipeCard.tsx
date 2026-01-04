import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ShareIcon from "@mui/icons-material/RemoveRedEye";
import { ProjectData } from "../assets/data";
import { Link } from "react-router-dom";
import "./style.css";

const CARD_KEYWORDS = [
  "React",
  "React Native",
  "TypeScript",
  "Redux",
  "Next.js",
  "Tailwind",
  "Firebase",
  "Node",
];

const toSummary = (text: string) =>
  text
    .split(/(?<=\.)\s+/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 2);

const emphasize = (sentence: string) => {
  const pattern = new RegExp(`(${CARD_KEYWORDS.join("|")})`, "gi");
  return sentence.split(pattern).map((part, index) => {
    const match = CARD_KEYWORDS.find(
      (keyword) => keyword.toLowerCase() === part.toLowerCase()
    );
    if (match) {
      return (
        <strong
          key={`${part}-${index}`}
          className="text-cyan-400 font-semibold"
        >
          {part}
        </strong>
      );
    }
    return <span key={`${part}-${index}`}>{part}</span>;
  });
};

export default function RecipeReviewCard(props: ProjectData) {
  const isVideo = /\.(mp4|mov)$/i.test(props.projectImage);
  const summary = toSummary(props.description);

  // Determine badge styling based on status
  const isCurrent = props.subheader === "Current";
  const badgeClass = isCurrent ? "badge-current" : "badge-year";

  // Get tech stack (limit to 4)
  const techStack = props.techStack?.slice(0, 4) || [];

  return (
    <Card className="project-card" sx={webstyle.card}>
      {/* Header with Category & Status Badges */}
      <Box sx={webstyle.badgeContainer}>
        <span
          className={props.category === "Mobile" ? "badge-mobile" : "badge-web"}
          style={{
            padding: "0.25rem 0.75rem",
            borderRadius: "9999px",
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {props.category || "Web"}
        </span>
        <span
          className={badgeClass}
          style={{
            padding: "0.25rem 0.75rem",
            borderRadius: "9999px",
            fontSize: "0.75rem",
            fontWeight: 600,
          }}
        >
          {props.subheader}
        </span>
      </Box>

      {/* Project Title */}
      <Typography variant="h3" component="h3" sx={webstyle.title}>
        {props.projectName}
      </Typography>

      {/* Tech Stack Pills */}
      {techStack.length > 0 && (
        <Box sx={webstyle.techStackContainer}>
          {techStack.map((tech, idx) => (
            <span key={idx} className="tech-pill">
              {tech}
            </span>
          ))}
        </Box>
      )}

      {/* Project Image */}
      <Box sx={webstyle.imageContainer}>
        {!isVideo ? (
          <CardMedia
            component="img"
            className="project-card-image"
            image={props.projectImage}
            alt={`${props.projectName} - ${
              props.category || "Web"
            } application screenshot showing the user interface`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <CardMedia
            component="video"
            className="project-card-image"
            src={props.projectImage}
            title={`${props.projectName} demo video`}
            autoPlay={false}
            loop
            muted={false}
            controls
          />
        )}
      </Box>

      {/* Description */}
      <CardContent sx={webstyle.cardContent}>
        {summary.map((sentence, index) => (
          <Typography
            key={index}
            variant="body2"
            component={"p"}
            sx={webstyle.description}
            className="line-clamp-3"
          >
            {emphasize(sentence)}
          </Typography>
        ))}
      </CardContent>

      {/* Action Buttons */}
      <CardActions sx={webstyle.cardActions}>
        <Link
          className="btn-primary"
          style={{ textDecoration: "none" }}
          target="_blank"
          to={props.tryLink}
          aria-label={`View live demo of ${props.projectName}`}
        >
          <ShareIcon sx={{ fontSize: "1rem" }} />
          Live Demo
        </Link>
        {props.sourceCodeLink && props.sourceCodeLink !== "private" && (
          <Link
            className="btn-secondary"
            style={{ textDecoration: "none" }}
            target="_blank"
            to={props.sourceCodeLink}
            aria-label={`View source code for ${props.projectName}`}
          >
            <GitHubIcon sx={{ fontSize: "1rem" }} />
            Source
          </Link>
        )}
      </CardActions>
    </Card>
  );
}

const webstyle = {
  card: {
    backgroundColor: "transparent",
    boxShadow: "none",
    border: "none",
  },
  badgeContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "0.75rem",
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: 700,
    lineHeight: 1.3,
    color: "var(--text-primary)",
    marginBottom: "1rem",
    textTransform: "capitalize" as const,
  },
  techStackContainer: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "0.5rem",
    marginBottom: "1rem",
  },
  imageContainer: {
    width: "100%",
    marginBottom: "1rem",
    overflow: "hidden",
    borderRadius: "0.75rem",
  },
  cardContent: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.5rem",
    padding: "0 !important",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "0.9375rem",
    lineHeight: 1.6,
    color: "var(--text-muted)",
  },
  cardActions: {
    display: "flex",
    gap: "0.75rem",
    padding: "0 !important",
    marginTop: "auto",
    paddingTop: "1rem",
    borderTop: "1px solid var(--border-subtle)",
  },
};

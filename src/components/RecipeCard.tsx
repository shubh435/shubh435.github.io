import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Typography,
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
  return (
    <Card className="cardShubhamProject glass-panel" sx={webstyle.card}>
      <CardHeader
        avatar={
          <Avatar sx={webstyle.avatar} aria-label="recipe">
            {props.projectName.slice(0, 1)}
          </Avatar>
        }
        action={
          <CardActions disableSpacing sx={webstyle.cardActions}>
            <Link
              aria-label="add to favorites"
              style={webstyle.link}
              target="_blank"
              to={props.sourceCodeLink}
            >
              <GitHubIcon />
            </Link>
            <Link
              aria-label="share"
              style={webstyle.link}
              target="_blank"
              to={props.tryLink}
            >
              <ShareIcon />
            </Link>
          </CardActions>
        }
        sx={webstyle.cardHeader}
        title={props.projectName}
        subheader={props.subheader}
        titleTypographyProps={{ sx: webstyle.titleTypography, variant: "h3" }}
        subheaderTypographyProps={{
          style: webstyle.subheaderTypography,
          variant: "h6",
        }}
      />
      {!isVideo ? (
        <CardMedia
          component="img"
          sx={webstyle.cardMedia}
          image={props.projectImage}
          alt={`${props.projectName} - ${props.category || 'Web'} application screenshot showing the user interface`}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <CardMedia
          component="video"
          sx={webstyle.cardMedia}
          src={props.projectImage}
          title={`${props.projectName} demo video`}
          autoPlay={false}
          loop
          muted={false}
          controls
        />
      )}
      <CardContent sx={webstyle.cardContent}>
        {summary.map((sentence, index) => (
          <Typography
            key={index}
            variant="body2"
            component={"p"}
            sx={webstyle.typography}
            className="line-clamp-3"
          >
            {emphasize(sentence)}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}

const webstyle = {
  card: {
    height: 420,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "var(--bg-card)",
    color: "var(--text-primary)",
  },
  avatar: {
    background:
      "linear-gradient(180deg, rgba(70,170,114,1) 2%, rgba(0,0,0,1) 47%, rgba(45,160,164,1) 97%)",
    color: "white",
  },
  cardActions: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    marginRight: 10,
    width: 20,
    height: 20,
  },
  cardHeader: {
    color: "white",
  },
  titleTypography: {
    textTransform: "capitalize",
    color: "white",
  },
  subheaderTypography: {
    color: "white",
  },
  cardMedia: {
    width: "100%",
    aspectRatio: "16 / 9",
    objectFit: "cover",
    margin: "0 auto",
    boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
  },
  cardContent: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  typography: {
    color: "var(--text-muted)",
  },
};

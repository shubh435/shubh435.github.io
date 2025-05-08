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
import "./style.css"

export default function RecipeReviewCard(props: ProjectData) {
  return (
    <Card className="cardShubhamProject" sx={webstyle.card}>
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
        titleTypographyProps={{ sx: webstyle.titleTypography,variant:"h3" }}
        subheaderTypographyProps={{ style: webstyle.subheaderTypography,variant:"h6" }}
      />
      <CardMedia
        component="img"
        sx={webstyle.cardMedia}
        image={props.projectImage}
        alt="Shubham Sarode"
      />
      <CardContent sx={webstyle.cardContent}>
        <Typography variant="body2" component={"p"} sx={webstyle.typography}>
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

const webstyle = {
  card: {
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: "black !important",
    // background: "linear-gradient(180deg, hsl(310, 90%, 65%, 0.5) 2%, hsl(247, 90%, 25%, 0.5) 47%, hsl(247, 90%, 65%, 0.5) 97%) !important",
    color: "white"
  },
  avatar: {
    background: 'linear-gradient(180deg, rgba(70,170,114,1) 2%, rgba(0,0,0,1) 47%, rgba(45,160,164,1) 97%)',
    color: 'white'
  },
  cardActions: {
    display: "flex",
    alignItems: "center"
  },
  link: {
    color: "#fff",
    marginRight: 10,
    width: 20,
    height: 20
  },
  cardHeader: {
    color: 'white'
  },
  titleTypography: {
    textTransform: "capitalize",
    color: 'white'
  },
  subheaderTypography: {
    color: 'white'
  },
  cardMedia: {
    height: 194,
    objectFit: 'cover'
  },
  cardContent: {
    flexGrow: 1,
    overflowY: 'auto',
    maxHeight: 100
  },
  typography: {
    color: 'white'
  }
}
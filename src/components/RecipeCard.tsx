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

export default function RecipeReviewCard(props: ProjectData) {
  return (
    <Card sx={{ height: 400, display: 'flex', flexDirection: 'column' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ background: 'linear-gradient(180deg, rgba(70,170,114,1) 2%, rgba(0,0,0,1) 47%, rgba(45,160,164,1) 97%)' }} aria-label="recipe">
            {props.projectName.slice(0, 1)}
          </Avatar>
        }
        action={
          <CardActions
            disableSpacing
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Link
              aria-label="add to favorites"
              style={{ color: "#000", marginRight: 10, width: 20, height: 20 }}
              target="_blank"
              to={props.sourceCodeLink}
            >
              <GitHubIcon />
            </Link>
            <Link
              aria-label="share"
              style={{ color: "#000", marginRight: 10, width: 20, height: 20 }}
              target="_blank"
              to={props.tryLink}
            >
              <ShareIcon />
            </Link>
          </CardActions>
        }
        sx={{}}
        title={props.projectName}
        subheader={props.subheader}
        titleTypographyProps={{ style: { textTransform: "capitalize" } }}
      />
      <CardMedia
        component="img"
        sx={{ height: 194, objectFit: 'cover' }}
        image={props.projectImage}
        alt="Shubham Sarode"
      />
      <CardContent sx={{ flexGrow: 1, overflowY: 'auto', maxHeight: 100 }}>
        <Typography variant="body2" component={"p"} color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

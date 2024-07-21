import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Card, CardHeader, CardMedia, CardContent, CardActions,
  Avatar, IconButton, Typography
} from '@mui/material';
// import Collapse from '@mui/material/Collapse';
import { IconButtonProps } from '@mui/material/IconButton';
import { red as red } from '@mui/material/colors';
import GitHubIcon from '@mui/icons-material/GitHub';
import ShareIcon from '@mui/icons-material/RemoveRedEye';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ProjectData } from '../assets/data';
import { Link, useNavigate } from 'react-router-dom';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props: ProjectData) {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate()
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.projectName.slice(0, 1)}
          </Avatar>
        }
        action={
          <CardActions disableSpacing sx={{ display: "flex", alignItems: "center" }}>
            <Link aria-label="add to favorites" style={{ color: '#000', marginRight: 10, width: 20, height: 20 }} target='_blank' to={props.sorceCodeLink}>
              <GitHubIcon />
            </Link>
            <Link aria-label="share" style={{ color: '#000', marginRight: 10, width: 20, height: 20 }} target='_blank' to={props.tryLink} >
              <ShareIcon />
            </Link>
          </CardActions>
        }
        sx={{}}
        title={props.projectName}
        subheader={props.subheader}
        titleTypographyProps={{style:{textTransform:"capitalize"}}}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.porjectImage}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>

    </Card>
  );
}

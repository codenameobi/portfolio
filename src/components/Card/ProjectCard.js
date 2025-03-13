import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectCard({user}) {
  return (
    <Card variant='outlined' elevation={0}  sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {user.username}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='outlined' size="small">Github</Button>
        <Button size="small">Link</Button>
      </CardActions>
    </Card>
  );
}

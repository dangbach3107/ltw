import React from "react";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models";
import { Card, CardMedia, CardContent, Typography, List, ListItem, ListItemText, Paper } from "@mui/material";

const UserPhotos = () => {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);

  return (
    <Paper style={{ padding: "16px", margin: "16px" }}>
      <Typography variant="h5" gutterBottom>
        Photos of User {userId}
      </Typography>
      {photos.map((photo) => (
        <Card key={photo._id} style={{ marginBottom: "16px" }}>
          <CardMedia
            component="img"
            image={`/images/${photo.file_name}`}
            alt={`Photo uploaded on ${photo.date_time}`}
            style={{
              maxHeight: "300px", // Giới hạn chiều cao
              maxWidth: "100%", // Giới hạn chiều rộng
              objectFit: "contain", // Giữ tỷ lệ gốc, không cắt ảnh
              margin: "0 auto", // Căn giữa ảnh
            }}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              <strong>Date:</strong> {photo.date_time}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Comments:
            </Typography>
            <List>
              {photo.comments && photo.comments.length > 0 ? (
                photo.comments.map((comment) => (
                  <ListItem key={comment._id} alignItems="flex-start">
                    <ListItemText
                      primary={
                        <Typography variant="body1">
                          <strong>
                            <Link to={`/users/${comment.user._id}`} style={{ textDecoration: "none", color: "blue" }}>
                              {comment.user.first_name} {comment.user.last_name}
                            </Link>
                          </strong>: {comment.comment}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body2" color="textSecondary">
                          <strong>Date:</strong> {comment.date_time}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))
              ) : (
                <Typography variant="body2" color="textSecondary">
                  No comments available.
                </Typography>
              )}
            </List>
          </CardContent>
        </Card>
      ))}
    </Paper>
  );
};

export default UserPhotos;
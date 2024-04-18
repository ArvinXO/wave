import sharp from "sharp";
import fs from "fs";
import path from "path";

// Directory containing your images
const directory = "./src/assets";

fs.readdir(
  directory,
  { withFileTypes: true, recursive: true },
  (err, files) => {
    if (err) {
      console.error("Could not list the directory.", err);
      process.exit(1);
    }

    files.forEach((file) => {
      const filePath = path.join(directory, file.name);

      // Check if the file exists
      if (fs.existsSync(filePath)) {
        // Check if the file is a directory
        if (file.isDirectory()) {
          // If it's a directory, call the readdir function again to convert images in the directory
          fs.readdir(
            filePath,
            { withFileTypes: true, recursive: true },
            (err, files) => {
              if (err) {
                console.error("Could not list the directory.", err);
                process.exit(1);
              }

              files.forEach((file) => {
                const filePath = path.join(directory, file.name);

                // Check if the file exists
                if (fs.existsSync(filePath)) {
                  // Check if the file is an image
                  if (
                    file.name.endsWith(".png") ||
                    file.name.endsWith(".jpg")
                  ) {
                    // Convert the image to WebP
                    sharp(filePath)
                      .toFormat("webp")
                      .toFile(
                        filePath.replace(/\.(png|jpg)$/, ".webp"),
                        (err, info) => {
                          if (err) {
                            console.error("Could not convert the image.", err);
                          }
                        }
                      );
                  }
                }
              });
            }
          );
        } else {
          // If it's not a directory, check if it's an image and convert it
          if (file.name.endsWith(".png") || file.name.endsWith(".jpg")) {
            // Convert the image to WebP
            sharp(filePath)
              .toFormat("webp")
              .toFile(
                filePath.replace(/\.(png|jpg)$/, ".webp"),
                (err, info) => {
                  if (err) {
                    console.error("Could not convert the image.", err);
                  }
                }
              );
          }
        }
      }
    });
  }
);

import multer from "multer";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Multer configuration.

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (req.originalUrl.includes("new_service")) {
      cb(null, path.join(__dirname, "../public/services"));
    } else if (req.originalUrl.includes("new_showroom")) {
      cb(null, path.join(__dirname, "../public/showroom"));
    } else if (req.originalUrl.includes("new_car")) {
      cb(null, path.join(__dirname, "../public/cars"));
    } else {
      console.log("Invalid file path");
    }
  },
  filename: function (req, file, cb) {
    let name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});



export const upload = multer({ storage: storage });

export const cpUpload = upload.fields([{ name: 'images', maxCount: 20 }, { name: 'accident_images', maxCount: 20 }])

import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagePath = path.join(__dirname, "../Uploads/images");

const storage = multer.diskStorage({
    destination: (req, file, next) => {

        if (!fs.existsSync(imagePath)) {
            fs.mkdirSync(imagePath, { recursive: true });
        }

        next(null, imagePath);
    },

    filename: (req, file, next) => {
        next(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage });

export { upload };


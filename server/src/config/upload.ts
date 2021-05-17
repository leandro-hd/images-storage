import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
      destination: path.join(__dirname, '..', '..', 'uploads'),
      filename: (request, file, cb) => {
          const fileName = `${Date.now()}-${file.originalname}`;
          cb(null, fileName);
      },
    }),

    fileFilter: function (request, file, cb) {
      if (file.mimetype != 'image/jpeg' && file.mimetype != 'image/png') {
        return cb(new Error('Wrong file type'));
      }
      cb(null, true);
    },

    limits: {
      fileSize: 1 * 1024 * 1024,
      files: 10
    }
};
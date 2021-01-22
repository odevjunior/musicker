import multer, { Multer, StorageEngine } from 'multer'
import { env } from 'process'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'

export default class UploadController{
    

    constructor() {  
    }

    public static makeUpload():Multer {
        let storage:StorageEngine = multer.diskStorage({
            destination:env.UPLOAD_PATH,
            filename:(req, file, cb) => {
                cb(null, `${req.body.title} - ${Date.now()}.${file.mimetype.split("/")[1]}`.replace(/\s/g, ''))
                req.body.filePath = `${env.UPLOAD_PATH}${req.body.title} - ${Date.now()}.${file.mimetype.split("/")[1]}`.replace(/\s/g, '')
            }
        })

        return multer({storage:storage})
    }
}
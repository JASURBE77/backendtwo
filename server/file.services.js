// import fs from 'fs'
// import path from 'path'
// import { fileURLToPath } from 'url'
// import { dirname } from 'path'
// const { v4: uuidv4 } = require('uuid')


// class fileservice {
//     save(file) {
//         try {
//             const filename = uuidv4() + ".jpg"
//             const currentdir = __dirname
//             const staticDir = path.join(currentdir, "..", "static") // "static" — reserved word, shuning uchun staticDir deb nomladik
//             const filepath = path.join(staticDir, filename)

//             if (!fs.existsSync(staticDir)) {
//                 fs.mkdirSync(staticDir, { recursive: true })
//             }

//             file.mv(filepath)

//             return filename

//         } catch (error) {
//             throw new Error(`xatolik bor ${error}`)
//         }
//     }
// }

// export default new fileservice()
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { v4 as uuidv4 } from 'uuid'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

class fileservice {
    save(file) {
        try {
            const filename = uuidv4() + ".jpg"
            const currentdir = __dirname
            const staticDir = path.join(currentdir, "..", "static") // ⚠️ shu nom o‘zgardi
            const filepath = path.join(staticDir, filename)

            if (!fs.existsSync(staticDir)) {
                fs.mkdirSync(staticDir, { recursive: true })
            }

            file.mv(filepath)

            return filename
        } catch (error) {
            throw new Error(`xatolik bor ${error}`)
        }
    }
}

export default new fileservice()

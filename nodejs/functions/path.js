import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path'

/**
 * enhancement__dirname which allows us to access the current folder. 
 * This function does not work when using 
 * EGMscript. So solution with node.js :
 */
const dir = dirname(fileURLToPath(import.meta.url))
const filename = join(dir, 'folder', 'demo-deeb') // can make ../ To go backwards
console.log(filename)
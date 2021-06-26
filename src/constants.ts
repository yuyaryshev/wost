import os from 'os'
import path from 'path'

export const HOME_DIR = os.homedir()
export const HOSTNAME = os.hostname()
export const CONFIG_FILE_PATH = path.join(HOME_DIR, '.config/wost/config.json')
export const IGNORE_FILE_NAME = '.wsignore'
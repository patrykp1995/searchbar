const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname);
const logFilePath = path.join(logsDirectory, 'info.txt');

function logToFile(filename, message) {
    const timestamp = new Date().toLocaleString();
    const logMessage = `[${timestamp}] File: ${filename} - ${message}\n`;

    fs.mkdir(logsDirectory, { recursive: true }, (err) => {
        if (err) {
            console.error('Error when creating log directory:', err);
            return;
        }

        fs.appendFile(logFilePath, logMessage, (err) => {
            if (err) {
                console.error('Error when writing to log file:', err);
            }
        });
    });
}

function isExcludedFolder(filePath) {
    const folders = filePath.split(path.sep);
    const infoParam = process.env.INFO_PARAM;
    const appIndex = folders.indexOf('app');
    const nodeModulesIndex = folders.indexOf('node_modules');
    const hasDotFolder = folders.some((folder) => folder.startsWith('.'));

    if (infoParam === 'app') {
        return appIndex === -1 || appIndex > 0 || nodeModulesIndex !== -1 || hasDotFolder;
    } else if (infoParam === 'server') {
        return appIndex === 0 || nodeModulesIndex !== -1 || hasDotFolder;
    }

    return folders.some((folder) => folder.startsWith('.') || folder === 'node_modules');
}

function startFileWatcher() {
    const watcher = chokidar.watch('.', { ignoreInitial: true });
    const infoParam = process.env.INFO_PARAM;

    watcher.on('change', (changedPath) => {
        if (!isExcludedFolder(changedPath)) {
            logToFile(changedPath, 'Changed: ' + infoParam);
        }
    });

    watcher.on('add', (addedPath) => {
        if (!isExcludedFolder(addedPath)) {
            logToFile(addedPath, 'New: ' + infoParam);
        }
    });

    watcher.on('unlink', (removedPath) => {
        if (!isExcludedFolder(removedPath)) {
            logToFile(removedPath, 'Delete: ' + infoParam);
        }
    });
}

startFileWatcher();
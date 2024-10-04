// logger.js

// Custom date format function
function formatDate(date) {
    const yyyy = date.getFullYear();
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const HH = String(date.getHours()).padStart(2, '0');
    const MM = String(date.getMinutes()).padStart(2, '0');
    const ss = String(date.getSeconds()).padStart(2, '0');
    return `${yyyy}-${dd}-${mm} ${HH}:${MM}:${ss}`;
}

// log with timestamp
function lwt(...args) {
    const timestamp = formatDate(new Date());
    console.log(`[${timestamp}]`, ...args);
}

module.exports = { lwt };
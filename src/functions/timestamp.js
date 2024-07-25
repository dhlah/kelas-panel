// functions/timestamp.js

export function convertTimestamp(seconds, nanoseconds) {
    const totalSeconds = seconds + nanoseconds / 1e9;
    const date = new Date(totalSeconds * 1000);
    return date.toISOString().split('T')[0];
}

export function daysUntilDue(seconds, nanoseconds) {
    const totalSeconds = seconds + nanoseconds / 1e9;
    const dueDate = new Date(totalSeconds * 1000);
    const currentDate = new Date();
    
    // Set current date time to midnight to calculate full days difference
    currentDate.setHours(0, 0, 0, 0);
    
    // Calculate difference in time
    const diffTime = dueDate - currentDate;
    
    // Convert time difference to days
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}
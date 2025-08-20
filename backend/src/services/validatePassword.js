
export const validatePassword=(password) =>{
    const errors = [];

    // Rule 1: Minimum 8 characters
    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }

    // Rule 2: At least one uppercase letter
    if (!/(?=.*[A-Z])/.test(password)) {
        errors.push("Password must contain at least one uppercase letter.");
    }

    // Rule 3: At least one lowercase letter
    if (!/(?=.*[a-z])/.test(password)) {
        errors.push("Password must contain at least one lowercase letter.");
    }

    // Rule 4: At least one digit
    if (!/(?=.*\d)/.test(password)) {
        errors.push("Password must contain at least one number.");
    }

    // Rule 5: At least one special character
    if (!/(?=.*[@$!%*?&])/.test(password)) {
        errors.push("Password must contain at least one special character (e.g., @$!%*?&).");
    }

    if (errors.length === 0) {
        return {valid:true};
    } else {
        return { valid: false, Errors:errors };
    }
}


//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
    if (typeof currentPrice !== 'number' || typeof discount !== 'number') {
        return "Invalid";
    }

    if (discount < 0 || discount > 100) {
        return "Invalid";
    }

    let discountAmount = (currentPrice * discount) / 100;
    let finalPrice = currentPrice - discountAmount;

    return finalPrice.toFixed(3);
}

// Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
    if (typeof otp !== 'string') {
        return "Invalid";
    }

    if (otp.length === 8 && otp.startsWith("ph-")) {
        return true;
    } else {
        return false;
    }   
}

//Problem-03: BCS Final Score Calculator

function finalScore (omr) {
    const { right, wrong, skip } = omr;

    if (right + wrong + skip !== 100) {
        return "Invalid";
    }

    const score = right * 1 - wrong * 0.5 + skip * 0;

    return Math.round(score);   
}

// Problem-04: Upcoming Gono Vote
function gonoVote(array) {
        if (!Array.isArray(array)) {
        return "Invalid";
    }
    
    let haCount = 0;
    let naCount = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "ha") {
            haCount++;
        } else if (array[i] === "na") {
            naCount++;
        }
    }
    
    if (haCount > naCount) {
        return true;
    } else if (haCount === naCount) {
        return "equal";
    } else {
        return false;
    }
}


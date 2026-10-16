
function showTip() {
    const tips = [
        "Drink enough water throughout the day!",
        "Take a short walk and keep your body active!",
        "Include fruits and vegetables in your meals!",
        "Get enough sleep to help your body recover!",
        "Start your workout with a gentle warm-up!",
        "Consistency is more important than perfection!",
        "Take breaks from sitting for long periods!"
    ];

    const randomIndex = Math.floor(Math.random() * tips.length);

    document.getElementById("tip").innerText = tips[randomIndex];
}

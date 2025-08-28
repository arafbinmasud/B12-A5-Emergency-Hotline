
//Heart Icon Functionality
const cardHearts = document.getElementsByClassName('fa-heart');
const heartCounter = document.getElementById('heart-counter');
let heartCounterNum = parseInt(heartCounter.innerText);

for(const heart of cardHearts) {
    heart.addEventListener('click', function(){
        heartCounterNum +=1;
        heartCounter.innerText = heartCounterNum;
    })
}

//Call Button Functionality 
const callBtns = document.getElementsByClassName('btn-call');
const coinCounter = document.getElementById('coin-counter');
let coinCounterNum = parseInt(coinCounter.innerText);
const callInfoBox = document.getElementById('history-info');

for(const callBtn of callBtns){
    callBtn.addEventListener('click', function(){
        if( coinCounterNum >= 20) {
            const card = callBtn.parentElement.parentElement;
            const serviceName = card.querySelector('.card-text1 p').innerText;
            const serviceNumber = card.querySelector('.card-number h2').innerText;
            alert('📞 Calling ' + serviceName +' '+ serviceNumber +'...');
            coinCounterNum -= 20;
            coinCounter.innerText = coinCounterNum;
            const time = new Date().toLocaleTimeString('en-GB');
            const callHistoryBox2 = document.createElement('div')
            callHistoryBox2.classList.add('history-box')
            callHistoryBox2.innerHTML = ` <div>
            <p> ${card.querySelector('.card-text1 h3').innerText}</p>
            <p>${serviceNumber}</p></div>
            <div>
            <p>${time}</p>
            </div>
            `
            callInfoBox.appendChild(callHistoryBox2);
        }
        else{
            alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন প্রয়োজন।")
            return;
        }

    })
}

// Call History Section Functionality
const clearHistoryBtn = document.getElementById('clear-history');
clearHistoryBtn.addEventListener('click', function(){
    callInfoBox.innerHTML = '';
})

//Copy Button Functionality
const copyBtns = document.getElementsByClassName('btn-copy');
const copyCounter = document.getElementById('copy-counter')
let copyCounterNum = parseInt(copyCounter.innerText);


for(const copyBtn of copyBtns) {
    copyBtn.addEventListener('click', function(){
        const card = copyBtn.parentElement.parentElement;
        const serviceNumber = card.querySelector('.card-number h2').innerText;
        navigator.clipboard.writeText(serviceNumber);
        alert('নাম্বার কপি হয়েছেঃ' + ' '+ serviceNumber);
        copyCounterNum ++;
        copyCounter.innerText = copyCounterNum;
    })
}



//! YAPILACAKLAR

// 1- Kullanıcı inputa tıkladığında rengin değişmesi tamamlandı.
// 2- Klavyeden giriş olduğunda placeholder'ın kaybolması
// 3- Klavyeden giriş yapılmadığında placeholderın tekrar gelmesi
// 4- Eğer klavye girişi varsa TWEET butonu aktif olacak
// 5- Eğer kullanıcı limiti geçmişse TWEET butonu pasif olacak

// console.log('bag')

const placeholder = document.querySelector(".placeholder");
//console.log(placeholder)

const editableInput = document.querySelector(".editable");
//console.log(editableInput)

const tweetButton = document.querySelector(".button");
//console.log(tweetButton)

const counter = document.getElementById("counter");
//console.log(counter)

const readonly=document.querySelector('.readonly')
//console.log(readonly)

editableInput.addEventListener("click", () => {
  placeholder.style.color = "#98a5b1";
});

editableInput.onblur = () => {
  placeholder.style.color = "#333";
};

editableInput.onkeypress = (e) => {
  placeholder.style.display = "none";
  inputValidate(e.target.innerText);
  // console.log(e)
};

editableInput.onkeyup = (e) => {
  placeholder.style.display = "none";
  inputValidate(e.target.innerText);
};

const inputValidate = (tweet) => {
  //console.log(tweet);

  const tweetLength = tweet.length;

  const tweetLimit = 5;
  const currentLimit = tweetLimit - tweetLength;
  //console.log(tweetLength)
  //console.log(counter);

  if (tweetLength <= 0) {
    placeholder.style.display = "block";
    tweetButton.classList.remove("active");
    counter.style.display="none"
  } else {
    tweetButton.classList.add("active");
    counter.style.display = "block";
    counter.innerText = currentLimit;
  }

  let newTweet;
  if(tweetLength>tweetLimit){


    let overTweet=tweet.substr(tweetLimit, tweetLength)
    //console.log(overTweet)

    let overTweetElement=`<span class='overTweet'>${overTweet}</span>`
    console.log(overTweetElement)

    newTweet=tweet.substr(0,tweetLimit)+overTweetElement;
    readonly.style.zIndex='1'

    counter.style.color="red"
    tweetButton.classList.remove('active')

  }else{
    counter.style.color='#333'
    readonly.style.zIndex='-5'
  }

  readonly.innerHTML=newTweet

};

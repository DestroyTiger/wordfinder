const InputeActive = document.querySelector(".input-word-active");
const wordlist = document.querySelector(".word-list");
const InputeActivemobile = document.querySelector(".input-word-mobile");
const wordlistmobile = document.querySelector(".word-list-mobile");
const answerfinalh2 = document.getElementById("answerfinal");
const answerfinalbox = document.querySelector(".answerfinalbox");
const description = document.querySelector(".description");

const chistan = [{ answer: "نوار", description: "آن چیست که چه پر باشد و چه خالی وزنش یکی است؟" },
{ answer: "موج", description: "آن چیست که در رادیو و دریا مشترک و هردو آن را دارند؟" },
{ answer: "دندان", description: "آن چیست سفید است قند نیست ریشه دارد درخت نیست؟" },
{ answer: "غاز", description: "چه پرنده ای است اگر نامش را برعکس کنیم نام پرنده دیگری می شود؟" },
{ answer: "ناودان", description: "آن چیست که با گریستن آسمان اشک آن روان می شود؟" },
{ answer: "لامپ", description: "آن چیست به قدر یک گلابی ست. هم سرخ وسفید و سبز و آبی ست. مه نیست ولی چوماه روشن. بی جان بود و ستاندار جان. محفوظ همیشه درحبابی ست؟" },
{ answer: "شمع", description: "آن چیست که پر اشک بود دامن او. از دور چه استخوان نماید تن او. می سوزد و می گوید و این شد فن او. خواهی که شود زده بزن گردن او؟" },
{ answer: "قلم نی", description: "آن چیست می خورد خون سیاه می رود راه سفید؟" },
{ answer: "ادویه", description: "آن چیست اولم هست خانه ومسکن. دومم کشوری و رای ختن. همه ام هست جز وادویه. طبع شد گرم ازان و تند دهن؟" },
{ answer: "ردپا", description: "آن چیست من می روم و او می ماند؟" },
{ answer: "انار", description: "سه دکان تو در تو اولی چرم فروش دومی پرده فروش سومی یاقوت فروش؟" },
{ answer: "شیر مادر", description: "آن چیست که همه خورده اند جز حضرت آدم؟" },
{ answer: "خواب", description: " آن چیست که همه می بینند ولی خدا نمی بیند؟" },
{ answer: "بهشت", description: "چهار حرف است نام مطلوبی. که تمنای اهل عالم گشت. هست جهانی چنان عجیب. یکی اگر کم کنی بماند هشت؟" },
{ answer: "راز", description: "آن چیست که با یک نجوا می توان شکست؟" },
{ answer: "قیچی", description: " آن چیست که دوچشم دارد و وقتی انگشت به چشمانش فرو می کنی گوشهایش تیز می شود؟" },
{ answer: "حرف ق", description: " آن چیست که در هر قرن یک بار و در هر دقیقه دوبار می آید ولی درسال هیچ وقت نمی آید؟" },
{ answer: "اشک چشم", description: "چیست آن، كز چشمه ای آید برون. می شود از سنگ سختی سر نگون. مدتی بر دشت خشكی چون برفت. بیرون و درون شهر جایی دارد؟" },
{ answer: "چغندر", description: " آن چیست كه ارغوان قبایی دارد. مانند دم موش پایی دارد. گرد است و مدور است و تاجش بر سر. صد پاره تنش، ولی ز یك پایه نگون؟" },
{ answer: "عنکبوت", description: "آن چیست كه خود ریسد و خود بافد جامه. پوست در پوست گرد یكدیگر؟" },
{ answer: "خربزه", description: "آن چیست كه پا و سر ندارد. جز نام دو جانور ندارد اندر شكمش ستارگانند. اندام ظریف چون صنوبر دارد؟" },
{ answer: "لیمو شیرین", description: "آن چیست قبای زرد در بر دارد. تلخ است ولی طعمی چو شكر دارد زرد است و معطر آید به مشام. با هزاران سوار می گردد؟" },
{ answer: "لاکپشت", description: "سخت است نه كه سنگ. بیابان گرد است نه كه مرد است. تخم ریز است نه كه مرغ است. كلید آهنین قفلش گشاید؟" },
{ answer: "قلیان", description: "چیست آن مرغ آتشین منقار و قنا عذاب النار؟ شب و روز اندر آب می گوید. سرخ و سبز و سپید پوشیده؟" },
{ answer: "ملخ", description: "یك معما از تو پرسم ای حكیم پر هنر. پای او مانند اره، شیر سینه، اسب سر، مور چشم ،مار دم ،كركس پرو عقرب شكم.نیم پر شد پر تهی، یعنی چه چیز؟" },
{ answer: "شراب", description: "شیراز پری رخان مهوش دارد. بنگر كه دلم از تو چه خواهش دارد از هر سر مصرعی حروفی بردار. نه در دارد نه دیوار و حصاری؟" }];







let randomchistan = Math.floor(Math.random() * chistan.length);
description.innerText = chistan[randomchistan].description;
console.log(chistan[randomchistan].answer);
let answercount = 0;
InputeActivemobile.maxLength = chistan[randomchistan].answer.length;

for (let i of chistan[randomchistan].answer) {
    InputeActivemobile.placeholder += "-";
    InputeActivemobile.addEventListener("keyup", () => {


    });
    const inputwordcreater = document.createElement("input");
    if (answercount === 0) {
        inputwordcreater.classList = "input-word input-word-active";
        inputwordcreater.type = "text";
        inputwordcreater.maxLength = "1";
        inputwordcreater.placeholder = "-";
        inputwordcreater.disabled = false;
        inputwordcreater.autofocus = true;
        wordlist.append(inputwordcreater);
    }
    else {
        inputwordcreater.classList = "input-word";
        inputwordcreater.type = "text";
        inputwordcreater.maxLength = "1";
        inputwordcreater.placeholder = "-";
        inputwordcreater.disabled = true;
        wordlist.append(inputwordcreater);
    }
    answercount++;
    // console.log(inputwordcreater);
}
const InputWord = document.querySelectorAll(".input-word");
description.style.width = wordlist.style.width - 50;

if (chistan[randomchistan].answer.length > 7) {
    InputWord.forEach((items, index) => {
        items.style.width = "110px";
        items.style.height = "110px";


    });
}
let answerbox = [];
let conte = 0;
if (/Mobi/i.test(navigator.userAgent)) {
    wordlistmobile.style.display = "flex";
    wordlist.style.display = "none";
}
InputWord.forEach((items, index) => {


    items.addEventListener("keyup", function (event) {
        // console.log(event.keyCode);
        if (event.key >= 0 & event.key <= 9)
            items.value = "";
        if (event.keyCode >= 65 & event.keyCode <= 90 | event.keyCode === 188 | event.keyCode === 186 | event.keyCode === 222 | event.keyCode === 219 | event.keyCode === 221 | event.keyCode === 32 | event.keyCode === 220) {

            if (index < InputWord.length - 1) {
                items.nextElementSibling.classList.add("input-word-active");
                items.nextElementSibling.disabled = false;
                items.nextElementSibling.focus();
                items.value = event.key;

            }

            // console.log(`Index${index} InputWord ${InputWord.length}`);
            if (index === InputWord.length - 1)
                items.value = event.key;
            answerbox[index] = items.value;
            items.value = event.key;
        }



        if (event.key === "Backspace" & index > 0) {
            items.disabled = true;
            items.classList.remove("input-word-active");
            items.value = "";
            answerbox[index] = "";
            items.previousElementSibling.focus();

        }
        if (event.key === "Backspace" & index === 0)
            answerbox[index] = "";

    });

    items.addEventListener("mouseup", () => items.disabled = false);
});
setInterval(answerfinal, 100);
let answerboxrevers = "";
let travelcount = 0;
function answerfinal() {
    answerboxrevers = String(answerbox).replaceAll(",", "");
    answerfinalh2.innerText = answerboxrevers;
    if (chistan[randomchistan].answer === answerboxrevers) {
        answerfinalbox.innerText = "درست حدس زدید"
        travelcount++;
        if (travelcount === 10)
            location.reload();

    }
    if (/Mobi/i.test(navigator.userAgent)) {
        answerfinalh2.innerText = InputeActivemobile.value;
        if (chistan[randomchistan].answer === InputeActivemobile.value) {
            answerfinalbox.innerText = "درست حدس زدید"
            travelcount++;
            if (travelcount === 10){
            InputeActivemobile.value="";
                location.reload();
            }
        }
    }

}


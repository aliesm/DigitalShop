import React, { useState } from 'react';
import "./HomeTabs.css";

const HomeTabs = () => {

    const [activeTab, setactiveTab] = useState(1);

    const toggleTabs = (index) => {
        setactiveTab(index);
    }

    return (
        <div className="HomeTabs clearfix rtl mt-4">
            <div className="HomeTabeNews" >
                <div className="col-xs-12 col-sm-8 col-md-8 ">
                    <div className={activeTab === 1 ? "content  Active-content" : "content"}>
                        <h3 style={{ fontSize: 18 }}>فروش اینترنتی موبایل در فروشگاه اینترنتی </h3>
                        <p>فروشگاه اینترنتی موبایل، تبلت، لپ تاپ و لوازم جانبی با ارزانترین قیمت در بازار</p>
                        <p>فروش آنلاین انواع گوشی های موبایل از تمامی برندها با بهترین قیمت</p>
                        <p>فروشگاه اینترنتی  با رویکرد فروش محصولات با کم ترین قیمت به مشتریان کار خود را آغاز نموده است. شما می توانید انواع گوشی موبایل، تبلت، لپ تاپ، لوازم جانبی دیجیتال را ارزان تر از همه جا از سایت فروشگاهی  تهیه نمایید.</p>
                        <p>برای خرید گوشی موبایل، آگاهی از قیمت موبایل، مشخصات گوشی، آشنایی با بهترین گوشی بازار، خرید تبلت، آگاهی از قیمت تبلت، مشخصات تبلت، خرید تبلت ارزان و با کیفیت و آشنایی با بهترین تبلت بازار و تبلت ویندوزی با مناسب ترین قیمت همراه ما باشید.</p>
                        <p> با هدف جلب رضایت مشتریان عزیز کمترین سود ممکن را برای محصولات خود در نظر گرفته است. ارزانی محصولات ما تنها به دلیل احترام به مشتریان و رعایت حقوق مصرف کنندگان است.</p>
                    </div>
                    <div className={activeTab === 2 ? "content  Active-content" : "content"}>
                        <h3 className="h3" style={{ fontSize: 18, textAlign: 'justify' }}>نکات قابل توجه در انتخاب گوشی موبایل</h3>
                        <p>
                            انتخاب گوشی هوشمند ظاهرا کار سختی است اما اگر بدانید چه انتظاراتی از گوشی مورد نظر خود دارید این انتخاب کار راحت تری خواهد بود. پیشرفت تکنولوژی به گونه ای بوده است که تقریبا همه برندها، نیازهای اولیه و حتی حرفه ای شما به گوشی موبایل را برطرف می کند. اما...
                            <br />
                            اگر شما به دنبال یک گوشی مناسب برای ثبت لحظاتتان هستید موبایلی را انتخاب کنید که کیفیت دوربین آن عالی باشد.
                            <br />
                            اگر شما علاقمند به بازی های حرفه ای موبایل هستید باید به سخت افزار گوشی توجه زیادی داشته باشید.
                            <br />
                            اگر از گوشی برای دیدن فیلم و ویدئو استفاده می کنید باید به وضوح و کیفیت صفحه نمایش گوشی توجه کنید.
                            <br />
                            اگر شما از گوشی برای ساعات طولانی استفاده می کنید توجه به باتری و عمر شارژ آن بسیار مهم است.
                            <br />
                            آگاهی از مشخصات فنی گوشی مورد نظر قبل از انتخاب کمک زیادی به شما برای داشتن بهترین انتخاب می کند. توصیه ما این است که سعی کنید در انتخاب گوشی توجهی به نام برند نداشته باشید بلکه با بررسی و مقایسه برندهای مختلف به بهترین انتخاب برسید.
                        </p>
                    </div>
                    <div className={activeTab === 3 ? "content  Active-content" : "content"}>
                        <h3 style={{ fontSize: 18 }}>پیشرفت تکنولوژی موبایل</h3>
                        <p></p>
                        <p>تلفن های اولیه در ابتدا فقط برای مکالمه استفاده می شدند اما با پیشرفت تکنولوژی و ازدیاد شرکت های سازنده موبایل هر ساله قابلیت های جدید به آن اضافه گردید.<br /> این تکنولوژی تا آنجا پیش رفته است که امروزه گوشی های هوشمند قابلیت های بیشماری از جمله: عکاسی، فیلمبرداری، ویرایش تصویر و صدا، انجام بازی، انجام امور مختلف حسابداری، برنامه ریزی و ... را داراست؛ در واقع گوشی موبایل تبدیل به یک دستیار شخصی برای هر فردی شده است که می تواند علاوه بر کاهش زمان کارها به توسعه ارتباطات افراد کمک شایان توجهی کند.</p>
                        <p>طبق آخرین آمار جهانی تعداد مشترکان تلفن همراه با توجه به چند خطه بودن برخی از افراد حدود 5 میلیارد نفر برآورد شده است که این آمار تا سال 2018 افزایش چشم گیری داشته است و سهم گوشی های هوشمند روز به روز افزوده تر می شود.</p>
                        <p>شما می توانید در سایت فروشگاهی  بهترین گوشی های هوشمند موجود را بررسی و مقایسه نمایید و با نازل ترین قیمت آنها را خریداری کنید.</p>
                    </div> 
                </div>
                {/* <div className="HomeTabsitem col-xs-12 col-sm-4 col-md-4"> */}
                <ul className="HomeTabsitem col-xs-12 col-sm-4 col-md-4">
                    <li className={activeTab === 1 ? "Active" : ""} onClick={() => toggleTabs(1)}>بهترین کیفیت با مناسب ترین قیمت</li>
                    <li className={activeTab === 2 ? "Active" : ""} onClick={() => toggleTabs(2)}>نکات قابل توجه در انتخاب گوشی موبایل</li>
                    <li className={activeTab === 3 ? "Active" : ""} onClick={() => toggleTabs(3)}>حساب کاربری و مزایا</li>
                </ul>
                {/* </div> */}
            </div>
        </div>
    )
}

export default HomeTabs;

// //راه دوم
// import React, { useState } from 'react';
// import "./HomeTabs.css";

// const HomeTabs = () => {

//     const [activeTab, setactiveTab] = useState({ selectedTabs: 0 });

//     const TabsData = [
//         {
//             title: "بهترین کیفیت با مناسب ترین قیمت",
//             contentTitle: "فروش اینترنتی موبایل در فروشگاه اینترنتی  ",
//             contentTitlep1: "فروشگاه اینترنتی  با رویکرد فروش محصولات با کم ترین قیمت به مشتریان کار خود را آغاز نموده است. شما می توانید انواع گوشی موبایل، تبلت، لپ تاپ، لوازم جانبی دیجیتال را ارزان تر از همه جا از سایت فروشگاهی تهیه نمایید",
//             contentTitlep2: "برای خرید گوشی موبایل، آگاهی از قیمت موبایل، مشخصات گوشی، آشنایی با بهترین گوشی بازار، خرید تبلت، آگاهی از قیمت تبلت، مشخصات تبلت، خرید تبلت ارزان و با کیفیت و آشنایی با بهترین تبلت بازار و تبلت ویندوزی با مناسب ترین قیمت همراه ما باشید",
//             contentTitlep3:" با هدف جلب رضایت مشتریان عزیز کمترین سود ممکن را برای محصولات خود در نظر گرفته است. ارزانی محصولات ما تنها به دلیل احترام به مشتریان و رعایت حقوق مصرف کنندگان است."
//         },
//         {
//             title: "نکات قابل توجه در انتخاب گوشی موبایل",
//             contentTitle: "نکات قابل توجه در انتخاب گوشی موبایل",
//             contentTitlep1:"انتخاب گوشی هوشمند ظاهرا کار سختی است اما اگر بدانید چه انتظاراتی از گوشی مورد نظر خود دارید این انتخاب کار راحت تری خواهد بود. پیشرفت تکنولوژی به گونه ای بوده است که تقریبا همه برندها، نیازهای اولیه و حتی حرفه ای شما به گوشی موبایل را برطرف می کند. اما...            ",
//             contentTitlep2: "اگر شما به دنبال یک گوشی مناسب برای ثبت لحظاتتان هستید موبایلی را انتخاب کنید که کیفیت دوربین آن عالی باشد.",
//             contentTitlep3:"اگر شما علاقمند به بازی های حرفه ای موبایل هستید باید به سخت افزار گوشی توجه زیادی داشته باشید. اگر از گوشی برای دیدن فیلم و ویدئو استفاده می کنید باید به وضوح و کیفیت صفحه نمایش گوشی توجه کنید.",
//             contentTitlep4:"اگر شما از گوشی برای ساعات طولانی استفاده می کنید توجه به باتری و عمر شارژ آن بسیار مهم است. آگاهی از مشخصات فنی گوشی مورد نظر قبل از انتخاب کمک زیادی به شما برای داشتن بهترین انتخاب می کند. توصیه ما این است که سعی کنید در انتخاب گوشی توجهی به نام برند نداشته باشید بلکه با بررسی و مقایسه برندهای مختلف به بهترین انتخاب برسید.",
//         },
//         {
//             title: "حساب کاربری و مزایا",
//             contentTitle: "پیشرفت تکنولوژی موبایل",
//             contentTitlep1: "تلفن های اولیه در ابتدا فقط برای مکالمه استفاده می شدند اما با پیشرفت تکنولوژی و ازدیاد شرکت های سازنده موبایل هر ساله قابلیت های جدید به آن اضافه گردید. این تکنولوژی تا آنجا پیش رفته است که امروزه گوشی های هوشمند قابلیت های بیشماری از جمله: عکاسی، فیلمبرداری، ویرایش تصویر و صدا، انجام بازی، انجام امور مختلف حسابداری، برنامه ریزی و ... را داراست؛ در واقع گوشی موبایل تبدیل به یک دستیار شخصی برای هر فردی شده است که می تواند علاوه بر کاهش زمان کارها به توسعه ارتباطات افراد کمک شایان توجهی کند.            ",
//             contentTitlep2: "طبق آخرین آمار جهانی تعداد مشترکان تلفن همراه با توجه به چند خطه بودن برخی از افراد حدود 5 میلیارد نفر برآورد شده است که این آمار تا سال 2018 افزایش چشم گیری داشته است و سهم گوشی های هوشمند روز به روز افزوده تر می شود.",
//             contentTitlep3:"شما می توانید در سایت فروشگاهی  بهترین گوشی های هوشمند موجود را بررسی و مقایسه نمایید و با نازل ترین قیمت آنها را خریداری کنید.            "
//         },
//     ]

//     const { selectedTabs } = activeTab

//     const toggleTabs = (index) => {
//         setactiveTab({ selectedTabs: index });
//     }

//     return (
//         <div className="HomeTabs clearfix rtl mt-4">
//             <div className="HomeTabeNews" >
//                 <div className="col-xs-12 col-sm-8 col-md-8 ">
//                     <div className="Contents mt-2">
//                         {/* {TabsData[selectedTabs].content} */}
//                         <h1>{TabsData[selectedTabs].contentTitle}</h1>
//                         <p>{TabsData[selectedTabs].contentTitlep1}</p>
//                         <p>{TabsData[selectedTabs].contentTitlep2}</p>
//                         <p>{TabsData[selectedTabs].contentTitlep3}</p>
//                     </div>
//                 </div>
//                 <ul className="HomeTabsitem col-xs-12 col-sm-4 col-md-4">
//                     {TabsData.map((tab, i) => {
//                         return <li key={i} onClick={() => toggleTabs(i)} className={selectedTabs === i ? "Active" : ""}>{tab.title}</li>
//                     })}
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default HomeTabs;


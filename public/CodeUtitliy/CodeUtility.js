  //[جستجو برای  دریافت اطلاعات مرورگز]
  var sBrowser, sUsrAg = navigator.userAgent;  
  const handleBrowserType = () => {
    if (userAgent.indexOf("Firefox") > -1) {
      sBrowser = "Mozilla Firefox";
    } else if (userAgent.indexOf("SamsungBrowser") > -1) {
      sBrowser = "Samsunge Internet";
    } else if (userAgent.indexOf("Opera") > -1) {
      sBrowser = "Opera";
    } else if (userAgent.indexOf("Trident") > -1) {
      sBrowser = "Internet Explorer";
    } else if (userAgent.indexOf("Edge") > -1) {
      sBrowser = "Microsoft Edge (Legacy)";
    } else if (userAgent.indexOf("Edg") > -1) {
      sBrowser = "Microsoft Edge";
    } else if (userAgent.indexOf("Chrome") > -1) {
      sBrowser = "Google Chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
      sBrowser = "Apple Safari";
    } else sBrowser = "unKnown";
    return sBrowser;
  }

  //جستجو برای  دریافت ورژن مرورگر
  const { userAgent } = navigator

if (userAgent.includes('Firefox/')) {
    // Firefox
} else if (userAgent.includes('Edg/')) {
    // Edge (Chromium)
} else if (userAgent.includes('Chrome/')) {
    // Chrome
} else if (userAgent.includes('Safari/')) {
    // Safari
}

if (userAgent.includes('Chrome/')) {
  // Firefox
  console.log( `Chrome v${userAgent.split("Chrome/")[1].split(" ")[0]}`)
}
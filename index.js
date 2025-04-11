import fs from "fs";

// fs.readFile ফাংশনের মাধ্যমে images/cute-cat.jpg নামের ইমেজ ফাইলটি পড়া হচ্ছে।
fs.readFile("images/cute-cat.jpg", (err, data) => {
  // data হলো সেই ইমেজ ফাইলের বাইনারি ডেটা।

  if (err) {
    console.log(err);
    return;
  }

  //   ইমেজ ডেটাকে base64 ফরম্যাটে কনভার্ট করা হয়েছে, যাতে সেটা img ট্যাগে সরাসরি এম্বেড করা যায়।
  const base64Image = data.toString("base64");
  // console.log(base64Image)

  //   এখানে একটি data URL তৈরি করা হয়েছে, যা HTML-এর <img> ট্যাগে ব্যবহার করা যায়।
  // data:[MIME type (image/file type)]:[encoding],[data]
  const imgSrc = `data:image/jpeg;base64,${base64Image}`;
  //   ${base64Image} অংশে ইমেজের base64 ডেটা যুক্ত করা হয়েছে।

  const htmlContent = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Embeding Image</title>
</head>
<body>
    <img src="${imgSrc}" alt="">
</body>
</html>`;

  // fs.writeFile দিয়ে নতুন একটি ফাইল index.html তৈরি করা হচ্ছে এবং তার ভিতরে উপরের HTML কনটেন্ট লেখা হচ্ছে।
  fs.writeFile("index.html", htmlContent, (err) => {
    if (err) {
      console.log("Error writing to the HTML file:" + err);
      return;
    }
    console.log("HTML file created successfully");
  });
});

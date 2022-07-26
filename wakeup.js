let wakeLock = null;
let wakeLockActive = document.getElementById("wakeLockActive");
let wakeLockRelease = document.getElementById("wakeLockRelease");
wakeLockActive.addEventListener("click", async () => {
  console.log("heei");
  try {
    wakeLock = await navigator.wakeLock.request("screen").then(()=>{
      alert("You have turned on the wakeLock");
    });
  } catch (err) {
    console.log(`${err.name}, ${err.message}`);
  }
});
wakeLockRelease.addEventListener("click", async () => {
  console.log("beei");
  try {
    await wakeLock.release();
  } catch (err) {
    console.log(`${err.name}, ${err.message}`);
  }
});

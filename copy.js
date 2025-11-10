console.log('starting copying script');

function copyOriginalIframe() {
  console.log('running function that copies original iframe')
  const iframePlayer = document.querySelector('.iframe-player');
  
  if (!iframePlayer) {
    console.error('omg they changed iframe class! check it and update script');
    return;
  }
  
  const newIframe = document.createElement('iframe');
  newIframe.id = 'new_iframe'
  newIframe.src = iframePlayer.src;
  newIframe.style.width = '100vw';
  newIframe.style.height = '100vh';

  const wrapper = document.createElement("div");
  wrapper.id = "iframe_wrapper"; // You can set attributes for the parent element

  wrapper.appendChild(newIframe);
  document.body.appendChild(wrapper);
}

let copy_id = 1 
function replaceIframe() {
  console.log('running function that replaces new iframe')
  const iframePlayer = document.querySelector('#new_iframe');
  
  const newIframe = document.createElement('iframe');
  newIframe.id = 'new_iframe'
  newIframe.src = iframePlayer.src;
  newIframe.style.width = '100vw';
  newIframe.style.height = '100vh';
  newIframe.style.display = 'none';
  

  const wrapper = document.querySelector('#iframe_wrapper')
  const oldIframe = document.querySelector('#new_iframe');
  wrapper.insertBefore(newIframe, wrapper.firstChild)

  setTimeout(() => {
  if (oldIframe) {
    oldIframe.remove();
    document.querySelector('#new_iframe').style.display = 'block'
  }}, 3000)
}

// Create the initial iframe
copyOriginalIframe();

// Set an interval to create a new iframe every 9 minutes (9 * 60 * 1000 milliseconds)
// setInterval(replaceIframe, 9 * 60 * 1000);